import styled from "styled-components"
import display1  from '../../Images/display5.jpg'


const DSectionCon = styled.div`
        display:flex;
        margin:6rem 2rem 4rem 2rem
`
const DisplayCon = styled.div`
       flex:1;
       height: 30rem;
`
const Image = styled.img`
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      box-shadow: 5px 5px 2px green;
    
`
const FormCon = styled.div`
     flex: 1;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;

`
const Form = styled.form`
    width: 80%;
`
const Field = styled.div`
     margin:2rem;
     display: flex;
     flex-direction: column;
`
const InputLabel= styled.label`
    text-align: start;
`
const Input = styled.input`
height: 2.3rem;

`
const Select = styled.select`
    height: 2.3rem;
`
const option = styled.option`
    
`


const ProfileDisplay =() =>{
    return (
          <DSectionCon>
              <DisplayCon>
                  <Image src={display1}  alt="profiles"/>
              </DisplayCon>
              <FormCon>
                  <Form>
                       <Field>
                       <InputLabel>Name</InputLabel>
                       <Select>
                       <option></option>
                       <option>Looking Forward to employ</option>
                       <option>Looking Forward to be Employed</option>
                       </Select>
                       </Field>
                       <Field>
                       <InputLabel>Name</InputLabel>
                       <Input type='text'/>
                       </Field>
                       <Field>
                       <InputLabel>Name</InputLabel>
                       <Input type='text'/>
                       </Field>
                       <Field>
                       <InputLabel>Name</InputLabel>
                       <Input type='text'/>
                       </Field>
                  </Form>
              </FormCon>
          </DSectionCon>
          
    )
}

export default ProfileDisplay

