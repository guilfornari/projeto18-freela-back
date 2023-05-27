import joi from "joi";

export const citiesSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    photo: joi.string().uri().required()
});

export const teamsSchema = joi.object({
    name: joi.string().required(),
    photo: joi.string().uri().required()
});

