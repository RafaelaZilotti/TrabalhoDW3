// @file: src/features/genres/genre.schemas.js

// Schema reutilizável de um gênero
const genreSchema = {

    type: "object",

    required: [
        "id",
        "name"
    ],

    properties: {

        id: {
            type: "integer"
        },

        name: {
            type: "string"
        }
    }
};


// GET /genres

export const buscarTodosGenresSchema = {

    tags: ["Genres"],

    summary: "Listar gêneros",

    description: "Retorna todos os gêneros cadastrados.",


    response: {

        200: {

            type: "array",

            items: genreSchema
        }
    }
};



// GET /genres/:id

export const buscarPorIdSchema = {

    tags: ["Genres"],

    summary: "Buscar gênero por ID",

    description: "Retorna um gênero específico.",


    params: {

        type: "object",

        required: [
            "id"
        ],

        properties: {

            id: {

                type: "integer"
            }
        }
    },


    response: {

        200: genreSchema,


        404: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        }
    }
};



// POST /genres

export const salvarGenreSchema = {

    tags: ["Genres"],

    summary: "Criar gênero",

    description: "Cadastra um novo gênero.",


    body: {

        type: "object",

        required: [
            "name"
        ],

        properties: {

            name: {

                type: "string"
            }
        }
    },


    response: {

        201: genreSchema,


        409: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        }
    }
};



// PATCH /genres/:id

export const atualizarGenreSchema = {

    tags: ["Genres"],

    summary: "Atualizar gênero",

    description: "Atualiza um gênero existente.",


    params: {

        type: "object",

        required: [
            "id"
        ],

        properties: {

            id: {

                type: "integer"
            }
        }
    },


    body: {

        type: "object",

        required: [
            "name"
        ],

        properties: {

            name: {

                type: "string"
            }
        }
    },


    response: {

        200: genreSchema,


        404: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        },


        409: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        }
    }
};



// DELETE /genres/:id

export const removerGenreSchema = {

    tags: ["Genres"],

    summary: "Excluir gênero",

    description:
        "Remove um gênero que não esteja vinculado a jogos.",


    params: {

        type: "object",

        required: [
            "id"
        ],

        properties: {

            id: {

                type: "integer"
            }
        }
    },


    response: {

        204: {

            type: "null"
        },


        404: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        },


        409: {

            type: "object",

            properties: {

                message: {

                    type: "string"
                }
            }
        }
    }
};