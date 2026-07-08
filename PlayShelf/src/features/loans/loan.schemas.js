// @file: src/features/loans/loan.schemas.js

// GET /loans

export const buscarTodosLoanSchema = {
    tags: ["Loans"],
    response: {
        200: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    loan_date: {
                        type: "string"
                    },
                    return_date: {
                        type: ["string", "null"]
                    },
                    returned: {
                        type: "boolean"
                    },
                    library_id: {
                        type: "integer"
                    },
                    user_id: {
                        type: "integer"
                    },
                    user_name: {
                        type: "string"
                    },
                    user_email: {
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

// GET /loans/:id

export const buscarPorIdLoanSchema = {
    tags: ["Loans"],
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
                loan_date: {
                    type: "string"
                },
                return_date: {
                    type: ["string", "null"]
                },
                returned: {
                    type: "boolean"
                },
                library_id: {
                    type: "integer"
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

// GET /loans/user/:userId

export const buscarPorUsuarioLoanSchema = {
    tags: ["Loans"],
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
                type: "object"
            }
        }
    }
};

// POST /loans

export const salvarLoanSchema = {
    tags: ["Loans"],
    body: {
        type: "object",
        properties: {
            libraryId: {
                type: "integer"
            },
            borrowerId: {
                type: "integer"
            },
            loanDate: {
                type: "string"
            },
            returnDate: {
                type: [
                    "string",
                    "null"
                ]
            },
            returned: {
                type: "boolean"
            }
        },
        required: [
            "libraryId",
            "borrowerId"
        ]
    },
    response: {
        201: {
            type: "object",
            properties: {
                id: {
                    type: "integer"
                },
                library_id: {
                    type: "integer"
                },
                borrower_id: {
                    type: "integer"
                },
                loan_date: {
                    type: "string"
                },
                return_date: {
                    type: ["string", "null"]
                },
                returned: {
                    type: "boolean"
                }
            }
        }
    }
};

// PATCH /loans/:id

export const atualizarLoanSchema = {
    tags: ["Loans"],
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
    body: {
        type: "object",
        properties: {
            returnDate: {
                type: [
                    "string",
                    "null"
                ]
            },
            returned: {
                type: "boolean"
            }
        }
    },
    response: {
        200: {
            type: "object"
        }
    }
};

// DELETE /loans/:id

export const removerLoanSchema = {
    tags: ["Loans"],
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
            type: "object"
        }
    }
};