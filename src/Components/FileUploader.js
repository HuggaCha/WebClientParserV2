import React, { Component } from 'react'; 



class FileUploader extends Component {

    constructor(props){
        super(props); 
        this.state = {
            data: ''
        }
    }

    onChange(e){
        let files = e.target.files; 
        console.warn("data file", files); 

        let reader = new FileReader(); 
        reader.readAsDataURL(files[0]);
        reader.onload = (e) =>{
            console.warn("img data", e.target.result);
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
