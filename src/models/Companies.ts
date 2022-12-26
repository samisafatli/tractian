import mongoose from "mongoose"
import { ObjectID } from "bson"

const requiredValue = (type: any, required: boolean) => ({ type, required })

const CompanySchema = new mongoose.Schema({
    id: requiredValue(ObjectID, false),
    name: {...requiredValue(String, true), unique: true},
    units: requiredValue(Array, false),
})

mongoose.model('Company', CompanySchema)