package com.gameder.app.handlers.gamers;

import org.junit.*;

public class GamerTest {
    @Test
    public void GamerIdShouldBeValid() {
        Assert.assertEquals(new Gamer().getId(), 1);
    }
}
