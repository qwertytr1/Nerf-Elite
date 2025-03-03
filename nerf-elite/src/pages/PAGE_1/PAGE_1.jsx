import './style.css';

function Page1() {
  return (
    <>
    <header>
      <div className="logo"></div>
      <div className="textChoose">
        choose your blaster then shoot as many <br />
        targets as you can within the time limit!
      </div>
    </header>
    <div className="weapon-container">
      <div className="firstWeapon"></div>
      <div className="secondWeapon"></div>
      <div className="thirdWeapon"></div>
      <div className="fourthWeapon"></div>
          </div>
          <div className="buttons-container">
        <button className="weapon-button">PLAY MINIGAME </button>
        <button className="weapon-button">WATCH VIDEO</button>
        <button className="weapon-button">VIEW RANGE</button>
        <button className="weapon-button">VISIT NERF</button>
      </div>
  </>
  );
}
export default Page1;
