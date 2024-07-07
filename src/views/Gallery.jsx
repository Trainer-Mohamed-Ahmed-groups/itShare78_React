import Profile from "../components/Profile";

export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile
        name="Maria Skłodowska-Curie"
        url="szV5sdG"
        prof="physicist and chemist"
        numOfAwards={4}
        awardsDesc="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal"
        desc="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        url="YfeOqp2"
        prof="geochemist"
        numOfAwards={2}
        awardsDesc="Miyake Prize for geochemistry, Tanaka Prize"
        desc="a method for measuring carbon dioxide in seawater"
      />

    </div>
  );
}
