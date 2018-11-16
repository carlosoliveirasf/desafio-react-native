import React, { Component } from 'react'

import { View, Text, FlatList, TouchableOpacity, TextInput, Alert, ToastAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from '../styles/mainStyle'
import api from '../services/api'

import realm, { insertFavoriteMaterial } from '../repository/materialSchema'

export default class SearchTab extends Component {
    state = {
        resultData: [],
        userInput: '',        
    }

    loadProducts = async () => {
        const response = await api.get(this.state.userInput)
        const resultData = response.data.Results
        this.setState({ resultData })
    }

    renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.materialName}>{item.Title.replace(/<[^>]*>/g, '')}</Text>
            <Text style={styles.materialUniversityName}>{item.Subject.Name.replace(/<[^>]*>/g, '')}</Text>
            <Text style={styles.materialUniversityName}>{item.UniversityShortName}</Text>
            <TouchableOpacity style={styles.materialButton}
                onPress={() =>
                    this.favoriteAsyncMaterial(item)
                }>
                <Text style={styles.materialButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )

    favoriteAsyncMaterial = async item => {
        try {
            const novoMaterial = {
                id: item.Id,
                title: item.Title.replace(/<[^>]*>/g, ''),
                subjectName: item.Subject.Name,
                universityShortName: item.UniversityShortName
            }
            await insertFavoriteMaterial(novoMaterial)
            ToastAndroid.show('Success!', ToastAndroid.LONG)
        } catch (erro) {
            this.showAlert('You already saved this material.')
        }
    }

    showAlert(message) {
        Alert.alert(
            'Ops...',
            message,
            [{
                text: 'Ok', onPress: () => { },
                style: 'cancel'
            },
            { cancelable: true }]
        )
    }

    alterarTexto = userInput => {
        this.setState({ userInput })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.userInput}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Search..."
                    placeholderTextColor="#D3D3D3"
                    onChangeText={this.alterarTexto} />
                <TouchableOpacity onPress={this.loadProducts}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                        locations={[0, 0.5, 0.6]}
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.materialButton}>
                        <Text style={styles.materialSearchButtonText}>Search</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.resultData}
                    keyExtractor={item => item.Id.toString()}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}