Yay, `json/index.json` works similar to `index.html` — gets served at https://github-cben-sandbox.anat-beni.net/json/ (aka https://cben.github.io/sandbox/json/) — but with `content-type: application/json; charset=utf-8` !

It's also 301 redirected from https://github-cben-sandbox.anat-beni.net/json .

This file is deliberately not named `README.md` because that got served instead of `index.json`.

N.B. You may find that having a file with the same name as the directory stops the redirect.  For example if you have a api.json and a sub directoy called api containing a index.json and in the same root directory. 

    +-- api.json
    +-- api
    |   +-- index.json

If this is the case simply delete api.json and /api/ & /api/index.json should be routable. 
