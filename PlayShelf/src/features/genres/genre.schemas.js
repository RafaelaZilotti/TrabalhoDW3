// @file: src/features/genres/genre.schemas.js

// Schema reutilizável de um gênero.
const genreSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
    name: {
      type: "string",
      example: "RPG",
    },
  },
};

// GET /genres

export const buscarTodosGenresSchema = {
  schema: {
    tags: ["Genres"],
    summary: "Listar gêneros",
    description: "Retorna todos os gêneros cadastrados.",

    response: {
      200: {
        type: "array",
        items: genreSchema,
      },
    },
  },
};

// GET /genres/:id

export const buscarPorIdSchema = {
  schema: {
    tags: ["Genres"],
    summary: "Buscar gênero por ID",
    description: "Retorna um gênero específico.",

    params: {
      type: "object",
      required: ["id"],
      properties: {
        id: {
          type: "integer",
        },
      },
    },

    response: {
      200: genreSchema,

      404: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Gênero não encontrado.",
          },
        },
      },
    },
  },
};

// POST /genres

export const salvarGenreSchema = {
  schema: {
    tags: ["Genres"],
    summary: "Criar gênero",
    description: "Cadastra um novo gênero.",

    body: {
      type: "object",
      required: ["name"],

      properties: {
        name: {
          type: "string",
          example: "RPG",
        },
      },
    },

    response: {
      201: genreSchema,

      409: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Já existe um gênero com esse nome.",
          },
        },
      },
    },
  },
};

// PATCH /genres/:id

export const atualizarGenreSchema = {
  schema: {
    tags: ["Genres"],
    summary: "Atualizar gênero",
    description: "Atualiza um gênero existente.",

    params: {
      type: "object",
      required: ["id"],

      properties: {
        id: {
          type: "integer",
        },
      },
    },

    body: {
      type: "object",
      required: ["name"],

      properties: {
        name: {
          type: "string",
          example: "Aventura",
        },
      },
    },

    response: {
      200: genreSchema,

      404: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Gênero não encontrado.",
          },
        },
      },

      409: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Já existe um gênero com esse nome.",
          },
        },
      },
    },
  },
};

// DELETE /genres/:id

export const removerGenreSchema = {
  schema: {
    tags: ["Genres"],
    summary: "Excluir gênero",
    description:
      "Remove um gênero que não esteja vinculado a jogos.",

    params: {
      type: "object",
      required: ["id"],

      properties: {
        id: {
          type: "integer",
        },
      },
    },

    response: {
      204: {
        type: "null",
      },

      404: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Gênero não encontrado.",
          },
        },
      },

      409: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example:
              "Não é possível excluir um gênero vinculado a jogos.",
          },
        },
      },
    },
  },
};