import { FC, useEffect } from 'react';
// styles
import './App.css';
import './colors.css';
// translations
import { useTranslation } from 'react-i18next';
import './localization';
// theme
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './redux/store';
import { toggleTheme } from './redux/themeSlice';

const App: FC = () => {
  const { t, i18n } = useTranslation('landing');
  document.dir = i18n.dir();

  return (
    <Provider store={store}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <h1>{t('hello')}</h1>
        <button
          onClick={async () => {
            await i18n.changeLanguage('ar');
          }}
        >
          ar
        </button>
        <button
          onClick={async () => {
            await i18n.changeLanguage('en');
          }}
        >
          en
        </button>
        <button
          onClick={async () => {
            await i18n.changeLanguage('es');
          }}
        >
          es
        </button>
        <button
          onClick={async () => {
            await i18n.changeLanguage('fr');
          }}
        >
          fr
        </button>
        <Test />
      </div>
    </Provider>
  );
};

const Test = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <button onClick={handleToggle}>{themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>
  );
};

export default App;
