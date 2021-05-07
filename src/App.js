
import React, {useState} from 'react';


function App() {
  return <div>
    <Folder name='Desktop'>
      <Folder name='music'>
        <File name='all_star.mp4' />
        <File name='express_file.mp4' />
      </Folder>
      <File name='dogs.jpeg' />
      <File name='cats.png' />
    </Folder>
    <Folder name='Applications'/>
  </div>
}

const Folder = (props) => {
  console.log(useState(true));
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children} = props;
  console.log(props);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log('clicked');
  }

  return <div>
    <span onClick={handleClick}><i class='folder icon'></i></span>
      {name}
      <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
      </div>
    </div>
}

const File = (props) => {
  return <h5>{props.name}</h5>
}

export default App;
