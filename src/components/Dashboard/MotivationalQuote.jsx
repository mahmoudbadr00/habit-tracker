import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHabit } from '../../context/HabitContext';
import { getQuoteForDay } from '../../data/quotes';

export default function MotivationalQuote() {
  const { state } = useHabit();
  const [quote, setQuote] = useState(getQuoteForDay(state.currentDay));

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getQuoteForDay(state.currentDay));
    }, 60000); // تغيير الرسالة كل دقيقة

    return () => clearInterval(interval);
  }, [state.currentDay]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quote.text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg p-6 text-white"
      >
        <div className="flex flex-col items-center text-center">
          <motion.p
            className="text-xl md:text-2xl font-bold mb-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {quote.text}
          </motion.p>
          <div className="text-white/80 text-sm">
            استمر في طريقك نحو النجاح!
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}