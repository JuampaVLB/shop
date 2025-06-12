import z from "zod";

export const loginSchema = z.object({
    body: z.object({
        username: z.string()
            .nonempty('El nombre de usuario es requerido.')
            .min(6, "Se necesita un minimo de 6 caracteres para el nombre de usuario."),
        password: z.string()
            .nonempty('La contraseña es requerida.')
            .min(6, "Se necesita un minimo de 6 caracteres para su contraseña.")
    }),
});


