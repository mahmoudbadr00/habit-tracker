export const quotes = [
    {
      text: "كل يوم بتنجح فيه هو خطوة جديدة نحو حياة أفضل 🌟",
      category: "success"
    },
    {
      text: "قوتك الحقيقية في إرادتك وعزيمتك 💪",
      category: "motivation"
    },
    {
      text: "التغيير صعب في البداية، متوسط في النص، جميل في النهاية 🎯",
      category: "change"
    },
    {
      text: "كل ما تقاوم، كل ما هتحس إنك أقوى 🌈",
      category: "resistance"
    },
    {
      text: "مفيش حاجة أحلى من الإحساس بالإنجاز 🏆",
      category: "achievement"
    },
    {
      text: "إنت أقوى من أي احباط، ثق في نفسك 💫",
      category: "confidence"
    },
    {
      text: "خليك فاكر إن كل يوم بتنجح فيه هو انتصار جديد 🎉",
      category: "success"
    },
    {
      text: "الرياضة والمذاكرة هيخلوك إنسان أفضل كل يوم 📚",
      category: "improvement"
    },
    {
      text: "ركز على هدفك وإنت هتوصل في الوقت المناسب ⭐",
      category: "focus"
    },
    {
      text: "كل خطوة صغيرة هي إنجاز يستحق الاحتفال 🎊",
      category: "progress"
    },





    {
      text: "ابدأ يومك بطاقة إيجابية، وإن شاء الله الخير جاي 🌅",
      category: "positivity"
    },
    {
      text: "كل تحدي بتواجهه بيقويك أكتر مما تتخيل 💪",
      categor: "strength"
    },
    {
      text: "خليك مركز على حلمك، وبإصرارك هتحققه 🎯",
      category: "dreams"
    },
    {
      text: "طريق النجاح مليان تجارب، استمتع بالرحلة 🚀",
      category: "journey"
    },
    {
      text: "النهاردة فرصة جديدة تبدأ من أول وجديد ✨",
      category: "opportunity"
    },
    {
      text: "لو عندك حلم، متتنازلش عنه مهما حصل 🛤️",
      category: "perseverance"
    },
    {
      text: "لحظة النجاح تستاهل كل تعبك 🌟",
      category: "achievement"
    },
    {
      text: "ثق في نفسك، العالم محتاج لموهبتك 💫",
      category: "confidence"
    },
    {
      text: "كل يوم جديد هو صفحة جديدة في كتاب حياتك 📖",
      category: "life"
    },
    {
      text: "الماضي اتعلم منه، بس مستقبلك هو الأهم 🌠",
      category: "future"
    },
    {
      text: "خليك ممتن لكل لحظة بتعيشه، البساطة جمال 🌻",
      category: "gratitude"
    },
    {
      text: "الصبر والمثابرة هم مفتاح أي إنجاز كبير 🔑",
      category: "patience"
    },
    {
      text: "عيش كل لحظة وكأنها أهم لحظة في حياتك ⏳",
      category: "mindfulness"
    },
    {
      text: "كل إنجاز صغير هو خطوة نحو حلمك الكبير 🏞️",
      category: "growth"
    },
    {
      text: "أحلامك محتاجة شجاعة، خليك شجاع 🦁",
      category: "courage"
    },
    {
      text: "النجاح مش في النهاية، النجاح في الرحلة نفسها 🚶‍♂️",
      category: "success"
    },
    {
      text: "التغيير بيبدأ بخطوة واحدة صغيرة 👣",
      category: "change"
    },
    {
      text: "اتعلم حاجة جديدة كل يوم، العلم نور 🌟",
      category: "learning"
    },
    {
      text: "استمتع باللحظة، واستعد للأفضل 🌼",
      category: "happiness"
    },
    {
      text: "كل ما تهتم بنفسك أكتر، هتكون سعيد أكتر 🧘‍♂️",
      category: "selfcare"
    }
  ];
  export const getRandomQuote = (category = null) => {
    const filteredQuotes = category
      ? quotes.filter(quote => quote.category === category)
      : quotes;
    return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  };
  export const getQuoteForDay = (day) => {
    if (day === 1) return quotes.find(q => q.category === "motivation");
    if (day === 2) return quotes.find(q => q.category === "change");
    if (day === 3) return quotes.find(q => q.category === "resistance");
    if (day === 4) return quotes.find(q => q.category === "confidence");
    if (day === 5) return quotes.find(q => q.category === "improvement");
    if (day === 6) return quotes.find(q => q.category === "focus");
    if (day === 7) return quotes.find(q => q.category === "progress");
    if (day === 8) return quotes.find(q => q.category === "success");
    if (day === 9) return quotes.find(q => q.category === "achievement");
    if (day === 10) return quotes.find(q => q.category === "success");

    if (day === 11) return quotes.find(q => q.category === "positivity");
    if (day === 12) return quotes.find(q => q.category === "strength");
    if (day === 13) return quotes.find(q => q.category === "dreams");
    if (day === 14) return quotes.find(q => q.category === "journey");
    if (day === 15) return quotes.find(q => q.category === "opportunity");
    if (day === 16) return quotes.find(q => q.category === "perseverance");
    if (day === 17) return quotes.find(q => q.category === "achievement");
    if (day === 18) return quotes.find(q => q.category === "confidence");
    if (day === 19) return quotes.find(q => q.category === "life");
    if (day === 20) return quotes.find(q => q.category === "future");
    if (day === 21) return quotes.find(q => q.category === "gratitude");

    if (day === 22) return quotes.find(q => q.category === "patience");
    if (day === 23) return quotes.find(q => q.category === "mindfulness");
    if (day === 24) return quotes.find(q => q.category === "growth");
    if (day === 25) return quotes.find(q => q.category === "courage");
    if (day === 26) return quotes.find(q => q.category === "success");
    if (day === 27) return quotes.find(q => q.category === "change");
    if (day === 28) return quotes.find(q => q.category === "learning");
    if (day === 29) return quotes.find(q => q.category === "happiness");
    if (day === 30) return quotes.find(q => q.category === "selfcare");
    return getRandomQuote();
  };