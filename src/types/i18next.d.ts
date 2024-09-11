import { defaultNS } from 'localization/index';
import * as resources from 'localization/resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
  }
}
