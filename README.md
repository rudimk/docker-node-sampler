# docker-node-sampler
A sample codebase for a session I'm giving on Docker.

The actual container image can be found here: [https://hub.docker.com/r/rakshas/docker-node-sampler/](https://hub.docker.com/r/rakshas/docker-node-sampler/)

## Instructions

1. Clone the repo(duh!). Note that git may not be installed in most container images, so it always makes more sense to `COPY` `index.js` and `package.json` into the container, during the build stage.

2. Inside the directory, run `npm install`.

3. Run `node index.js`, and access the app at `http://localhost:1337`.