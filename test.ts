import dotenv from 'dotenv';
import InstagramClient from './src';

dotenv.config();

const client = new InstagramClient(process.env.INSTAGRAM_CSRF, process.env.INSTAGRAM_COOKIE, process.env.USER_AGENT);

async function example() {
    const posts = await client.fetchProfilePosts('khabib_nurmagomedov', 1);

    console.log(posts.items[0].caption.text); // ->Thank you so much Sheikh Hamdan.\nThe support for this training camp was amazing.\nYou are a very big part of our success.\n\n@faz3
}
example();
