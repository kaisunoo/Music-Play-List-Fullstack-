import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Button} from '@mui/material';

export default function Music() {
  const[artist,setArtist]=React.useState('')
  const[songTitle,setTitle]=React.useState('')
  const[album,setAlbum]=React.useState('')
  const[yearReleased,setYear]=React.useState('')
  const[music,setMusic]=React.useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const music={artist, songTitle, album, yearReleased}
    console.log(music)
    fetch("http://localhost:8080/music/add", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(music)
    }).then(()=>{
      console.log("New music is added.")
    })
  } 

  const [selectedMusicId, setSelectedMusicId] = React.useState(null);

  const handleUpdate = (id, updatedMusic) => {
    fetch(`http://localhost:8080/music/update/${id}`, {
      method: "PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(updatedMusic)
    })
    .then(() => {
      console.log(`Music with id ${id} is updated.`);
      fetchMusic(); // Fetch the updated list of music
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const fetchMusic = () => {
    fetch("http://localhost:8080/music/getAll")
      .then(response => response.json())
      .then(data => setMusic(data))
      .catch((error) => console.error('Error:', error));
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/music/delete/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      console.log(`Music with id ${id} is deleted.`);
      fetchMusic(); // Fetch the updated music list
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  React.useEffect(()=>{
    fetch("http://localhost:8080/music/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setMusic(result);
      }
    )
  },[])

  
  return (
    <Container>
    <Box 
      component="form"
      sx={{
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '10px',
        margin: '10px 0'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      sx={{
        margin: '10px 10px 10px 0', 
        padding: '10px'}}
      id="standard-basic" 
      label="Artist" 
      variant="standard" 
      value={artist}
      onChange={(e)=>setArtist(e.target.value)}
      />
      <TextField 
      sx={{
        margin: '10px 10px 10px 0', 
        padding: '10px'}}
      id="standard-basic" 
      label="Title" 
      variant="standard" 
      value={songTitle}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <TextField 
      sx={{
        margin: '10px 10px 10px 0', 
        padding: '10px'}}
      id="standard-basic" 
      label="Album" 
      variant="standard" 
      value={album}
      onChange={(e)=>setAlbum(e.target.value)}
      />
      <TextField 
      sx={{
        margin: '10px 10px 10px 0', 
        padding: '10px'}}
      id="standard-basic" 
      label="Year" 
      variant="standard" 
      value={yearReleased}
      onChange={(e)=>setYear(e.target.value)}
      />
    </Box>
    
    <Button 
    sx={{
      margin: '10px 10px 10px 0', 
      padding: '10px',
      backgroundColor: '#102937'}}
    variant="contained" 
    onClick={handleClick}>
      Add
    </Button> 
    <Button 
    sx={{
      margin: '10px 0', 
      padding: '10px',
      backgroundColor: '#102937'}}
    variant="contained" 
    onClick={() => {
    if (selectedMusicId !== null) {
      const updatedMusic = { artist, songTitle, album, yearReleased };
      handleUpdate(selectedMusicId, updatedMusic);
    } else {
      console.log("No music is selected for update.");
    }
    }}>
    Update
    </Button>

    <Box>
    <strong>Music</strong>
    </Box>

    <Box 
    sx={{ 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '10px' }}>
  {music.map((music, index) => (
    <Box 
    key={index} 
    sx={{ margin: '10px 0', 
    padding: '10px', 
    border: '1px solid #ccc', 
    borderRadius: '5px',
    backgroundColor: selectedMusicId === music.id ? '#d3d3d3' : '#f5f5f5' // Change the background color if the music is selected
     }}>
      <p><strong>Artist:</strong> {music.artist}</p>
      <p><strong>Title:</strong> {music.songTitle}</p>
      <p><strong>Album:</strong> {music.album}</p>
      <p><strong>Year:</strong> {music.yearReleased}</p>
      <Button sx={{margin: '10px 10px 10px 0', padding: '10px', backgroundColor: '#102937'}} variant="contained" onClick={() => handleDelete(music.id)}>Delete</Button>
      <Button sx={{margin: '10px 0', padding: '10px', backgroundColor: '#102937'}} variant="contained" onClick={() => setSelectedMusicId(music.id)}>Select for Update</Button>
    </Box>
  ))}
</Box>
    </Container>
  );
}
