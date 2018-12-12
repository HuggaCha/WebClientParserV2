import React, { Component } from 'react'; 
import readXlsxFile from 'read-excel-file';
import moment from 'moment';



class FileUploader extends Component {

    constructor(props){
        super(props); 
        this.state = {
            data: '',
            epoch: ''
            
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
                  var epochValues = new Array();

                  for(var i = 13; i <= 108; i++){
                      
                     if (rows[i][2] !== 0){
                       positiveRows.push(rows[i][0]); 
                           this.setState({
                                data: positiveRows,
                            })
                            
                             }
                             
                             
                  }
                  if (this.state.data){
                        for(var i = 0; i < this.state.data.length; i++){

                            var ts = moment(JSON.stringify(this.state.data[i]), "D.M.YYYY HH:mm").valueOf();
                            var m = moment(ts);
                            var s = m.format("D.M.YYYY HH:mm");
                            epochValues.push(ts +" " + s);
          
                            this.setState({
                               epoch: epochValues,
                           })

                        }

                  }
                  
                  
               
                  console.log("Positive value objects array",this.state.data);  
                  console.log("Epoch values for positive values",this.state.epoch);  
                  
                  
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
