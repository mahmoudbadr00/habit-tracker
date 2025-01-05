
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p className="text-gray-600">
              تذكر دائماً: التغيير يبدأ بخطوة صغيرة كل يوم
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-primary-600 hover:text-primary-700 transition-colors">
              مساعدة
            </button>
            <button className="text-primary-600 hover:text-primary-700 transition-colors">
              معلومات عنا
            </button>
            <button className="text-primary-600 hover:text-primary-700 transition-colors">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}