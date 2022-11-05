
const Brand = require('../models/Brand')

exports.getBrandService = async()=>{
    const brands = await Brand.find({}).select('-products -suppliers');
    return brands;
}
exports.getBrandByIdService = async(id)=>{
    const brands = await Brand.findOne({_id:id});
    return brands;
}

        // const tours = await Tour.find({price: {$gt:380}});
        // const tours = await Tour.find({price: {$lt:380}});
        // const tours = await Tour.find({name: {$in: ["Mongla Sea Beach", "Pathaya Sea Beach"]}});
        // specific data 
        // const tours = await Tour.find({}, 'name price');
        // const tours = await Tour.find({}, '-name -price');
        // const tours = await Tour.find({}).limit();
        // const tours = await Tour.find({}).sort({price: -1});
        // const tours = await Tour.find({}).select({price: 0});
        //mongoose works more easy
        // const tours = await Tour
        // .where('name').equals(/\w/)
        // .where('quantity').gt(200).lt(500)
        // .sort({quantity: -1})


    exports.getCreateBrand = async(data)=>{
        const brand = await Brand.create(data)
         // if(result.quantity < 250){
    //     result.status = 'person to large';
    // }
        return brand;
    }

    exports.updateBrandIdService = async(brandId, data)=>{
        // new version 
        const result = await Brand.updateOne({_id:brandId}, data, {runValidators: true});
        // old way 
        // const myTour = await Tour.findById(tourId);
        // const result = await myTour.set(data).save();
        return result;
    }

    exports.bulkUpdateBrandService = async(data) =>{
        console.log(data.ids, data)
        // const result = await Tour.updateMany({_id:data.ids}, data, {
        //     runValidators: true
        // });
        const brands = [];
        data.ids.forEach(brand => {
            brands.push(Brand.updateOne({_id:brand.id}, brand.data))
        });
         const result = Promise.all(brands);
         console.log(result)
        return result;
    }
    exports.bulkDeleteBrandService = async(ids) =>{
        //selected ids delete
        const result = await Brand.deleteMany({_id:ids});
        //all delete products
        // const result = await Tour.deleteMany({});
        return result;
    }

    exports.deleteByIdBrandService = async(id) =>{
        const result = await Brand.deleteOne({_id:id});
        return result;
    }
