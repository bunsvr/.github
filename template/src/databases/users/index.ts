// This file creates and exports databases
import { Database } from 'bun:sqlite';

const users = new Database(import.meta.dir + '/.sqlite', {
    create: true,
    readwrite: true
});

export default users;
