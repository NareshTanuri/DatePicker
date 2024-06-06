import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import "bootstrap/dist/css/bootstrap.min.css";

const DateFilter = () => {
    const [date, setDate] = useState(null);
    const [data] = useState([
        { id: 1, name: "John Doe", date: "2024/06/01" },
        { id: 2, name: "Jane Smith", date: "2024/06/05" },
        { id: 3, name: "Mike Johnson", date: "2024/06/06" }
    ]);

    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (date) {
            const formattedDate = formatDate(date);
            const filtered = data.filter(item => item.date === formattedDate);
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [date, data]);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = (`0${d.getMonth() + 1}`).slice(-2);
        const day = (`0${d.getDate()}`).slice(-2);
        return `${year}/${month}/${day}`;
    };

    return (
        <div className="text-center">
            <h1>Date Filter</h1>
            <DatePicker
                format="YYYY/MM/DD"
                value={date}
                onChange={setDate}
                className="mb-3"
            />
            <div className="mt-3 w-75 mx-auto">
                {
                    filteredData.length > 0 ? (
                        <table className="table table-bordered">
                            <thead>
                                <tr className="table-active">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <p className="mt-3 text-success">No Data Found</p>
                    )
                }
            </div>
        </div>
    );
};

export default DateFilter;
