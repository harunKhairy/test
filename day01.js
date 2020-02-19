// console.log("Harun")
// console.log("Haloo")
// var x = prompt("Masukan nama kamu ?")
// var y = prompt("masukan umur kamu")

// alert( "Nama kamu adalah "+ x + "Umur kamu "+ y)

// var nama = 'Andi';
// console.log(nama);

// var usia;
// usia = 22;
// usia = 32;
// console.log(usia);

// let jomblo = true;
// console.log(jomblo); 


// var x = 21
// var x = 22
// console.log(x);
// // output = 22



// let y = 'hai'
// let y = 'halo'
// console.log(y);
// SyntaxError

console.log(_dirname)


{
    "beautify.language": {
        "js": {
            "type": ["javascript", "json"],
            "filename": [".jshintrc", ".jsbeautifyrc"]
            // "ext": ["js", "json"]
            // ^^ to set extensions to be beautified using the javascript beautifier
        },
        "css": ["css", "scss"],
        "html": ["htm", "html"]
        // ^^ providing just an array sets the VS Code file type
    }
}
Beautify on save will be enabled when "editor.formatOnSave"
is true.

Beautification on particular files using the built in Format Document(which includes formatting on save) can be skipped with the beautify.ignore option.Using the Beautify file and Beautify selection will still work.For files opened from within the workspace directory, the glob patterns will match from the workspace folder root.For files opened from elsewhere, or when no workspace is open, the patterns will match from the system root.

Examples:

    /* ignore all files named 'test.js' not in the root folder,
       all files directly in any 'spec' directory, and
       all files in any 'test' directory at any depth
    */
    "beautify.ignore": ["*/test.js", "**/spec/*", "**/test/**/*"]

/* ignore all files ending in '_test.js' anywhere */
"beautify.ignore": "**/*_test.js"
Note that the glob patterns are not used to test against the containing folder.You must match the filename as well.

Embedded version of js - beautify is v1 .8 .4

Keyboard Shortcut
Use the following to embed a beautify shortcut in keybindings.json.Replace with your preferred key bindings.

{
    "key": "cmd+b",
    "command": "HookyQR.beautify",
    "when": "editorFocus"
}