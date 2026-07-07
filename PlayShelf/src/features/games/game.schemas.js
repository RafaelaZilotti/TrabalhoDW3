// @file: src/features/games/game.schemas.js

// Schema reutilizável de um jogo.
const gameSchema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        title: { type: "string" },
        release_year: { type: "integer" },
        genre_id: { type: "integer" },
        genre_name: { type: "string" },
        developer: { type: ["string", "null"] },
        publisher: { type: ["string", "null"] },
        description: { type: ["string", "null"] },
        cover_url: { type: ["string", "null"] },
        minimum_requirements: { type: ["string", "null"] }
    }
};

// GET /games

export const buscarTodosGamesSchema = {
    tags: ["Games"],

    response: {
        200: {
            type: "array",
            items: gameSchema
        }
    }
};

// GET /games/:id

export const buscarGamePorIdSchema = {
    tags: ["Games"],

    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "integer"
            }
        }
    },

    response: {
        200: gameSchema
    }
};

// POST /games

export const salvarGameSchema = {
    tags: ["Games"],

    body: {
        type: "object",
        required: [
            "title",
            "release_year",
            "genre_id"
        ],
        properties: {
            title: {
                type: "string",
                minLength: 1
            },
            release_year: {
                type: "integer"
            },
            genre_id: {
                type: "integer"
            }
        }
    },

    response: {
        201: gameSchema
    }
};

// PATCH /games/:id

export const atualizarGameSchema = {
    tags: ["Games"],

    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "integer"
            }
        }
    },

    body: {
        type: "object",
        required: [
            "title",
            "release_year",
            "genre_id"
        ],
        properties: {
            title: {
                type: "string",
                minLength: 1
            },
            release_year: {
                type: "integer"
            },
            genre_id: {
                type: "integer"
            }
        }
    },

    response: {
        200: gameSchema
    }
};

// DELETE /games/:id

export const removerGameSchema = {
    tags: ["Games"],

    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: {
                type: "integer"
            }
        }
    },

    response: {
        200: gameSchema
    }
};