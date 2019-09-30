package cm.cas.client1.configuration.mongodb;
import static com.mongodb.client.model.Projections.*;
import static com.mongodb.client.model.Filters.*;
import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;

import java.util.*;

@Slf4j
public class MongodConnection {
    private MongoClient client;
    private MongoDatabase cmDb;
    public MongoCollection<Document> user;
    public MongoCollection<Document> reps;
    private List<String> collectionNames;

    public MongodConnection(
            String mongodbHost,
            String mongodbDatabase,
            Integer mongodbPort,
            String mongodbUser,
            String mongodbPwd
    ){
        System.out.println("host:"+mongodbHost);
        System.out.println("database:"+mongodbDatabase);
        System.out.println("mongodbPort:"+mongodbPort);
        System.out.println("mongodbUser:"+mongodbUser);
        System.out.println("mongodbPwd:"+mongodbPwd);
        char[] pwdchars=new char[mongodbPwd.length()];
//        mongodbPwd.getChars(0,mongodbPwd.length(),pwdchars,0);
//        MongoCredential credential=MongoCredential.createCredential(mongodbUser,mongodbDatabase,pwdchars);
//        ServerAddress serverAddress=new ServerAddress(mongodbHost,mongodbPort);
//        MongoClientOptions options= MongoClientOptions.builder().build();
//        client=new MongoClient(serverAddress,credential,options);
//        cmDb=client.getDatabase(mongodbDatabase);
//
//        createCollection("user");
//        reps=createCollection("reps");

    }
    private MongoCollection<Document> createCollection(String collectionName){
        if(collectionNames==null)collectionNames=cmDb.listCollectionNames().into(new ArrayList<>());
        if(collectionNames.contains(collectionName)){
            log.warn(collectionName+":exists");
        }else{
            cmDb.createCollection(collectionName);
        }
        return cmDb.getCollection(collectionName);
    }
    private void createIndex(MongoCollection collection, String indexName){
        try{

        }catch (Exception e){

        }
    }

    static public void main (String[] args){
//        MongodConnection conn=new MongodConnection(
//                "106.13.65.20",
//                "cm",
//                9808,
//                "cm",
//                "wobuaiwo"
//        );
    }

}
