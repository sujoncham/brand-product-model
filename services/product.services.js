
const Product = require('../models/Product')

exports.getProductService = async(filters, queries)=>{
    const products = await Product.find({}).sort(queries.sortBy).select(queries.fields);
    return products;
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


    exports.getCreateProduct = async(data)=>{
        const product = await Product.create(data)
         // if(result.quantity < 250){
    //     result.status = 'person to large';
    // }
        return product;
    }

    exports.updateProductService = async(tourId, data)=>{
        // new version 
        const result = await Tour.updateOne({_id:tourId}, {$inc: data}, {runValidators: true});
        // old way 
        // const myTour = await Tour.findById(tourId);
        // const result = await myTour.set(data).save();
        return result;
    }

    exports.bulkUpdateProductService = async(data) =>{
        console.log(data.ids, data)
        // const result = await Tour.updateMany({_id:data.ids}, data, {
        //     runValidators: true
        // });
        const products = [];
        data.ids.forEach(tour => {
            products.push(Tour.updateOne({_id:tour.id}, tour.data))
        });
         const result = Promise.all(tours);
         console.log(result)
        return result;
    }
    exports.bulkDeleteProductService = async(ids) =>{
        //selected ids delete
        const result = await Product.deleteMany({_id:ids});
        //all delete products
        // const result = await Tour.deleteMany({});
        return result;
    }

    exports.deleteByIdProductService = async(id) =>{
        const result = await Tour.deleteOne({_id:id});
        return result;
    }
