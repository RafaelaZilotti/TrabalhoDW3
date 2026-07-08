-- ======================================
-- PlayShelf API
-- Database Structure
-- PostgreSQL (Neon)
-- ======================================

-- ======================
-- USERS
-- ======================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ======================
-- GENRES
-- ======================

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);


-- ======================
-- GAMES
-- ======================

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    release_year INT,
    genre_id INT NOT NULL,

    CONSTRAINT fk_games_genre
        FOREIGN KEY (genre_id)
        REFERENCES genres(id)
);

-- ======================
-- GAME DETAILS
-- ======================

CREATE TABLE game_details (
    id SERIAL PRIMARY KEY,

    game_id INT NOT NULL UNIQUE,

    developer VARCHAR(100),

    publisher VARCHAR(100),

    description TEXT,

    cover_url TEXT,

    minimum_requirements TEXT,

    CONSTRAINT fk_game_details_game
        FOREIGN KEY (game_id)
        REFERENCES games(id)
        ON DELETE CASCADE
);

-- ======================
-- LIBRARY
-- ======================

CREATE TABLE library (
    id SERIAL PRIMARY KEY,

    user_id INT NOT NULL,

    game_id INT NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'Wishlist',

    purchase_date DATE,

    CONSTRAINT fk_library_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_library_game
        FOREIGN KEY (game_id)
        REFERENCES games(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_library
        UNIQUE (user_id, game_id),

    CONSTRAINT chk_library_status
        CHECK (
            status IN (
                'Wishlist',
                'Playing',
                'Completed',
                'Dropped'
            )
        )
);


-- ======================
-- LOANS
-- ======================

CREATE TABLE loans (
    id SERIAL PRIMARY KEY,

    library_id INT NOT NULL,

    borrower_id INT NOT NULL,

    loan_date DATE DEFAULT CURRENT_DATE,

    return_date DATE,

    returned BOOLEAN DEFAULT FALSE,

    CONSTRAINT fk_loan_library
        FOREIGN KEY (library_id)
        REFERENCES library(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_loan_borrower
        FOREIGN KEY (borrower_id)
        REFERENCES users(id)
);