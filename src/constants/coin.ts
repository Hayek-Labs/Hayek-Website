import { ReactComponent as USDTLogo } from '@/static_assets/logos/coins/tether-usdt-logo.svg';
import { ReactComponent as USDCLogo } from '@/static_assets/logos/coins/usd-coin-usdc-logo.svg';

export type Coin = 'USDT' | 'USDC' | 'HAS' | 'USDH';

export const coinToLogo: Record<Coin, SVGComponent | undefined> = {
  USDT: USDTLogo,
  USDC: USDCLogo,
  HAS: undefined,
  USDH: undefined,
};
