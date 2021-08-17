import { useState, useEffect } from "react";

import { projectStorage, projectFirestore, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, SetUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on("state_changed", (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);

    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      SetUrl(url);
      collectionRef.add({
        url,
        createAt: timeStamp(),
        name: file.name
      })
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;