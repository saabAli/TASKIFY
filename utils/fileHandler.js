const fs = require('path');
const path = require('path');

const filepath = './data/tasks.json';

exports.writeTaskToFile = (task) => {
    fs.writeFilesync(filepath,  JSON.stringify(tasks, null, 2))
}