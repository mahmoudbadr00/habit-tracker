// حساب النقاط المكتسبة
export const calculateCoins = (currentDay, baseCoins = 100) => {
    return Math.floor(baseCoins * Math.pow(1.5, currentDay - 1));
  };
  
  // حساب النسبة المئوية للتقدم
  export const calculateProgress = (currentDay, totalDays = 21) => {
    return Math.min((currentDay - 1) / totalDays * 100, 100);
  };
  
  // حساب أطول سلسلة نجاحات
  export const calculateLongestStreak = (streaks) => {
    let currentStreak = 0;
    let maxStreak = 0;
  
    streaks.forEach(streak => {
      if (streak.success) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
  
    return maxStreak;
  };
  
  // حساب معدل النجاح
  export const calculateSuccessRate = (streaks) => {
    if (!streaks.length) return 0;
    const successCount = streaks.filter(streak => streak.success).length;
    return Math.round((successCount / streaks.length) * 100);
  };
  
  // حساب المستوى الحالي بناءً على النقاط
  export const calculateLevel = (coins) => {
    return Math.floor(Math.log2(coins / 100 + 1)) + 1;
  };
  
  // حساب النقاط المطلوبة للمستوى التالي
  export const calculateNextLevelCoins = (currentLevel) => {
    return Math.floor(100 * (Math.pow(2, currentLevel) - 1));
  };
  
  // تحويل التاريخ إلى تنسيق مناسب
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };