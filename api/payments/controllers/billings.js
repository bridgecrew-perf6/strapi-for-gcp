const {sanitizeEntity} = require('strapi-utils');

// This code is an example and cannot be used.
module.exports = {
    async create(ctx) {
        let requestData = ctx.request.body
        try{
          const entity = await strapi
            .services
            .billings
            .create({
              productId: requestData.productId,
              buyberId: requestData.buyberId,
              perchaseDate: requestData.perchaseDate,
              productPrice: requestData.productPrice,
            });
        } catch (error) {
          return {
            "statusCode": 403,
            "error": "no authentication",
            "message": "This is an unauthorized access."};
        }
        return {
            statusCode: 200,
            data: {
              productId: requestData.productId,
              buyberId: requestData.buyberId,
              perchaseDate: requestData.perchaseDate,
              productPrice: requestData.productPrice,
              success: false
            }
        };
    },
    async findOne(ctx) {
    },
    async update(ctx) {
    }
};
