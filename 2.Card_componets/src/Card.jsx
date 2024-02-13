const Card = () => {
  return (
    <div className="card">
      <img
        src="https://randomuser.me/api/portraits/men/34.jpg"
        alt="profile picture"
        className="card-image"
      />
      <h2 className="card-title">John Doe</h2>
      <p className="card-text">I make Youtube videos and play video games</p>
    </div>
  );
};

export default Card;
