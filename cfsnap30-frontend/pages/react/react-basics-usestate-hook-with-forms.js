import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUseStateHookWithForms() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useState Hooks With Forms</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: useState Hooks With Forms</h2>
            
            <h4>SongList.js </h4>
            
            </div>

            <div className="container">    	
<pre><code>{`import React, { useState } from 'react';
import uuid from 'uuid/v1'; 
//library for unique ids for React keys
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([ 
      //put getter and setter into state
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const addSong = (title) => { 
      //spread current song list into setter, 
      //then add newly added song to setter
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {  
        //map a new array for display 
        //in a ul list
          return ( <li key={song.id}>
              {song.title}
              </li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} /> 
      //dont forget to add the prop
    </div>
  );
}

export default SongList;
`}
</code></pre><br />

<h4>NewSongForm.js</h4>

<pre><code>{`import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  // useState can be used multiple 
  //times for different data
  const [artist, setArtist] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:/label>
      <input type='text' value={title} 
      onChange={(e) => 
      setTitle(e.target.value)} />
      <input type='submit' value='add' />
    </form>
  );
}
 
export default NewSongForm;
`}
</code></pre><br />

      

    
            </div>
        </div>

        )
    }    

export default reactBasicsUseStateHookWithForms
