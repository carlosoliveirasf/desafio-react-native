import React, { Component } from 'react'

import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { styles } from '../styles/mainStyle'
import { queryAllMaterials, removeFavoriteMaterial } from '../repository/materialSchema'
import realm from '../repository/materialSchema';

export default class FavoriteTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materialList: []
        }
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }

    removeMaterialAlert = async item => {
        Alert.alert(
            '',
            `Delete material: ${item.title}?`,
            [
                {
                    text: 'CANCEL', onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'DELETE', onPress: () => {
                        this.removeMaterial(item.id)
                    }
                },
                { cancelable: true }
            ]
        )
    }

    removeMaterial = async materialId => {
        try {
            await removeFavoriteMaterial(materialId)
        } catch (error) {
            alert(`Insert new Material error ${error}`)
        }
    }

    reloadData = async () => {
        try {
            const materialList = await queryAllMaterials()
            this.setState({ materialList });
        } catch (error) {
            this.setState({ materialList: [] });
        }
    }

    renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.materialName}>{item.title.replace(/<[^>]*>/g, '')}</Text>
            <Text style={styles.materialUniversityName}>{item.subjectName}</Text>
            <Text style={styles.materialUniversityName}>{item.universityShortName}</Text>
            <TouchableOpacity
                onPress={() => { this.removeMaterialAlert(item) }}
                style={styles.materialFavoriteButton}>
                <Text style={styles.materialFavoriteButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.materialList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}