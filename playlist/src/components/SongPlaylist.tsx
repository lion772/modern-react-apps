import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createRandomSong } from "../data";

function SongPlaylist() {
    // To Do: Get list of songs
    const dispatch = useDispatch();
    const songPlaylist = useSelector(
        (state: { songs: string[] }) => state.songs
    );

    const handleSongAdd = (song: string) => {
        // Todo: Add song to list of songs
        dispatch({ type: "songs/addSong", payload: song });
    };
    const handleSongRemove = (song: string) => {
        // To Do: Remove song from list of songs
        dispatch({ type: "songs/removeSong", payload: song });
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <button
                    onClick={() => handleSongRemove(song)}
                    className="button is-danger"
                >
                    X
                </button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Playlist</h3>
                <div className="buttons">
                    <button
                        onClick={() => handleSongAdd(createRandomSong())}
                        className="button is-link"
                    >
                        + Add Song to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist;
