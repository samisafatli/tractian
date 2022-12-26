import mongoose from "mongoose"
import { ObjectID } from "bson"

const requiredValue = (type: any, required: boolean) => ({ type, required })

const UnitSchema = new mongoose.Schema({
    id: requiredValue(ObjectID, false),
    assets: requiredValue(Array, false),
    name: {...requiredValue(String, true), unique: true},
    companyID: requiredValue(ObjectID, true)
})

mongoose.model('Unit', UnitSchema)