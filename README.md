Frontend: React + TypeScript + Vite
Backend: Flask + Sqlite3 Database

# RUN:

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