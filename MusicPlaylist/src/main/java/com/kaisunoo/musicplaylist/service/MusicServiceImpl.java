package com.kaisunoo.musicplaylist.service;

import com.kaisunoo.musicplaylist.model.Music;
import com.kaisunoo.musicplaylist.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicServiceImpl implements MusicService {

    @Autowired
    private MusicRepository musicRepository;

    @Override
    public Music saveMusic(Music music) {

        return musicRepository.save(music);
    }

    @Override
    public Music updateMusic(Integer id, Music music) {
        Music existingMusic = musicRepository.findById(id).orElseThrow(() -> new RuntimeException("Music not found"));
        existingMusic.setArtist(music.getArtist());
        existingMusic.setSongTitle(music.getSongTitle());
        existingMusic.setAlbum(music.getAlbum());
        existingMusic.setYearReleased(music.getYearReleased());
        return musicRepository.save(existingMusic);
    }

    @Override
    public void deleteMusic(Integer id) {
        musicRepository.deleteById(id);
    }

    @Override
    public List<Music> getAllMusic() {
        return musicRepository.findAll();
    }
}
