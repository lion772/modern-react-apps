import React from "react";
import "./App.css";
import SongPlaylist from "./components/SongPlaylist";
import MoviePlaylist from "./components/MoviePlaylist";

function App() {
    const handleResetClick = () => {};
    return (
        <div className="container is-fluid">
            <button
                onClick={() => handleResetClick()}
                className="button is-danger"
            >
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}

export default App;
