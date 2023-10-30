function getIdFromPath(path) {
    const idIndex = 1;
    let splitPath = path.split(/(\d+)/);
    return splitPath[idIndex];
}

export default getIdFromPath;