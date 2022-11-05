const { getCreateBrand, getBrandByIdService, updateBrandIdService, bulkUpdateBrandService, bulkDeleteBrandService, deleteByIdBrandService } = require("../services/brand.services")


exports.getBrand = async(req, res, next)=>{
    try {
        const filters = {...req.query};
        const excludeFields = ['sort', 'page', 'limit']
        excludeFields.forEach(field => delete filters[field])

            const queries = {};
            if(req.query.sort){
                const sortBy = req.query.sort.split(',').join(' ');
                queries.sortBy = sortBy;
            }
            if(req.query.fields){
                const fields = req.query.fields.split(',').join(' ');
                queries.fields = fields;
            }

        const result = await getBrandService(filters);

        res.status(200).json({
            status: 'success',
            message: 'All Data showing successfully',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data can not get',
            error: error.message
        })
    }
}


exports.createBrand = async(req, res, next)=>{
    try {
        // save or create
    // const tour = new Tour(req.body);
    // const result = await tour.save()

    //create 
    const result = await getCreateBrand(req.body)
   

    result.logger()

    // res.send(req.body);
    res.status(200).json({
        status: 'success',
        message:'Data inserted successfull',
        data: result,
    })
    } catch (error) {
        console.log('data not inserted');
        res.status(400).json({
            status: 'failed',
            message : "data not inserted",
            error: error.message
        })
    }
}

exports.getBrandById = async(req, res, next)=>{
    const {id} = req.params;
    try {
        
        const result = await getBrandByIdService(id);
        if(!result){
            res.status(400).json({
                status : 'fail',
                message: 'could not get Brand',
            })
        }

        res.status(200).json({
            status: 'success',
            message: "Get Brand By Id successfully",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not get Brand',
            error: error.message
        })
    }
}
exports.updateBrandId = async(req, res, next)=>{
    const {id} = req.params;
    try {
        
        const result = await updateBrandIdService(id, req.body);
        if(!result.nModified){
            res.status(400).json({
                status : 'fail',
                message: 'could not modified Brand',
            })
        }

        res.status(200).json({
            status: 'update',
            message: "updated brand successfully",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not update',
            error: error.message
        })
    }
}


exports.bulkUpdateBrand = async(req, res, next)=>{
    try {
        const result = await bulkUpdateBrandService(req.body)

        res.status(200).json({
            status: 'update',
            message: "updated request successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not update',
            error: error.message
        })
    }
}
exports.bulkDeleteBrand = async(req, res, next)=>{
    try {
        console.log(req.body)
        const result = await bulkDeleteBrandService(req.body.ids);

        res.status(200).json({
            status: 'success',
            message: "deleted bulk successfully",
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not delete',
            error: error.message
        })
    }
}

exports.deleteByIdBrand = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await deleteByIdBrandService(id);
        if(!result.deletedCount){
            return res.status(400).json({
                status: 'Fail',
                error:"Couldn't delete the product"
            })
        }

        res.status(200).json({
            status: 'delete',
            message: "Deleted request successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            message: 'could not delete',
            error: error.message
        })
    }
}