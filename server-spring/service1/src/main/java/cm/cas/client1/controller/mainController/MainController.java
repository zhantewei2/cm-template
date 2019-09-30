package cm.cas.client1.controller.mainController;


import cm.cas.client1.controller.mainController.params.ParamLogin;
import cm.cas.client1.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.bson.Document;
import org.cm.pro.utils.ZTWMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Api("auth")
public class MainController{
    @Autowired
    private AuthService _auth;

    @ApiOperation("login")
    @PostMapping("/login")
    public void login(
            @RequestBody ParamLogin params,
            BindingResult bindingResult
    ){
        ZTWMethod.ValCheck(bindingResult);
        Document doc=_auth.login(params);

    }
}
