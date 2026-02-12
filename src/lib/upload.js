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

  // return ONLY fileId
  return res.$id;
}

export function getImageUrl(fileId) {
  return storage.getFilePreview(
    import.meta.env.VITE_APPWRITEBUCKETID,
    fileId
  );
}

