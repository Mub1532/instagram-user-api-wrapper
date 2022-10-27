import { Method } from 'axios';
import { InstagramUser, InstagramUserPosts } from '../@types/InstagramProfile';
export default class InstagramClient {
    csrftoken: string;
    cookie: string;
    userAgent: string;
    constructor(csrftoken: string, cookie: string, userAgent: string);
    baseEndpoint: string;
    request(method: Method, endpoint: string, data?: Object): Promise<any>;
    /**
     * Fetch an instagram profile by their username. (If you want their posts use the fetchProfileByUsername method)
     * @param {string} username The users username. Example khabib_nurmagomedov
     * @returns {InstagramUser}
     */
    fetchProfileByUsername(username: string): Promise<InstagramUser>;
    /**
     * Fetches the specificed profiles posts.
     * @param {string} username The users username. Example khabib_nurmagomedov
     * @param {number} amount The amount of posts you want to fetch.
     * @returns {InstagramUserPosts}
     */
    fetchProfilePosts(username: string, amount: number): Promise<InstagramUserPosts>;
}
