import sqlite3
from flask import Flask, request

app = Flask(__name__)


@app.route("/random")
def get_random_songs():
    num_randoms = int(request.args.get('n', '10'))

    con = sqlite3.connect("../petal_streams.db3")
    con.row_factory = sqlite3.Row
    try:
        cur = con.cursor()
        query = "SELECT id, track_name, album_artist_name, album_name, uri FROM Song ORDER BY RANDOM() LIMIT ?"
        res = cur.execute(query, (num_randoms,))
        return [{
            "name": x["track_name"],
            "artist": x["album_artist_name"],
            "uri": x["uri"][len("spotify:track:"):],
        } for x in res.fetchall()]
    finally:
        cur.close()
