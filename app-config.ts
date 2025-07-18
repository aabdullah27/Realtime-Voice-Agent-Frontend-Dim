import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Dimitra',
  pageTitle: 'Dimitra Customer Voice Agent',
  pageDescription: 'A voice agent built with Love',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/logo.png',
  accent: '#002cf2',
  logoDark: '/logo.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',
};
