exports.getAll = Model => {
    try {
        return Model.find()
    } catch (e) {
        throw Error(`Error while getting ${Model.collection.collectionName}`)
    }
}
exports.getById = (Model, id) => {
    try {
        return Model.findById(id)
    } catch (e) {
        throw Error(`Error while getting ${Model.collection.collectionName} by id`)
    }
}
exports.create = (Model, data) => {
    try {
        return Model.create(data)
    } catch (e) {
        throw Error(`Error while creating ${Model.collection.collectionName}`)
    }
}
exports.update = (Model, id, data) => {
    try {
        return Model.findByIdAndUpdate(id, data, { new: true })
    } catch (e) {
        throw Error(`Error while updating ${Model.collection.collectionName}`)
    }
}
exports.delete = (Model, id) => {
    try {
        return Model.findByIdAndDelete(id)
    } catch (e) {
        throw Error(`Error while deleting ${Model.collection.collectionName}`)
    }
}