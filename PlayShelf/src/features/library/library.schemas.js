// @file: src/features/library/library.schemas.js

// GET /library

export const buscarTodosLibrarySchema = {
    tags: ["Library"],
    response: {
        200: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    status: {
                        type: "string"
                    },
                    purchase_date: {
                        type: "string"
                    },
                    user_id: {
                        type: "integer"
                    },
                    user_name: {
                        type: "string"
                    },
                    game_id: {
                        type: "integer"
                    },
                    game_title: {
                        type: "string"
                    }
                }
            }
        }
    }
};

// GET /library/:id

export const buscarPorIdLibrarySchema = {
    tags: ["Library"],
    params: {
        type: "object",
        properties: {
            id: {
                type: "integer"
            }

        },
        required: [
            "id"
        ]
    },
    response: {
        200: {
            type: "object",
            properties: {
                id: {
                    type: "integer"
                },
                status: {
                    type: "string"
                },
                purchase_date: {
                    type: "string"
                },
                user_id: {
                    type: "integer"
                },
                user_name: {
                    type: "string"
                },
                game_id: {
                    type: "integer"
                },
                game_title: {
                    type: "string"
                }
            }
        }
    }
};

// GET /library/user/:userId

export const buscarPorUsuarioLibrarySchema = {
    tags: ["Library"],
    params: {
        type: "object",
        properties: {
            userId: {
                type: "integer"
            }
        },
        required: [
            "userId"
        ]
    },
    response: {
        200: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    status: {
                        type: "string"
                    },
                    purchase_date: {
                        type: "string"
                    },
                    game_id: {
                        type: "integer"
                    },
                    game_title: {
                        type: "string"
                    }
                }
            }
        }
    }
};

// POST /library

export const salvarLibrarySchema = {
    tags: ["Library"],
    body: {
        type: "object",
        required: [
            "userId",
            "gameId",
            "status"
        ],
        properties: {
            userId: {
                type: "integer"
            },
            gameId: {
                type: "integer"
            },
            status: {
                type: "string"
            },
            purchaseDate: {
                type: "string"
            }
        }
    },
    response: {
        201: {
            type: "object",
            properties: {
                id: {
                    type: "integer"
                },
                user_id: {
                    type: "integer"
                },
                game_id: {
                    type: "integer"
                },
                status: {
                    type: "string"
                },
                purchase_date: {
                    type: "string"
                }
            }
        }
    }
};

// PATCH /library/:id

export const atualizarLibrarySchema = {
    tags: ["Library"],
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
        required: ["status"],
        properties: {
            status: {
                type: "string"
            },
            purchaseDate: {
                type: "string"
            }
        }
    },
    response: {
        200: {
            type: "object",
            properties: {
                id: {
                    type: "integer"
                },
                user_id: {
                    type: "integer"
                },
                game_id: {
                    type: "integer"
                },
                status: {
                    type: "string"
                },
                purchase_date: {
                    type: "string"
                }
            }
        }
    }
};

// DELETE /library/:id

export const removerLibrarySchema = {
    tags: ["Library"],
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
        200: {
            type: "object",
            properties: {
                id: {
                    type: "integer"
                },
                user_id: {
                    type: "integer"
                },
                game_id: {
                    type: "integer"
                },
                status: {
                    type: "string"
                },
                purchase_date: {
                    type: "string"
                }
            }
        }
    }
};