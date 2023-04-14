import { WebPlugin } from '@capacitor/core';
import type { WifiIpPlugin } from './definitions';
export declare class WifiIpWeb extends WebPlugin implements WifiIpPlugin {
    getIP(): Promise<{
        ip: string | null;
    }>;
}
