import express, { Request, Response } from 'express';
import { storeAsset, showAssets, showAssetByID, updateAsset, deleteAsset } from '../controllers/AssetController'
import { storeUnit, showUnits, showUnitByID, updateUnit, deleteUnit } from '../controllers/UnitController'
import { storeCompany, showCompanies, showCompanyByID, updateCompany, deleteCompany } from '../controllers/CompanyController'

const routes = express.Router()

routes.get('/health', (req: Request, res: Response) => {
    res.send('Working')
})

// Assets
routes.get('/assets', showAssets)
routes.get('/assets/:id', showAssetByID)

routes.post('/asset', storeAsset)

routes.put('/asset/:id', updateAsset)

routes.delete('/asset/:id', deleteAsset)


// Units
routes.get('/units', showUnits)
routes.get('/units/:id', showUnitByID)

routes.post('/unit', storeUnit)

routes.put('/unit/:id', updateUnit)

routes.delete('/unit/:id', deleteUnit)

// Companies
routes.get('/companies', showCompanies)
routes.get('/companies/:id', showCompanyByID)

routes.post('/company', storeCompany)

routes.put('/company/:id', updateCompany)

routes.delete('/company/:id', deleteCompany)

module.exports = routes