# Instagram User API Wrapper

## This is still in early barebones stages, so it might not work and i am still updating it

## Setup

After installing with your preferred package manager, initialise using new InstagramClient (or whatever you import it as).

- Please use env. The data here is very sensitive.

- I am not responsible for your instagram account if it gets banned.

- You could also use it without signing in however the ratelimit is quite high and also they could maybe ip ban.

```ts
import InstagramClient from "@Mub1532/instagram-user-api-wrapper";

const client = new InstagramClient(<Your instagram CSRF>, <Your Instagram cookie>, <Your user agent>);
```

## Example
```ts
import dotenv from 'dotenv';
import InstagramClient from './src';

dotenv.config();

const client = new InstagramClient(process.env.INSTAGRAM_CSRF, process.env.INSTAGRAM_COOKIE, process.env.USER_AGENT);

async function example() {
    const posts = await client.fetchProfilePosts('khabib_nurmagomedov', 1);

    console.log(posts.items[0].caption.text); // ->Thank you so much Sheikh Hamdan.\nThe support for this training camp was amazing.\nYou are a very big part of our success.\n\n@faz3
}
example();
```

## Documentation

Documentation can be found at https://mub1532.github.io/instagram-user-api-wrapper/classes/default.html

Docs made using the [TypeDoc](https://github.com/TypeStrong/typedoc) package
