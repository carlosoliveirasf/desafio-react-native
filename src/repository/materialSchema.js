import Realm from 'realm'

export const MATERIAL_SCHEMA = 'material'
export const MaterialSchema = {
    name: MATERIAL_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: { type: 'string', indexed: true },
        subjectName: { type: 'string' },
        universityShortName: { type: 'string' }
    }
}

const databaseOptions = {
    path: 'desafio.realm',
    schema: [MaterialSchema],
    schemaVersion: 0
}

export const insertFavoriteMaterial = async (newFavorite) => {
    const realm = await Realm.open(databaseOptions);
    return new Promise((resolve, reject) => {
        try {
            realm.write(() => {
                realm.create(MATERIAL_SCHEMA, newFavorite)
                resolve(newFavorite)
            })
        } catch (erro) {
            reject(erro)
        }
    })
}

export const removeFavoriteMaterial = async (favoriteId) => {
    const realm = await Realm.open(databaseOptions)
    return new Promise((resolve, reject) => {
        try {
            realm.write(() => {
                let deletingMaterial = realm.objectForPrimaryKey(MATERIAL_SCHEMA, favoriteId)
                realm.delete(deletingMaterial)
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}

export const queryAllMaterials = async () => {
    const realm = await Realm.open(databaseOptions)
    return new Promise((resolve, reject) => {
        try {
            let allMaterials = realm.objects(MATERIAL_SCHEMA);
            resolve(allMaterials);
        } catch (error) {
            reject(error)
        }
    })
}
export default new Realm(databaseOptions)