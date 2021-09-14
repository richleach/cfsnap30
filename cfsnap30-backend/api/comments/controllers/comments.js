//'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    //create records, attach to logged in user
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          data.user = ctx.state.user.id;
          entity = await strapi.services.comments.create(data, { files });
        } else {
          ctx.request.body.user = ctx.state.user.id;
          entity = await strapi.services.comments.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.comments });
      },

    //update user comment
    async update(ctx) {
        const { id } = ctx.params;
    
        let entity;
    
        const [comments] = await strapi.services.comments.find({
          id: ctx.params.id,
          'user.id': ctx.state.user.id,
        });
    
        if (!comments) {
          return ctx.unauthorized(`You can't update this entry`);
        }
    
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.comments.update({ id }, data, {
            files,
          });
        } else {
          entity = await strapi.services.comments.update({ id }, ctx.request.body);
        }
    
        return sanitizeEntity(entity, { model: strapi.models.comments });
      }, 
      
    //delete a user comment
    async delete(ctx) {
        const { id } = ctx.params

        const [comments] = await strapi.services.comments.find({
            id: ctx.params.id,
            "user.id": ctx.state.user.id,
        })

        if (!comments) {
            return ctx.unauthorized(`You can't update this entry`)
        }

        const entity = await strapi.services.comments.delete({id})
        return sanitizeEntity(entity, {model: strapi.models.comments})
    },

    //get logged in users  
    async me(ctx) {
        const user = ctx.state.user

        if(!user) {
            return ctx.badRequest(null, [
                {messages: [{id: "No authorization header was found"}]}
            ])
        } 
        
        const data = await strapi.services.comments.find({user: user.id})

        if (!data) {
            return ctx.notFound()
        }

        return sanitizeEntity(data, {model: strapi.models.comments})
    }
};
