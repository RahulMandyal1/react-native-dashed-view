import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dash } from 'react-native-dashed-view';

const isWeb = Platform.OS === 'web';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* First Row */}
      <View style={styles.row}>
        <Section title="Basic Lines">
          <Text style={styles.label}>Horizontal</Text>
          <Dash style={styles.horizontalDash} dashColor="#94a3b8" />
          <Text style={[styles.label, { marginTop: 16 }]}>Vertical</Text>
          <View style={styles.verticalContainer}>
            <Dash style={styles.verticalDash} dashColor="#94a3b8" />
          </View>
        </Section>

        <Section title="Colors">
          <Dash style={styles.horizontalDash} dashColor="#ef4444" />
          <Dash style={[styles.horizontalDash, { marginTop: 10 }]} dashColor="#3b82f6" />
          <Dash style={[styles.horizontalDash, { marginTop: 10 }]} dashColor="#10b981" />
          <Dash style={[styles.horizontalDash, { marginTop: 10 }]} dashColor="#f59e0b" />
        </Section>

        <Section title="Dash Sizes">
          <Text style={styles.label}>Small (2x2, gap 2)</Text>
          <Dash style={styles.horizontalDash} dashLength={2} dashThickness={2} dashGap={2} dashColor="#6366f1" />
          <Text style={[styles.label, { marginTop: 12 }]}>Medium (6x3, gap 4)</Text>
          <Dash style={styles.horizontalDash} dashLength={6} dashThickness={3} dashGap={4} dashColor="#6366f1" />
          <Text style={[styles.label, { marginTop: 12 }]}>Large (12x4, gap 6)</Text>
          <Dash style={styles.horizontalDash} dashLength={12} dashThickness={4} dashGap={6} dashColor="#6366f1" />
        </Section>

        <Section title="Dotted Lines">
          <Dash
            style={{ width: '100%', height: 6 }}
            dashLength={6}
            dashThickness={6}
            dashGap={6}
            dashColor="#ef4444"
            dashStyle={styles.rounded}
          />
          <Dash
            style={{ width: '100%', height: 10, marginTop: 14 }}
            dashLength={10}
            dashThickness={10}
            dashGap={8}
            dashColor="#3b82f6"
            dashStyle={styles.rounded}
          />
        </Section>
      </View>

      {/* Second Row */}
      <View style={styles.rowCentered}>
        <Section title="Divider with Text">
          <View style={styles.dividerRow}>
            <Dash style={styles.flexDash} dashColor="#cbd5e1" />
            <Text style={styles.dividerText}>OR</Text>
            <Dash style={styles.flexDash} dashColor="#cbd5e1" />
          </View>
          <View style={[styles.dividerRow, { marginTop: 16 }]}>
            <Dash style={styles.flexDash} dashColor="#ef4444" dashLength={8} dashGap={4} />
            <Text style={[styles.dividerText, { color: '#ef4444' }]}>NEW</Text>
            <Dash style={styles.flexDash} dashColor="#ef4444" dashLength={8} dashGap={4} />
          </View>
        </Section>

        <Section title="Receipt Style">
          <Text style={styles.receiptTitle}>Order Summary</Text>
          <Dash style={styles.receiptDash} dashColor="#e2e8f0" />
          <View style={styles.receiptRow}>
            <Text style={styles.receiptItem}>Cappuccino x2</Text>
            <Text style={styles.receiptPrice}>$8.00</Text>
          </View>
          <View style={styles.receiptRow}>
            <Text style={styles.receiptItem}>Croissant x1</Text>
            <Text style={styles.receiptPrice}>$4.50</Text>
          </View>
          <Dash style={styles.receiptDash} dashColor="#e2e8f0" />
          <View style={styles.receiptRow}>
            <Text style={styles.receiptTotal}>Total</Text>
            <Text style={styles.receiptTotalPrice}>$12.50</Text>
          </View>
        </Section>

        <Section title="Border Effect">
          <View style={styles.borderBox}>
            <Dash style={styles.borderTop} dashColor="#6366f1" dashLength={6} dashGap={4} />
            <View style={styles.borderMiddle}>
              <Dash style={styles.borderSide} dashColor="#6366f1" dashLength={6} dashGap={4} />
              <Text style={styles.borderText}>Dashed Border</Text>
              <Dash style={styles.borderSide} dashColor="#6366f1" dashLength={6} dashGap={4} />
            </View>
            <Dash style={styles.borderBottom} dashColor="#6366f1" dashLength={6} dashGap={4} />
          </View>
        </Section>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: isWeb ? 32 : 16,
    alignItems: 'center',
  },
  row: {
    flexDirection: isWeb ? 'row' : 'column',
    gap: isWeb ? 20 : 0,
    width: '100%',
    maxWidth: isWeb ? 1100 : undefined,
    justifyContent: 'center',
  },
  rowCentered: {
    flexDirection: isWeb ? 'row' : 'column',
    gap: isWeb ? 20 : 0,
    width: '100%',
    maxWidth: isWeb ? 820 : undefined,
    justifyContent: 'center',
    marginTop: isWeb ? 20 : 0,
  },
  section: {
    marginBottom: isWeb ? 0 : 20,
    width: isWeb ? 250 : '100%',
    flex: isWeb ? undefined : undefined,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    height: isWeb ? 140 : undefined,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
    }),
  },
  label: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 6,
  },
  horizontalDash: {
    width: '100%',
    height: 2,
  },
  verticalContainer: {
    height: 40,
    alignItems: 'flex-start',
  },
  verticalDash: {
    width: 2,
    height: 40,
  },
  rounded: {
    borderRadius: 100,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexDash: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '600',
    marginHorizontal: 12,
  },
  receiptTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  receiptDash: {
    width: '100%',
    height: 1,
    marginVertical: 8,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  receiptItem: {
    fontSize: 12,
    color: '#64748b',
  },
  receiptPrice: {
    fontSize: 12,
    color: '#1e293b',
    fontWeight: '500',
  },
  receiptTotal: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1e293b',
  },
  receiptTotalPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ef4444',
  },
  borderBox: {
    padding: 2,
  },
  borderTop: {
    width: '100%',
    height: 2,
  },
  borderBottom: {
    width: '100%',
    height: 2,
  },
  borderMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderSide: {
    width: 2,
    height: 50,
  },
  borderText: {
    flex: 1,
    textAlign: 'center',
    color: '#6366f1',
    fontSize: 12,
    fontWeight: '600',
  },
});
