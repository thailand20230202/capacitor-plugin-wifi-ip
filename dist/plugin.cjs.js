'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const WifiIp = core.registerPlugin('WifiIp', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WifiIpWeb()),
});

class WifiIpWeb extends core.WebPlugin {
    async getIP() {
        return { ip: null };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WifiIpWeb: WifiIpWeb
});

exports.WifiIp = WifiIp;
//# sourceMappingURL=plugin.cjs.js.map
