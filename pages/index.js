import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu />
                <Header/>
                <StyledTimeline>
                    <Timeline playlists={config.playlists} />
                </StyledTimeline>
                <Favorites />
            </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    img.thumb {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    img.banner {
        margin-top: 50px;
        width: 100%;
        max-height: 230px;
        object-fit: cover;
        
    } 
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <img className="banner" src={config.banner} />
            <section className="user-info">
                <img className="thumb" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

function Favorites() {

    const StyledFavorites = styled.div`

    padding: 16px;

    section {
        padding: 16px;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
    }
    .favorites {
        display: flex;
        margin-top: 16px;

    }

    .favorite {
        align-items: center;
        display: flex;
        gap: 8px;
        flex-direction: column;
        text-align: center;
        margin-right: 8px;
        cursor: pointer;
    }

    span.title{
        font-weight: bold;
        font-size: 16px;
    }
`;

    const favorites = config.favorites;

    return (
        <StyledFavorites>
            <div>
                <section>
                    <span className="title">AluraTubes Favoritos</span>
                    <div className="favorites">
                        {favorites.map((favorite) => {
                            return (
                                <a href={`https://www.youtube.com/c/${favorite.name}`} target="_blank">
                                    <div className="favorite">
                                    <img src={favorite.thumb} />
                                    <span>@{favorite.name}</span>
                                    </div>
                                </a>  
                            );
                        })}
                    </div>
                </section>
            </div>
        </StyledFavorites>
    )
}