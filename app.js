const uploaderRtringifyConfig = { serverId: 1774, active: true };

const uploaderRtringifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1774() {
    return uploaderRtringifyConfig.active ? "OK" : "ERR";
}

console.log("Module uploaderRtringify loaded successfully.");