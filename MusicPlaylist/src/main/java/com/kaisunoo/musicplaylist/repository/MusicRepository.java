package com.kaisunoo.musicplaylist.repository;

import com.kaisunoo.musicplaylist.model.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepository extends JpaRepository<Music, Integer> {

}
