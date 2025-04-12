import { open } from 'node:fs/promises';

let filehandle;
try {
    filehandle = await open('thefile.txt', 'w');
    filehandle.write("hello world");
} finally {
  await filehandle?.close();
} 
