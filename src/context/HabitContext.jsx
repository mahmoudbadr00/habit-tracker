import { createContext, useContext, useReducer } from 'react';

const HabitContext = createContext();

const STORAGE_KEY = 'habitState';

const initialState = {
  currentDay: 1,
  coins: 0,
  rules: '',
  streaks: [],
  lastUpdated: null,
  achievements: [],
};

// استرجاع الحالة المخزنة من Local Storage
const loadInitialState = () => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : initialState;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return initialState;
  }
};

function habitReducer(state, action) {
  let newState;
  
  switch (action.type) {
    case 'MARK_SUCCESS':
      newState = {
        ...state,
        currentDay: state.currentDay + 1,
        coins: state.coins + calculateCoins(state.currentDay),
        streaks: [...state.streaks, { date: new Date().toISOString(), success: true }],
        lastUpdated: new Date().toISOString(),
      };
      break;
      
    case 'MARK_FAILURE':
      newState = {
        ...state,
        currentDay: 1,
        coins: 0,
        streaks: [...state.streaks, { date: new Date().toISOString(), success: false }],
        lastUpdated: new Date().toISOString(),
      };
      break;
      
    case 'UPDATE_RULES':
      newState = {
        ...state,
        rules: action.payload,
      };
      break;
      
    case 'UNLOCK_ACHIEVEMENT':
      newState = {
        ...state,
        achievements: [...state.achievements, action.payload],
      };
      break;
      
    default:
      return state;
  }
  
  // تخزين الحالة الجديدة في Local Storage مباشرة بعد كل تغيير
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
  
  return newState;
}

function calculateCoins(day) {
  return Math.floor(100 * Math.pow(1.5, day - 1));
}

// eslint-disable-next-line react/prop-types
export function HabitProvider({ children }) {
  const [state, dispatch] = useReducer(habitReducer, null, loadInitialState);

  const value = {
    state,
    dispatch,
    markSuccess: () => dispatch({ type: 'MARK_SUCCESS' }),
    markFailure: () => dispatch({ type: 'MARK_FAILURE' }),
    updateRules: (rules) => dispatch({ type: 'UPDATE_RULES', payload: rules }),
    unlockAchievement: (achievement) => 
      dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: achievement }),
  };

  return (
    <HabitContext.Provider value={value}>
      {children}
    </HabitContext.Provider>
  );
}

export function useHabit() {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabit must be used within a HabitProvider');
  }
  return context;
}