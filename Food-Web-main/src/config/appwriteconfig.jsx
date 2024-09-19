import {Client, Account, Databases , Storage} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6624060ce4c05f0ccceb");

export const account = new Account(client);
export const database = new Databases(client, "66263f3141d8bdc69c8c");
export const storage = new Storage(client);