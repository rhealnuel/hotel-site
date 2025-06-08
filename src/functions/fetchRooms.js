export const fetchRooms = (query, setData, setLoading,setError) => {
    setLoading(true)
     fetch(`https://hotel-site-backend.vercel.app/api/${query}`) // Example API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
} 