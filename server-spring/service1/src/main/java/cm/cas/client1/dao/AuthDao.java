package cm.cas.client1.dao;

import cm.cas.client1.configuration.mongodb.MongodConnection;
import static com.mongodb.client.model.Filters.*;
import cm.cas.client1.controller.mainController.params.ParamLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import org.bson.Document;

@Component
public class AuthDao {
    @Autowired
    private MongodConnection cmMongo;

    public Document findUser(ParamLogin params){
        return cmMongo.user.find(
                and(
                        eq("account",params.getAccount()),
                        eq("pwd",params.getPassword())
                )
        ).first();
    }

}
