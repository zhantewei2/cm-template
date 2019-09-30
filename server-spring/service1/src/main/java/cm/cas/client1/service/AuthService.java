package cm.cas.client1.service;

import cm.cas.client1.controller.mainController.params.ParamLogin;
import cm.cas.client1.dao.AuthDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.bson.Document;

@Service
public class AuthService {
    @Autowired
    private AuthDao authDao;

    /***
    * @Description
    * @author ztw
    * @param
    * @return
    **/
    public Document login(ParamLogin params){
        return authDao.findUser(params);
    }

}
