package com.gameder.app.handlers.profiles;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfilesHandler {
    @RequestMapping(value = "/api/profiles", method = RequestMethod.GET)
    public Profile getGamerList() {
        return new Profile();
    }
}
