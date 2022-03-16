Take a look at the blog post published on this: [Alert: peacenotwar module sabotages npm developers in the node-ipc package to protest the invasion of Ukraine](https://snyk.io/blog/peacenotwar-malicious-npm-node-ipc-package-vulnerability/)

This is a benign version of the very malicious attempt to delete files if the machine running the code was in Russia or Belarus.

The issue was documented [here](https://web.archive.org/web/20220315181140/https://github.com/vuejs/vue-cli/issues/7054) and quickly acted upon to prevent damage.

**NOTE: Every precaution has been taken to make this code non-destructive. Use at your own risk. It's advised that you *only* run this code inside a container.**

## Set up in Docker

```
docker build . -t node-ipc-goof
docker run --rm --name node-ipc-goof node-ipc-goof
```

## Run the example in Docker

```
docker exec -it node-ipc-goof /bin/bash
```

Then:

```
node index.js
```

You'll see output like:

```
geo ip request url::
	https://api.ipgeolocation.io/ipgeo?apiKey=ae511e1627824a968aaaa758a5309154
current path:
	./
up one:
	../
up two:
	../../
root:
	/
key from geo ip response to look for:
	country_name
country name to act on:
	russia
country name to act on:
	belarus
json passed into function:
	{"country_name":"russia"}
the country name in the json is one we care about:
	true
the character that will be used to overwrite all files:
	❤️
file to be overwritten:
	.dccache
file to be overwritten:
	Dockerfile
file to be overwritten:
	index.js
file to be overwritten:
	package.json
```

The modified code does not make an api call to ipgeolocation.io.

It also does NOT overwrite any files.

An effort was made to preserve the original code with minimal changes. Lines that performed the api calls and did destructive actions have been commented out.