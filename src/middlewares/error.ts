import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../helper/APIError'

export const errorMiddleware = (
	error: Error & Partial<ApiError>,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	const statusCode = error.statusCode ?? 500
	console.log(error.message)
	const message = error.statusCode ? error.message : 'Internal Server Error'
	return res.status(statusCode).json({ message })
}
