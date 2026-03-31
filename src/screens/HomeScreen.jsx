import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Spacing, useTheme } from '../utils/Theme';
import { useResponsive } from '../utils/responsive';

export default function HomeScreen() {
  const { colors } = useTheme();
  const { rs, rvs, rms } = useResponsive();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.pagebackground }]}
      edges={['bottom']}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.primary,
            height: rvs(250),
            borderBottomRightRadius: rs(100),
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerView}>
            {/* Top row: Menu and placeholders */}
            <View style={styles.topRow}>
              <TouchableOpacity onPress={() => {}} style={styles.menuButton}>
                <Icon name="menu-outline" size={rms(25)} color={colors.black} />
              </TouchableOpacity>
            </View>

            {/* Middle aligned text and button */}
            <View style={styles.greetingContainer}>
              <Text
                style={[
                  styles.headerText,
                  {
                    fontSize: rms(24),
                    color: colors.white,
                    marginBottom: rs(4),
                  },
                ]}
              >
                Welcome to MoveX
              </Text>
              <Text
                style={[
                  styles.subHeaderText,
                  { fontSize: rms(16), color: colors.white },
                ]}
              >
                Ready to Move?
              </Text>

              <View style={styles.rideButton}>
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: rms(14),
                  }}
                >
                  Ride with MoveX
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={require('../../assets/car2.png')}
            style={styles.carImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // dynamic values injected via inline styles above
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontWeight: '500',
    opacity: 0.9,
  },
  headerView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topRow: {
    marginTop: 30,
    width: '50%',
  },
  menuButton: {
    padding: 4,
    marginLeft: -4, // Counteract padding for optical alignment
  },
  greetingContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  rideButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  carImage: {
    width: '55%',
    height: '55%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
