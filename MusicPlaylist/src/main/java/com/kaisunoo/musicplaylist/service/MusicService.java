package com.kaisunoo.musicplaylist.service;

import com.kaisunoo.musicplaylist.model.Music;

import java.util.List;

public interface MusicService {
    public Music saveMusic(Music music);
    public Music updateMusic(Integer id, Music music);
    void deleteMusic(Integer id);
    public List<Music> getAllMusic();
}


