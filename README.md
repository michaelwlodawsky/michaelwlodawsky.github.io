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

**TODO: Make below steps automatic**

Generate token to see portfolio e2e:

Step 1:

```
Go to: http://127.0.0.1:4000
```

Step 2:
Create token for testing. Check Firebase console for schema.
