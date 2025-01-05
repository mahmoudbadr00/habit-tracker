import { HabitProvider } from './context/HabitContext';
import ProgressTracker from './components/Dashboard/ProgressTracker';
import Rules from './components/Dashboard/Rules';
import CoinSystem from './components/Dashboard/CoinSystem';
import DailyActions from './components/Dashboard/DailyActions';
import MotivationalQuote from './components/Dashboard/MotivationalQuote';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <HabitProvider>
      <Layout>
      {/* <div className="min-h-screen bg-gradient-to-br from-primary-100 to-secondary-100 p-4 font-cairo">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            رحلة التغيير - 21 يوم
          </h1>
           */}
          <div className="grid gap-6">
            <ProgressTracker />
            <MotivationalQuote />
            <DailyActions />
            <div className="grid md:grid-cols-2 gap-6">
              <Rules />
              <CoinSystem />
            </div>
            
          </div>
        {/* </div>
      </div> */}
      </Layout>
    </HabitProvider>
  );
}