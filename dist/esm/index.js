import { registerPlugin } from '@capacitor/core';
const WifiIp = registerPlugin('WifiIp', {
    web: () => import('./web').then(m => new m.WifiIpWeb()),
});
export * from './definitions';
export { WifiIp };
//# sourceMappingURL=index.js.map