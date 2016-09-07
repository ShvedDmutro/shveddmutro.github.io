import ProdConf from './configureStore.prod';
import DevConf from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
    module.exports = ProdConf;
} else {
    module.exports = DevConf;
}
