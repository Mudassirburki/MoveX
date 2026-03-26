import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const MapScreen = () => {
    const userLat = 33.96003077501339;
    const userLng = 71.7310140544557634;
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: userLat,
                    longitude: userLng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker coordinate={{ latitude: userLat, longitude: userLng }} />
            </MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
})