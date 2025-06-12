import z from "zod";

export const createProductSchema = z.object({
    body: z.object({
        name: z.string()
            .nonempty('The name is required.')
            .min(3, "A minimum of 3 characters is required for the name."),
        description: z.string()
            .nonempty('The description is required.')
            .min(6, "A minimum of 6 characters is required for the description."),
        price: z.number(),
        stock: z.number(),
        category: z.string()

    }),
});

export const updateProductSchema = z.object({
    id: z.string().nonempty('The id is required.')
});


