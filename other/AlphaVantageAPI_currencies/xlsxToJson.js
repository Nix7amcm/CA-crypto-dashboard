// +++ save downloaded .csv file as .xlsx file in this folder (or ensure path is correct for XLSX.readFile)
// +++ npm install xlsx (I ran in project root folder where package,json is)
// +++ run node xlsxToJson.js in same folder as this file (update file names as required)
// +++ this will create or update 'result-digital-currencies.json' file

const XLSX = require( 'xlsx' );
const fs = require( 'fs' );

// _____ Read the Excel file ('path_to_file_location')
const workbook = XLSX.readFile( 'digital_currency_list.xlsx' );

// _____ Access the first sheet in the workbook
const sheetName = workbook.SheetNames[ 0 ];
const worksheet = workbook.Sheets[ sheetName ];

// _____ Convert the worksheet to JSON
const jsonData = XLSX.utils.sheet_to_json( worksheet, { header: 1 } );
const columnNames = jsonData[ 0 ];
const formattedData = jsonData.slice( 1 ).map( row =>
  Object.fromEntries( columnNames.map( ( columnName, index ) => [ columnName, row[ index ] ] ) )
);

// _____ Convert formattedData to JSON string
const jsonString = JSON.stringify( formattedData, null, 2 );

// _____ Write the JSON string to a file
fs.writeFileSync( 'result-digital-currencies.json', jsonString, 'utf-8' );

console.log( 'Excel data converted to JSON and saved as result-digital-currencies.json' );