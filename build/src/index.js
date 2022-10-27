"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class InstagramClient {
    constructor(csrftoken, cookie, userAgent) {
        this.baseEndpoint = 'https://i.instagram.com/api/v1/';
        this.csrftoken = csrftoken;
        this.cookie = cookie;
        this.userAgent = userAgent;
    }
    async request(method, endpoint, data) {
        try {
            const headers = {
                'user-agent': this.userAgent,
                'accept-encoding': 'gzip, deflate, br',
                'x-csrftoken': this.csrftoken,
                'x-ig-app-id': 936619743392459,
                'x-instagram-ajax': 1006476923,
                cookie: this.cookie,
                origin: 'https://www.instagram.com',
                referer: 'https://www.instagram.com/'
            };
            const request = await (0, axios_1.default)(`${this.baseEndpoint}${endpoint}`, {
                method,
                headers,
                data
            });
            return request.data;
        }
        catch (err) {
            const error = err;
            if (error.response.status === 401)
                throw new Error('Instagram rate limit reached.');
            if (error.response.status === 404)
                throw new Error('Instagram user not found');
            throw new Error(err);
        }
    }
    /**
     * Fetch an instagram profile by their username. (If you want their posts use the fetchProfileByUsername method)
     * @param {string} username The users username. Example khabib_nurmagomedov
     * @returns {InstagramUser}
     */
    async fetchProfileByUsername(username) {
        const endpoint = `users/web_profile_info/?username=${username}`;
        const request = await this.request('GET', endpoint);
        const user = request?.data?.user;
        // Remove unneccesary stuff
        delete user?.edge_felix_video_timeline;
        delete user?.edge_owner_to_timeline_media;
        delete user?.edge_saved_media;
        delete user?.edge_media_collections;
        delete user?.edge_related_profiles;
        delete user?.edge_mutual_followed_by;
        return user;
    }
    /**
     * Fetches the specificed profiles posts.
     * @param {string} username The users username. Example khabib_nurmagomedov
     * @param {number} amount The amount of posts you want to fetch.
     * @returns {InstagramUserPosts}
     */
    async fetchProfilePosts(username, amount) {
        const endpoint = `feed/user/${username}/username/?count=${amount}`;
        const request = await this.request('GET', endpoint);
        return request;
    }
}
exports.default = InstagramClient;
