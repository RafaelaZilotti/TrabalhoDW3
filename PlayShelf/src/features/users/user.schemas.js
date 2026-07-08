// @file: src/features/users/user.schemas.js

// Schema reutilizável de um usuário

const userSchema = {
    type: "object",
    properties: {
        id: {
            type: "integer"
        },
        name: {
            type: "string"
        },
        email: {
            type: "string",
            format: "email"
        },
        created_at: {
            type: "string",
            format: "date-time"
        }
    }
};

const userBodySchema = {
    type: "object",
    required: ["name", "email"],
    properties: {
        name: {
            type: "string"
        },
        email: {
            type: "string",
            format: "email"
        }
    }
};

const idParamsSchema = {
    type: "object",
    required: ["id"],
    properties: {
        id: {
            type: "integer"
        }
    }
};

const emailParamsSchema = {
    type: "object",
    required: ["email"],
    properties: {
        email: {
            type: "string",
            format: "email"
        }
    }
};

// GET /users

export const buscarUsuariosSchema = {
    tags: ["Users"],

    summary: "Lista todos os usuários.",

    response: {
        200: {
            type: "array",
            items: userSchema
        }
    }
};

// GET /users/:id

export const buscarUsuarioPorIdSchema = {
    tags: ["Users"],

    summary: "Busca um usuário pelo ID.",

    params: idParamsSchema,

    response: {
        200: userSchema
    }
};

// GET /users/email/:email

export const buscarUsuarioPorEmailSchema = {
    tags: ["Users"],

    summary: "Busca um usuário pelo e-mail.",

    params: emailParamsSchema,

    response: {
        200: userSchema
    }
};

// POST /users

export const salvarUsuarioSchema = {
    tags: ["Users"],

    summary: "Cadastra um novo usuário.",

    body: userBodySchema,

    response: {
        201: userSchema
    }
};

// PUT /users/:id

export const atualizarUsuarioSchema = {
    tags: ["Users"],

    summary: "Atualiza um usuário.",

    params: idParamsSchema,

    body: userBodySchema,

    response: {
        200: userSchema
    }
};

// DELETE /users/:id

export const removerUsuarioSchema = {
    tags: ["Users"],

    summary: "Remove um usuário.",

    params: idParamsSchema,

    response: {
        204: {
            type: "null"
        }
    }
};