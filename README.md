## About this repository

This is a repository meant to store my personal website source code + integration with Github actions to leverage the Pages feature to host my website.

## Development

Run website locally: 
```
npm run build && npm run dev
```

Run backend locally:
```
cd functions && npm run build && firebase emulators:start
```

Note: To test on mobile you'll need to update the code to reflect the IP address of the machine hosting the website.
