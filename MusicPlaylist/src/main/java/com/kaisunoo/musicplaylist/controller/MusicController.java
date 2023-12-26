package com.kaisunoo.musicplaylist.controller;

import com.kaisunoo.musicplaylist.model.Music;
import com.kaisunoo.musicplaylist.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//REST
@RestController
@RequestMapping("/music")
@CrossOrigin
public class MusicController {
    @Autowired
    private MusicService musicService;

    @PostMapping("/add")
    public String add(@RequestBody Music music){
        musicService.saveMusic(music);
        return "New music is added.";
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable Integer id, @RequestBody Music music) {
        musicService.updateMusic(id, music);
        return "Music is updated.";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        musicService.deleteMusic(id);
        return "Music is deleted.";
    }

    @GetMapping("/getAll")
    public List<Music> getAllMusic(){
        return musicService.getAllMusic();
    }

}
