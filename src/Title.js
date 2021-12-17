import React from 'react'

const titleStyle = {
    float: 'left',
    marginLeft: '0em',
    height: '1em',
    fontSize: '60px',
    marginRight: '100%'
    
}
const bodyStyle = {
    margin: '10pt 6em',
    marginBottom: '20px',
    marginLeft: '90px'
}
function Title() {
    return(
        <div>
            <body style={bodyStyle}>
                <h1 style={titleStyle}>LaibaWomensWear</h1>
            </body>
        </div>
    )
}



export default Title



