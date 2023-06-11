import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      About {a.state.name} {a.state.class}
    </div>
  )
}

export default About