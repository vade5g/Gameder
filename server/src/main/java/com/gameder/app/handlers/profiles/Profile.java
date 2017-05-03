package com.gameder.app.handlers.profiles;

public class Profile {
    private final String name;
    private final String img;

    public Profile(String name, String img) {
        this.name = name;
        this.img = img;
    }

    public String getName() {
        return this.name;
    }

    public String getImg() {
        return this.img;
    }
}
