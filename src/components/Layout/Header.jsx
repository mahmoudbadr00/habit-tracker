import { motion } from 'framer-motion';
import { FaCog, FaTrophy, FaCoins } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function Header() {
  const { state } = useHabit();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-gray-800">رحلة التغيير</h1>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <FaTrophy className="text-yellow-500" />
              <span className="font-bold">يوم {state.currentDay}/21</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <FaCoins className="text-yellow-500" />
              <span className="font-bold">{state.coins.toLocaleString()}</span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaCog size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}