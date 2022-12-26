import mongoose from "mongoose"
import { Response, Request, NextFunction } from 'express'
import { BadRequestError } from "../helper/APIError"

const Company = mongoose.model('Company')

export const storeCompany = async (req: Request, res: Response, next: NextFunction) => {
    const company = await Company.create(req.body)
    return res.json(company)
}

export const showCompanies = async (req: Request, res: Response) => {
    const company = await Company.find()
    return res.json(company)
}

export const showCompanyByID = async (req: Request, res: Response) => {
    const company = await Company.findById(req.params.id)
    if (!company) throw new BadRequestError('Company does not exist')
    return res.json(company)
}

export const updateCompany = async (req: Request, res: Response) => {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
    if (!company) throw new BadRequestError('Company does not exist')
    return res.json(company)
}

export const deleteCompany = async (req: Request, res: Response) => {
    const company = await Company.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    if (!company) throw new BadRequestError('Company does not exist')
    return res.send()
}
