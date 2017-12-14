# My solution

I've decided to stop at this point. Otherwise I would be refactoring and adding tests next.

## Notes

- I'm not using a state manager, because this app has no state!
- Look at the commit log for development details.
- There are many things that "application flow" could mean. Just google it, you'll see what I mean.
- I was having issues with the dev server, so I scrapped it in order to be more productive.
- I'm not using a css preprocessor because css modules make them much less necessary.
- Lately I've been doing all of my dev work in docker containers.

## Usage

I've provided a generic Dockerfile and `start.sh` for generating a development environment.

Run these commands:
```sh
npm install
npm run webpack
npm run proxy
```
Then you should be able to open `dist/index.html` with your browser.
