import type { ReactElement } from 'react';
import { useCallback, useState } from 'react';
import { View } from 'react-native';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import type { DashProps } from './types';

const DEFAULT_DASH_GAP = 2;
const DEFAULT_DASH_LENGTH = 4;
const DEFAULT_DASH_THICKNESS = 2;
const DEFAULT_DASH_COLOR = 'black';

export const Dash = ({
  style,
  dashGap = DEFAULT_DASH_GAP,
  dashLength = DEFAULT_DASH_LENGTH,
  dashThickness = DEFAULT_DASH_THICKNESS,
  dashColor = DEFAULT_DASH_COLOR,
  dashStyle,
}: DashProps): ReactElement => {
  const [dashCount, setDashCount] = useState(0);
  const [isVertical, setIsVertical] = useState(false);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { width, height } = event.nativeEvent.layout;

      // Determine direction from the container dimensions
      // If height > width, it's vertical; otherwise horizontal
      const vertical = height > width;
      setIsVertical(vertical);

      const dimension = vertical ? height : width;
      const count = Math.ceil(dimension / (dashLength + dashGap));
      setDashCount(count);
    },
    [dashGap, dashLength]
  );

  const containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: isVertical ? 'column' : 'row',
      overflow: 'hidden',
    },
    style,
  ];

  const getDashStyle = useCallback(
    (index: number): StyleProp<ViewStyle> => {
      const isLast = index === dashCount - 1;

      return [
        {
          width: isVertical ? dashThickness : dashLength,
          height: isVertical ? dashLength : dashThickness,
          backgroundColor: dashColor,
          marginRight: isVertical ? 0 : isLast ? 0 : dashGap,
          marginBottom: isVertical ? (isLast ? 0 : dashGap) : 0,
        },
        dashStyle,
      ];
    },
    [dashCount, dashColor, dashGap, dashLength, dashThickness, dashStyle, isVertical]
  );

  const renderDashes = () => {
    const dashes: ReactElement[] = [];
    for (let i = 0; i < dashCount; i++) {
      dashes.push(<View key={i} style={getDashStyle(i)} />);
    }
    return dashes;
  };

  return (
    <View style={containerStyle} onLayout={onLayout}>
      {renderDashes()}
    </View>
  );
};

export default Dash;
