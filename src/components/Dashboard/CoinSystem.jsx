import { motion } from 'framer-motion';
import { FaCoins, FaChartLine } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function CoinSystem() {
  const { state } = useHabit();

  const nextReward = Math.floor(100 * Math.pow(1.5, state.currentDay));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">نقاطك</h2>
        <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-lg">
          <FaCoins className="text-yellow-500 ml-2" />
          <span className="text-xl font-bold text-yellow-700">
            {state.coins.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">المكافأة القادمة:</span>
          <div className="flex items-center">
            <FaCoins className="text-yellow-500 ml-2" />
            <span className="text-lg font-bold text-gray-700">
              {nextReward.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaChartLine className="text-primary-500" />
          <span>كل نجاح يزيد مكافأتك بنسبة 50%</span>
        </div>
      </div>

      {/* <div className="mt-4">
        <h3 className="font-bold text-gray-700 mb-2">إنجازاتك:</h3>
        <div className="grid grid-cols-2 gap-3">
          {state.achievements && state.achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-lg"
            >
              <p className="font-bold text-gray-800">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </motion.div>
  );
}