import {createURL} from "expo-linking";

// import app.json


export class UrlHelper {

	static getURLToLogin(){
		let url = createURL("/login");
		return url;
	}

}
