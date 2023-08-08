// Get DB name
const name = process.argv[2];
if (typeof name !== 'string') throw new Error('Invalid database name: ' + name);

const uri = `${process.cwd()}/src/databases/${name}/bootstrap.ts`,
    bootstrapURI = Bun.file(uri);

if (await bootstrapURI.exists()) 
    Bun.spawn([process.execPath, 'run', uri]);
else throw new Error('Database does not exists: ' + uri);

