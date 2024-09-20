import conf from "../conf/conf";
import { Client, Databases ,ID, Query,Storage } from "appwrite";


export class Service{
    client = new Client()
    Databases;
    bucket;
    constructor(){
        this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.Databases = new Databases(this.client);
    this.bucket = new Storage(this.client);

    }
     async createPost ({title,slug,content,featuredImage,
        status,userId}){
        try {
            return await this.Databases.createDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service ::createPost:: error",error);
        }

        }
     async UpdatePost(slug,{title,status,content,
            featuredImage}){
            try {
          return await this.Databases.updateDocument(
              conf.appwritedatabaseId,
              conf.appwritecollectionId,
              slug,
              {
                  title,
                  status,
                  content,
                  featuredImage,
              }
          );
      } catch (error) {
         console.log("Appwrite service:: UpdatePost::error",error); 
      }
  }
     async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service::deletePost:: error",error);
            return false
        }
    }
     async getPost(slug){
        try {
           return await this.Databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            slug
           ) 
        } catch (error) {
           console.log("Appwrite Service:: getPost::error",error); 
           return false
        }
     }
     async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appwritedatabaseId,
                conf.appwritecollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service:: getPosts:: error",error);
        }
     }
     // file uplod service
     async uplodFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service:: uplodFile::error",error);
            return false
        }
     }
     async deleteFile(fileID){
        try {
          await this.bucket.deleteDocument(
                conf.appwritebucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite Service:: deleteFile:: error",error);
            return false
        }
     }

     getFilePreviwe(fileID){
        return this.bucket,this.getFilePreviwe(
            conf.appwritebucketId,
            fileID
        )
     }

}


const service = new Service()
export default Service;