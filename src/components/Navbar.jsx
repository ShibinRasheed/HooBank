import "./Navbar.css"

export default function Navbar() {

  return (
    <div className='navList flex flex-row'>
      <h1 className='text-green-500 font-bold font-mono'>React.</h1>
      <ul>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
