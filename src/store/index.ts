import { createPinia } from 'pinia';

const store = createPinia();

export { store };

export * from './modules/user';
export default store;