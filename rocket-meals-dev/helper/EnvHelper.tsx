import * as appJson from "@/components/../app.json";

export class EnvHelper {

	static getBaseUrl(){
		return appJson.expo.experiments.baseUrl;
	}

	static getEnv(){
		return process.env;
	}

}
