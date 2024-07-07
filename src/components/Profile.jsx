function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
export default function Profile({
  name,
  url,
  prof,
  numOfAwards,
  awardsDesc,
  desc,
}) {
  return (
    <div>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(url)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {prof}
          </li>
          <li>
            <b>Awards: {numOfAwards}</b>({awardsDesc})
          </li>
          <li>
            <b>Discovered: </b>
            {desc}
          </li>
        </ul>
      </section>
    </div>
  );
}
