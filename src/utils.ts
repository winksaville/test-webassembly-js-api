import * as fs from "fs";

export function readFileAsync(filePath: string): Promise<Uint8Array> {
  let promise = new Promise<Uint8Array>((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(new Uint8Array(data));
      }
    });
  });
  return promise;
}
