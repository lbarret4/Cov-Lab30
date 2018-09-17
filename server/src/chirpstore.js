import fs from 'fs';
let chirps = {
    "0": {
        time: new Date(2018, 7, 27, 7, 0),
        user: "Taomgirl",
        content: "I woke up really early this morning"
    },
    "1": {
        time: new Date(2018, 7, 28, 7, 11),
        user: "Divi",
        content: "Somewhere over the rainbow"
    },
    "2": {
        time: new Date(2018, 7, 29, 23, 0),
        user: "Bobby Z",
        content: "Who ate my cheese?"
    },
    nextid: 3
};

if (fs.existsSync('server/chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('server/chirps.json'));
}

let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
}

let getChirp = id => {
    return Object.assign({}, chirps[id]); //create a copy and return it
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('server/chirps.json', JSON.stringify(chirps, null, 2));
};

let  chirpStore = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};

export default chirpStore;