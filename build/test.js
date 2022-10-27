"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const src_1 = __importDefault(require("./src"));
dotenv_1.default.config();
const client = new src_1.default(process.env.INSTAGRAM_CSRF, process.env.INSTAGRAM_COOKIE, process.env.USER_AGENT);
async function example() {
    const posts = await client.fetchProfilePosts('khabib_nurmagomedov', 1);
    console.log(posts.items[0].caption.text); // ->Thank you so much Sheikh Hamdan.\nThe support for this training camp was amazing.\nYou are a very big part of our success.\n\n@faz3
}
example();
