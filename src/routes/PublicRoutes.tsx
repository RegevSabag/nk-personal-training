import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout';
import { NotFoundView } from '../views';
import AboutView from '../views/About';
import WelcomeView from '../views/Welcome';

/**
 * List of routes available for anonymous users
 * Also renders the "Public Layout" composition
 * @routes PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
