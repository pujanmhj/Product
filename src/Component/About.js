import React from 'react'
import Wrapper from '../Common/Wrapper'
function About() {
  const styles = {
    container: {
      color: "pink",
      backgroundcolor: "black",
      width: "100%",
      height: "8rem",
      border: "2px solid black",
      textAlign: "center",
    },
    main: {
      position: "relative",
      textAlign: "center",
      color: "black",
    },
    centered: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }


  }
  return (
    <div>
      <Wrapper>
        <h2 style={styles.container}>Discover Who We Are</h2>
      
        <div style={styles.main}>
        <img src="https://media.istockphoto.com/id/92879541/photo/adam.jpg?s=612x612&w=0&k=20&c=JN94UMoYM7GCo31xw6iSAVwASIO12Bp8kVidavWasfo=" alt="" />
        <div style={styles.centered}>Discover Who We Are</div>
        </div>
      </Wrapper>
    </div>
  )
}
export default About