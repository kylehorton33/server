# Build / Develop

```
npm i
npm run dev
```

Create file named `.env` with the following variables:

```
PORT=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DATABASE=
```

# Deploy

```
gcloud run deploy server --source . 
```