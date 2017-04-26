package com.gameder.app.handlers.gamers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GamersHandler {
    @RequestMapping(value = "/api/gamers", method = RequestMethod.GET)
    public Gamer getGamerList() {
        return new Gamer();
    }
}
