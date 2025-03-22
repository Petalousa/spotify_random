# About

Frontend: React + TypeScript + Vite
Backend: Flask + Sqlite3 Database

Simple React.js + TypeScript app I can use to play random spotify songs. I wanted an account-agnostic way to play any song that I had played previously. The sqlite3 database file was generated via a dump of all of my spotify listens.

# How to run:

## frontend:
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## backend
1. `cd backend`
2. `python -m venv env`
3. (powershell): `.\env\Scripts\activate`
4. `python -m pip install -r requirements.txt`
5. `flask run`

Access at `http://localhost:5173/`

# Database Info:

## Song Schema:
```sql
CREATE TABLE IF NOT EXISTS "Song"(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    track_name,
    album_artist_name,
    album_name,
    uri,
    UNIQUE (track_name, album_artist_name, album_name, uri)
);
```

## Example Song Data:
```
INSERT INTO Song (id, track_name, album_artist_name, album_name, uri) VALUES (
    203,
    "6.24",
    "Danger",
    "Furi (Original Game Soundtrack)",
    "spotify:track:6MLptqfOLeV8uwAqwXaZ1v"
);
```