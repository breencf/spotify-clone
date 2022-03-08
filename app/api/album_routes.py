from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, db

album_routes = Blueprint('albums', __name__)


@album_routes.route('/<int:albumId>')
def get_album(albumId):
    album = Album.query.get(albumId)

    return album.to_dict()
