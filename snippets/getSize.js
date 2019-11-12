const size = item => new Blob([item]).size;

console.log(`Size of "test": ${size("test")}`);
