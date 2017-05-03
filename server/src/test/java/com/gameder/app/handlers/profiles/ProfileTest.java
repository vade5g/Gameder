package com.gameder.app.handlers.profiles;

import org.junit.*;

public class ProfileTest {
    @Test
    public void ProfileNameShouldBeValid() {
        Assert.assertEquals(new Profile("A Little Pony", "imgUrl").getName(), "A Little Pony");
    }


}
