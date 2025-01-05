import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useHabit } from '../../context/HabitContext';

export default function Rules() {
  const { state, updateRules } = useHabit();
  const [isEditing, setIsEditing] = useState(false);
  const [tempRules, setTempRules] = useState(state.rules);

  const handleSave = () => {
    updateRules(tempRules);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempRules(state.rules);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">قواعدي للنجاح</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-primary-600 hover:text-primary-700 transition-colors"
          >
            <FaEdit size={20} />
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <FaSave size={20} />
            </button>
            <button
              onClick={handleCancel}
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={tempRules}
          onChange={(e) => setTempRules(e.target.value)}
          className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-primary-500 resize-none"
          placeholder="اكتب قواعدك للنجاح هنا..."
          dir="rtl"
        />
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg min-h-[12rem]">
          {state.rules ? (
            <p className="text-gray-700 whitespace-pre-wrap">{state.rules}</p>
          ) : (
            <p className="text-gray-400 text-center">
              اضغط على أيقونة التعديل لإضافة قواعدك للنجاح...
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}