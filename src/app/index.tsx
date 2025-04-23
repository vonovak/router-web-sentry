import { Button } from "react-native";
import ky from "ky";

export default function Home() {

  return (
    <>
      <Button
        title="send a POST to api"
        onPress={async () => {
          const responseFromServer = await ky("/api/how-are-you", {
            method: "POST",
          }).text()
          alert(responseFromServer)
        }}
      />

    </>
  );
}
