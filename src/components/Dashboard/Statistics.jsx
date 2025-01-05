import { motion } from 'framer-motion';
import { FaChartLine, FaCalendarCheck, FaPercentage } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function Statistics() {
  const { state } = useHabit();

  const calculateSuccessRate = () => {
    if (!state.streaks.length) return 0;
    const successCount = state.streaks.filter(streak => streak.success).length;
    return Math.round((successCount / state.streaks.length) * 100);
  };

  const getLongestStreak = () => {
    let currentStreak = 0;
    let maxStreak = 0;

    state.streaks.forEach(streak => {
      if (streak.success) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    return maxStreak;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">إحصائياتك</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <FaCalendarCheck className="text-primary-500 text-xl" />
            <h3 className="font-bold text-gray-700">أطول سلسلة نجاحات</h3>
          </div>
          <p className="text-2xl font-bold text-primary-600">
            {getLongestStreak()} أيام
          </p>
        </div>

        <div className="bg-secondary-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <FaPercentage className="text-secondary-500 text-xl" />
            <h3 className="font-bold text-gray-700">نسبة النجاح</h3>
          </div>
          <p className="text-2xl font-bold text-secondary-600">
            {calculateSuccessRate()}%
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <FaChartLine className="text-green-500 text-xl" />
            <h3 className="font-bold text-gray-700">المجموع</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {state.streaks.length} يوم
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-gray-700 mb-3">آخر 7 أيام</h3>
        <div className="flex gap-2">
          {state.streaks.slice(-7).map((streak, index) => (
            <div
              key={index}
              className={`flex-1 h-20 rounded-lg ${
                streak.success
                  ? 'bg-gradient-to-b from-green-400 to-green-500'
                  : 'bg-gradient-to-b from-red-400 to-red-500'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}