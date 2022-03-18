import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qZzKZuGaK-zkgWF7hIuiQ9bntVZh-GPDx1SJO3XowzZ5TmruuMTYTH6FQtMwdRyy0poernvzqRH7trkf6k4G8aY195V1Anm-tCbxw5xxFVsRYIaqjMhSKMV3ev0oYnYx",
  },
});
