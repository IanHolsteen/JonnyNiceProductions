import { Spotify } from "../components/Spotify";

export default function Placements() {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-home">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                <div className="scroll-container z-[2] h-4/6 overflow-y-auto">
                    <div className="p-5 text-white z-[2] text-center w-[980px]">
                        <h2 className="text-6xl font-bold pb-6">Placements</h2>
                    <div className="space-y-2" >
                        <Spotify wide link="https://open.spotify.com/track/0ZwYpEG8Jef3V0VPeu7q7O" id="hkstee" />
                            <Spotify wide link="https://open.spotify.com/track/2l2kFw2GBg4AVp3dbxvJPG" id="croma619" />
                                <Spotify wide link="https://open.spotify.com/track/11ktXmPnaLGXkENcAkffsG" id="stlouis" />
                                    <Spotify wide link="https://open.spotify.com/track/1jSWLIZv4BvZ9I2SSTFLZ5" id="hbavaro" />
                                        <Spotify wide link="https://open.spotify.com/track/2SWfDQhvdsMaplMkbDWVl1" id="marg" />
                                            <Spotify wide link="https://open.spotify.com/track/1OZVXYpBha19Voe5yNBUnx" id="marg" />
                                                <Spotify wide link="https://open.spotify.com/track/4lru0fJnXpreVVrpFpbqXt" id="marg" />
                                            <Spotify wide link="https://open.spotify.com/album/2gSAtsHHHbkRmsEeX5wSrg" id="marg" />
                                        <Spotify wide link="https://open.spotify.com/track/0CzSiafgVrzaf21rcAQ9z5" id="bnoir" />
                                    <Spotify wide link="https://open.spotify.com/track/4rKLjgHC7XUMXZmE1mAZpC" id="bnoir" />
                                <Spotify wide link="https://open.spotify.com/track/3OSQ1Jtf2Q6rQyOsGYaWVk" id="winks" />
                            <Spotify wide link="https://open.spotify.com/track/4ABjTxeh2hz4G3kOZBvPvX" id="winks" />
                        <div className="grid grid-cols-3 gap-4 place-content-center">
                            <Spotify link="https://open.spotify.com/album/49MCny8XcNaNsmrbXJJrOK" className="mx-auto" id="brodcast" />
                                <Spotify link="https://open.spotify.com/album/2514mjq37KdZHDcWRyryKt" className="mx-auto" id="brodcast" />
                            <Spotify link="https://open.spotify.com/album/24KtZOCzpcUCsZd7TVDg2r" className="mx-auto" id="brodcast" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}