import React from 'react'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    list: {
        padding: 20
    },
    progress: {
        margin: 10,
    },
    itemContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    materialName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    materialUniversityName: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24,
    },
    materialButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#002376',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    materialButtonText: {
        fontSize: 16,
        color: '#002376',
        fontWeight: 'bold'
    },
    materialSearchButtonText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    materialFavoriteButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#e50000',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    materialFavoriteButtonText: {
        fontSize: 16,
        color: '#e50000',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        height: 50,
        fontSize: 15,
        borderColor: '#3450A8',
        borderWidth: 1
    }
})