import axios from "axios";
import { useEffect, useState } from "react";

const DataFetchComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET Using fetch Method
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = response.data;

        // GET Using axios Method
        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        // const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {
      //   cleanup;
    };
  }, []);

  return (
    <div>
      {/* Display data in table using map method */}
      <table className="fetchTableClass">
        <tr>
          <th>Name</th>
          <th>Mail ID</th>
          <th>Usename</th>
          <th>City</th>
          <th>Company</th>
          <th>Website</th>
        </tr>
        {/* {data.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
                <td>{user.website}</td>
              </tr>
            );
          })} */}

        {/* Data Along with destructuring */}
        {data.map(
          ({
            name,
            email,
            username,
            website,
            address: { city },
            company: { name: CompanyName },
          }) => {
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{city}</td>
                <td>{CompanyName}</td>
                <td>{website}</td>
              </tr>
            );
          }
        )}
      </table>

      {/* Display Data */}
      {/* <p>{data[0].name}</p> */}
    </div>
  );
};

export default DataFetchComponent;
