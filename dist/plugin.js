var capacitorWifiIp = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
