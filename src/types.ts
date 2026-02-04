import type { StyleProp, ViewStyle } from 'react-native';

export interface DashProps {
  /**
   * Container style for the dash component
   * Use flexDirection to control horizontal ('row') or vertical ('column') dashes
   * @default { flexDirection: 'row' }
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Gap between two dashes in pixels
   * @default 2
   */
  dashGap?: number;

  /**
   * Length of each dash in pixels
   * @default 4
   */
  dashLength?: number;

  /**
   * Thickness of each dash in pixels
   * @default 2
   */
  dashThickness?: number;

  /**
   * Color of each dash
   * @default 'black'
   */
  dashColor?: string;

  /**
   * Custom style for individual dashes
   * ProTip: Use { borderRadius: 100, overflow: 'hidden' } for rounded dots
   */
  dashStyle?: StyleProp<ViewStyle>;
}
