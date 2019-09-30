package cm.cas.client1.configuration.mongodb;
import static com.mongodb.client.model.Projections.*;
import static com.mongodb.client.model.Filters.*;
import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;

import javax.print.Doc;
import java.util.*;

@Slf4j
public class MongodConnection {
    private MongoClient client;
    private MongoDatabase cmDb;
    //用户
    public MongoCollection<Document> user;
    //仓库
    public MongoCollection<Document> reps;
    //静态列表
    public MongoCollection<Document> lists;

    private List<String> collectionNames;

    public MongodConnection(
            String mongodbHost,
            String mongodbDatabase,
            Integer mongodbPort,
            String mongodbUser,
            String mongodbPwd
    ){
        char[] pwdchars=new char[mongodbPwd.length()];
        //create client
        mongodbPwd.getChars(0,mongodbPwd.length(),pwdchars,0);
        MongoCredential credential=MongoCredential.createCredential(mongodbUser,mongodbDatabase,pwdchars);
        ServerAddress serverAddress=new ServerAddress(mongodbHost,mongodbPort);
        MongoClientOptions options= MongoClientOptions.builder().build();
        client=new MongoClient(serverAddress,credential,options);
        cmDb=client.getDatabase(mongodbDatabase);
        //create collections
        user=createCollection("user");
        reps=createCollection("reps");
        lists=createCollection("lists");
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
