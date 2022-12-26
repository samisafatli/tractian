import mongoose from "mongoose"
import { Response, Request, NextFunction } from 'express'
import { BadRequestError } from "../helper/APIError"

const Asset = mongoose.model('Asset')

export const storeAsset = async (req: Request, res: Response, next: NextFunction) => {
    const asset = await Asset.create(req.body)
    // TODO
    // Update Assets lists inside of Units endpoints
    // Create Validation
    return res.json(asset)
}

export const showAssets = async (req: Request, res: Response) => {
    const asset = await Asset.find()
    return res.json(asset)
}

export const showAssetByID = async (req: Request, res: Response) => {
    const asset = await Asset.findById(req.params.id)
    if (!asset) throw new BadRequestError('Asset does not exist')
    // TODO
    // Create Validation
    return res.json(asset)
}

export const updateAsset = async (req: Request, res: Response) => {
    const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
    // TODO
    // Create Validation
    if (!asset) throw new BadRequestError('Asset does not exist')
    return res.json(asset)
}

export const deleteAsset = async (req: Request, res: Response) => {
    const asset = await Asset.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    if (!asset) throw new BadRequestError('Asset does not exist')
    // TODO
    // Create Validation
    return res.send()
}
