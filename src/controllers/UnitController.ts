import mongoose from "mongoose"
import { Response, Request, NextFunction } from 'express'
import { BadRequestError } from "../helper/APIError"
import { updateCompany } from "./CompanyController"

const Unit = mongoose.model('Unit')
const Company = mongoose.model('Company')

export const storeUnit = async (req: Request, res: Response, next: NextFunction) => {
    const unit = await Unit.create(req.body)
    console.log(unit)
    updateCompany(req, res)
    return res.json(unit)
}

export const showUnits = async (req: Request, res: Response) => {
    const unit = await Unit.find()
    return res.json(unit)
}

export const showUnitByID = async (req: Request, res: Response) => {
    const unit = await Unit.findById(req.params.id)
    if (!unit) throw new BadRequestError('Unit does not exist')
    return res.json(unit)
}

export const updateUnit = async (req: Request, res: Response) => {
    const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
    if (!unit) throw new BadRequestError('Unit does not exist')
    return res.json(unit)
}

export const deleteUnit = async (req: Request, res: Response) => {
    const unit = await Unit.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    if (!unit) throw new BadRequestError('Unit does not exist')
    return res.send()
}
