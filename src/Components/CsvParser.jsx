import React, {useState} from 'react';
import Papa from "papaparse";
import CSV_data from "./opt_ins.csv";
import moment from 'moment';
import './styles/CsvParser.css';


const allowedExtensions = ["csv"];

const CsvParser = () =>{
  const today = new Date();
  const NewDate = moment();
  console.log(NewDate.format('h:mm:ss'));

  var time = today.getHours();
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {

    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          const date = JSON.stringify(d.meal_opt_in_created_date); //turning the time/ date element into a string
          const [dayHour, weirdHourAdd] = date.split('.'); //spliting it up two times till wejust get the hour
          const dayAndHour = JSON.stringify(dayHour);
          const [dat, time] = dayHour.split(' ');
          if(NewDate.format('h:mm:ss') >= time){ //comparing the current time using moment js to the time in the csv
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
          }
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    <div class="background">
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <p> If you have any question on the information below, please email us at vendors@heyParkday.com </p>
      <br />
      <table class="styled-table">
        <thead>
          <tr>
            {tableRows.map((rows, index) => { //maping through all the title names
                if(index !== 0){ // I know this isn't the cleanest bit of code, but using or statement's didn't work so I had to opt for nested if's
                  if(index !== 1){
                  if(index !== 5){
                     if(index !== 6){
                      return <th key={index}>{rows}</th>;
                     }
                   }
                 }
               }
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => { //maping through all the title names
                     if(i !== 0){ // I know this isn't the cleanest bit of code, but using or statement's didn't work so I had to opt for nested if's
                       if(i !== 1){ //they remove all the redundant/ not neccessary information such as service_id 
                       if(i !== 5){
                         if(i !== 6){
                          return <td key={i}>{val}</td>;
                         }
                       }
                     }
                   }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CsvParser;
