// https://raw.githubusercontent.com/XJTPL/mjswuc/refs/heads/main/repo-explorer.js
// Repository Explorer by XJTPL (https://github.com/XJTPL)
// Started on 23 Nov 2026

// NOTE: This utility was only designed for repositories that are not in a project.


function FilePath(url) {
    this.owner = "";
    this.repo = "";
    this.refType = "";
    this.refName = "";
    this.path = [];
}


