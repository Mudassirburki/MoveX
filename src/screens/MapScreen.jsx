import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '../utils/Theme';

const MapScreen = () => {
    const { colors } = useTheme();

    const userLat = 33.96003077501339;
    const userLng = 71.73101405445763;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.pagebackground }]} edges={['top']}>
            <MapView
                style={styles.map}
                region={{
                    latitude: userLat,
                    longitude: userLng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{ latitude: userLat, longitude: userLng }} />
            </MapView>
        </SafeAreaView>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});