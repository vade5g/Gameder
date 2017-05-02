package com.gameder.app.handlers.profiles;

import org.junit.*;

public class ProfileTest {
    @Test
    public void ProfileIdShouldBeValid() {
        Assert.assertEquals(new Profile().getId(), 1);
    }
}
