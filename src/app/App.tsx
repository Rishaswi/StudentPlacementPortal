import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
        <div className="w-full min-h-screen md:min-h-0 md:h-auto md:max-w-7xl bg-white md:shadow-2xl md:rounded-xl overflow-hidden flex flex-col">
          <RouterProvider router={router} />
        </div>
      </div>
    </AuthProvider>
  );
}