package cm.cas.client1.dao;

import cm.cas.client1.configuration.mongodb.MongodConnection;
import static com.mongodb.client.model.Filters.*;
import cm.cas.client1.controller.mainController.params.ParamLogin;
import cm.cas.client1.entity.UserEntity;

import com.mongodb.Mongo;
import com.mongodb.client.result.UpdateResult;
import org.apache.catalina.User;
import org.bson.BsonDocument;
import org.bson.conversions.Bson;
import org.cm.pro.mongo.MongoUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.bson.Document;

import java.util.Arrays;
import java.util.Map;

@Component
public class AuthDao {
    @Autowired
    private MongodConnection cmMongo;

    //find user
    public Document findUser(ParamLogin params){
         Document doc=cmMongo.user.find(
                and(
                        eq("account",params.getAccount()),
                        eq("pwd",params.getPassword())
                )
        ).first();
        return doc;
    }
    //add user
    public void addUser(UserEntity userEntity)throws Exception{
        cmMongo.user.insertOne(
                MongoUtils.ConvertDocument(userEntity)
        );
    }
    //update user
    public Long updateUser(UserEntity userEntity)throws Exception{
        Bson bson=new Document();
        UpdateResult result=cmMongo.user.updateOne(
                eq("_id",userEntity.get_id()),
                MongoUtils.ConvertDocument(userEntity,null,Arrays.asList("_id"))
        );
        return result.getModifiedCount();
    }

    static public void main(String[] args) throws Exception{

    }

}
