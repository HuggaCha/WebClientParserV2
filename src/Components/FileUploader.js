import React, { Component } from 'react'; 
import XLSX from 'xlsx';
import readXlsxFile from 'read-excel-file';
import EpochToDateConverter from './EpochToDateConverter';

class FileUploader extends Component {

    constructor(props){
        super(props); 
        this.state = {
            data: '',
            
        }
    }

    onChange(e){
        let files = e.target.files; 
        console.warn("data file", files); 

        let reader = new FileReader(); 
        reader.readAsDataURL(files[0]);
        reader.onload = (e) =>{
            console.warn("document data", e.target.result);
            
            readXlsxFile(files[0]).then((rows) => {
                // `rows` is an array of rows
                // each row being an array of cells.
                console.log(rows);
                this.setState({
                    data: rows
                })
                
                // Retriving the rows only with positive values and storing
                //them in state's data property

                  var positiveRows = new Array();
                  var timeStamps = new Array(); 
                  for(var i = 13; i<= 108; i++){
                     if (rows[i][2] != 0){
                       positiveRows.push(rows[i]); 
                          this.setState({
                                data: positiveRows,
                            })
                         
                       //Math.round((new Date(positiveRows[i][0])).getTime() / 1000);


                        }
                  }
                   
                    
                  console.log("Positive value objects array",this.state.data);  

                

                  


                               
              })
            
        } 

            }

    render(){
        return (
            <div>
                <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
            </div>

        ); 

    }
}

export default FileUploader;
