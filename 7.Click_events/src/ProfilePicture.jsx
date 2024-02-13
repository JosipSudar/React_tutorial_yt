const ProfilePicture = () => {
  const imgUrl = "https://randomuser.me/api/portraits/men/34.jpg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <img src={imgUrl} onClick={(e) => handleClick(e)} />
    </>
  );
};

export default ProfilePicture;
