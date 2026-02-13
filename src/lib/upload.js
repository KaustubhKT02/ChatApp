import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // include /v1
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const storage = new Storage(client);

export async function uploadImage(file) {
  const res = await storage.createFile(
    import.meta.env.VITE_APPWRITEBUCKETID,
    ID.unique(),
    file
  );

  const imageUrl = `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${import.meta.env.VITE_APPWRITEBUCKETID}/files/${res.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}`;
  return imageUrl;
}



