import createHistory from 'history/createBrowserHistory';
import i18n from './i18n';
import config from 'src/config/app.conf';

const setLanguage = location => {
  let language = location.pathname.split('/')[1];
  if (process.env.__LOCALES__.includes(language)) {
    i18n.changeLanguage(language);
  } else {
    i18n.changeLanguage(config.defaultLocale);
  }
};

const history = createHistory();
history.listen((location, action) => {
  window.scrollTo(0, 0);
  setLanguage(location);
});
setLanguage(history.location);

export default history;
