import { AppThemeProvider } from './theme';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './routes';
import { store } from './store';
import { Provider } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {

  return (
    <CacheProvider value={cacheRtl}>
      <Provider store={store}>
        <ErrorBoundary>
          <AppThemeProvider>
            <Routes />
          </AppThemeProvider>
        </ErrorBoundary>
      </Provider>
    </CacheProvider>
  );
};

export default MainApp;
