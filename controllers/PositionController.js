const globalres = require('../config/globalres')
const model = require('../models').position
const {Op} = require('sequelize')

class PositionController {

    static async getlits(req, res) {
        let body = req.query
        
        let paging = {
            limit:0,
            offset:0
        }

        let whereargs = {
            type : "Full Time"
        }
        // where method
        if (body.description !== undefined) {
            whereargs['description'] = {
                [Op.substring] : body.description
            }
        }

        if (body.location !== undefined) {
            whereargs.location = body.location
        }
        // end where

        /**
         * paging
         */
        if (body.limit !== undefined) {
            paging.limit = body.limit
        }

        if (body.offset !== undefined) {
            paging.offset = body.offset
        }
        // end paging
        
        let data = await model.findAll({
            // limit : paging.limit,
            // offset : paging.offset,
            where : whereargs,
        })

        // if not found
        if (data.length < 1) {
            return res.status(404).json(globalres(false, 'No record'))
        }
        return res.json(globalres(true, {request : body}, data))
    }

    static async getId(req, res) {
        let data = await model.findOne({
            where : {
                id_position : req.params.ID
            }
        })
        // not found
        if (!data) {
            return res.status(404).json(globalres(false, "Position not found") )
        }

        return res.json(globalres(true, "Success load", data))
    }
}

module.exports = PositionController