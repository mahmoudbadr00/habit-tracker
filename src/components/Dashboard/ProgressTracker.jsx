import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function ProgressTracker() {
  const { state } = useHabit();
  const progress = (state.currentDay - 1) / 21 * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">تقدمك</h2>
        <div className="flex items-center">
          <FaTrophy className="text-yellow-500 ml-2" />
          <span className="text-xl font-bold">يوم {state.currentDay}/21</span>
        </div>
      </div>

      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }, (_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full ${
              i < state.currentDay - 1
                ? 'bg-gradient-to-br from-green-400 to-green-600'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {state.currentDay > 21 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-yellow-100 p-4 rounded-lg text-center"
        >
          <h3 className="text-xl font-bold text-yellow-800 mb-2">
            🎉 مبروك! أكملت التحدي! 🎉
          </h3>
          <p className="text-yellow-700">
            لقد أثبت أنك قادر على تحقيق أهدافك. استمر في المحافظة على عاداتك الجديدة!
          </p>
        </motion.div>
      )}
    </div>
  );
}