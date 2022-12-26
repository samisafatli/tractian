import { ObjectID } from "bson"
import mongoose from "mongoose"

const requiredValue = (type: any, required: boolean) => ({ type, required })

const AssetSchema = new mongoose.Schema({
    id: requiredValue(ObjectID, false),
    image: requiredValue(String, true),
    name: { ...requiredValue(String, true), unique: true },
    description: requiredValue(String, true),
    model: requiredValue(String, true),
    owner: requiredValue(String, true),
    status: requiredValue(String, true),
    healthLevel: requiredValue(String, true),
    unitID: requiredValue(ObjectID, false)
})

mongoose.model('Asset', AssetSchema)