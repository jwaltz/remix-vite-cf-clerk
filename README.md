# Deploying to CF Pages
0. Create a new CF Pages application
1. Select Remix for framework preset
2. Set the build command to `bun run build`
3. Set the output directory to `/build/client`
4. Add environment variables `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

# Reproducing "TypeError: Cannot read properties of undefined (reading 'CLERK_API_KEY')"
1. Navigate to the deployment and select the Functions tab
2. Begin Log Stream under Real-time Logs
3. Browse the production url and observe the error in the logs

# Reproducing "TypeError: Cannot read properties of undefined (reading 'CLERK_JWT_KEY')"
1. Same as above but deploy the `clerk_jwt_key_undefined` branch

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Development

Run the Vite dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Deployment

> [!WARNING]  
> Cloudflare does _not_ use `wrangler.toml` to configure deployment bindings.
> You **MUST** [configure deployment bindings manually in the Cloudflare dashboard][bindings].

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/
