# react-native-dashed-view

[![NPM version](https://img.shields.io/npm/v/react-native-dashed-view.svg)](https://www.npmjs.com/package/react-native-dashed-view)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple and customizable dashed line component for React Native. Draw horizontal or vertical dashed/dotted lines with ease.

![react-native-dashed-view](./assets/cover.png)

## Installation

```bash
npm install react-native-dashed-view
# or
yarn add react-native-dashed-view
```

### Peer Dependencies

This package requires the following peer dependencies:

- `react` >= 17.0.0
- `react-native` >= 0.64.0

## Usage

```tsx
import { Dash } from 'react-native-dashed-view';

// Horizontal dashed line
const HorizontalDash = () => (
  <Dash style={{ width: 100, height: 1 }} />
);

// Vertical dashed line
const VerticalDash = () => (
  <Dash style={{ width: 1, height: 100 }} />
);

// Custom colored dash
const ColoredDash = () => (
  <Dash
    style={{ width: 200, height: 1 }}
    dashColor="#007AFF"
    dashLength={8}
    dashGap={4}
  />
);

// Dotted line (rounded dashes)
const DottedLine = () => (
  <Dash
    style={{ width: 200, height: 4 }}
    dashLength={4}
    dashThickness={4}
    dashGap={4}
    dashStyle={{ borderRadius: 100, overflow: 'hidden' }}
  />
);

// Full width with flex
const FlexDash = () => (
  <Dash style={{ flex: 1, height: 1 }} />
);
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `ViewStyle` | `{ flexDirection: 'row' }` | Container style. Direction is auto-detected from dimensions. |
| `dashGap` | `number` | `2` | Gap between two dashes in pixels |
| `dashLength` | `number` | `4` | Length of each dash in pixels |
| `dashThickness` | `number` | `2` | Thickness of each dash in pixels |
| `dashColor` | `string` | `'black'` | Color of each dash |
| `dashStyle` | `ViewStyle` | `{}` | Custom style for individual dashes |

## Tips

1. **Horizontal vs Vertical**: The component auto-detects direction based on container dimensions. If `height > width`, it renders vertically; otherwise horizontally.

2. **Rounded Dots**: Use `dashStyle={{ borderRadius: 100, overflow: 'hidden' }}` with equal `dashLength` and `dashThickness` for perfect circles.

3. **Flex Support**: Works with `flex: 1` for responsive layouts.

## Examples

### Separator Line

```tsx
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Dash style={{ flex: 1, height: 1 }} dashColor="#E0E0E0" />
  <Text style={{ marginHorizontal: 10 }}>OR</Text>
  <Dash style={{ flex: 1, height: 1 }} dashColor="#E0E0E0" />
</View>
```

### Border Effect

```tsx
<View style={{ padding: 16 }}>
  <Dash style={{ width: '100%', height: 1 }} dashColor="#CCC" />
  <Text style={{ paddingVertical: 16 }}>Content</Text>
  <Dash style={{ width: '100%', height: 1 }} dashColor="#CCC" />
</View>
```

## Contributing

PRs are welcome! Please follow the conventional commit format.

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Format code
npm run format

# Type check
npm run typecheck

# Build
npm run build
```

## License

MIT License - see [LICENSE](./LICENSE) for details.
