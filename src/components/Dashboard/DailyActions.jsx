import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function DailyActions() {
  const { markSuccess, markFailure } = useHabit();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false); // حالة جديدة للتحكم في إظهار الرسالة

  const handleSuccess = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      await markSuccess();
      setIsSuccess(true);
      setShowMessage(true); // عرض الرسالة
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFailure = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      await markFailure();
      setIsSuccess(false);
      setShowMessage(true); // عرض الرسالة
    } finally {
      setIsProcessing(false);
    }
  };

  // إخفاء الرسالة بعد دقيقة واحدة
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 60000); // 60000 مللي ثانية = دقيقة واحدة

      return () => clearTimeout(timer); // تنظيف المؤقت عند إعادة التهيئة
    }
  }, [showMessage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">تقييم اليوم</h2>
      <div className="grid grid-cols-2 gap-4 mb-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSuccess}
          disabled={isProcessing}
          className={`
            flex items-center justify-center gap-2
            bg-gradient-to-r from-green-500 to-green-600
            hover:from-green-600 hover:to-green-700
            text-white py-4 px-6 rounded-lg
            transition-all duration-200
            disabled:opacity-50
          `}
        >
          <FaCheck />
          <span className="font-bold">نجحت اليوم!</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleFailure}
          disabled={isProcessing}
          className={`
            flex items-center justify-center gap-2
            bg-gradient-to-r from-red-500 to-red-600
            hover:from-red-600 hover:to-red-700
            text-white py-4 px-6 rounded-lg
            transition-all duration-200
            disabled:opacity-50
          `}
        >
          <FaTimes />
          <span className="font-bold">للأسف فشلت</span>
        </motion.button>
      </div>

      {showMessage && (
        isSuccess ? (
          <div className="text-2xl font-bold text-green-700 mb-6">عااااااااااااااااااااااش 🤩🔥🔥!</div>
        ) : (
          <div className="text-2xl font-bold text-red-700 mb-6">حاول مرة أخرى غدًا!</div>
        )
      )}

      <p className="text-gray-500 text-sm text-center mt-4">
        تذكر: كل يوم هو فرصة جديدة للنجاح!
      </p>
    </motion.div>
  );
}
