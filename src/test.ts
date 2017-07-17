import * as fs from 'fs'; //fs為file System的縮寫
//fs.writeFileSync('Hello.txt','Hello Typescript');
//console.log('Hello');

const inputPath = './input/';
const outputPath = './output/';

fs.stat(inputPath, getPathStat);

function getPathStat(err, stats) {
    if (err) {
        console.log(err);
    } else {
        if (stats.isDirectory()) {
            fs.readdir(inputPath, getFiles)
        }
    }
};
function getFiles(err: NodeJS.ErrnoException, files: string[]) {
    files.forEach(getFileContent);
}

function getFileContent(filename: string) {
    fs.readFile(inputPath + filename, 'utf8', (err, data) => {
        console.log('檔案' + filename + '讀取完畢 內容為:' + data);
        const newName = filename.replace('.mp3', '.mp4');
        const content = '我是mp4摟!';
        fs.writeFile(outputPath + filename, data, (err) => {
            if (err) {
                //
            }
        });
    });

}

