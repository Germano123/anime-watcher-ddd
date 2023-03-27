import * as dotenv from 'dotenv';

export class ConfigService {
    constructor() {
        const nodeEnv = process.env.NODE_ENV || process.env.ENVIRONMENT || 'local';
        dotenv.config({
            path: `.${nodeEnv}.env`,
        });
    }

    get nodeEnv() {
        return 'local';
    }

    get app() {
        return {
            url: "http://localhost:",
            port: 3000,
        };
    }
}
