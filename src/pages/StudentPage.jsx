import { useState } from 'react';
import HeaderContainer from '../components/HeaderContainer';
import FormContainer from '../components/FormContainer';
import ListContainer from '../components/ListContainer';


const StudentPage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch("http://127.0.0.1:3000/student/all");
      
        if(!response.ok){
            throw new Error(response.status);
        }

        const data = response.json();

        return data;
    }

    getData().then((result) => {
        setData(result);
    }).catch((e) => {
        console.log(e.message)
    });


    return (
    <>
      <HeaderContainer />
      <FormContainer />
      <ListContainer data={data}/>
    </>
  )
}

export default StudentPage;