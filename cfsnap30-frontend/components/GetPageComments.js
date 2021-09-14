function GetPageComments({data}) {
//const GetPageComments = ({data}) => {

    console.log({data})

    return (
        <div>
            <h4> comments _________________ </h4>
        </div>
    )
}

//const res = await fetch(`http://localhost:1337/comments?entry_contains=react-basics-usememo-usecallback-hooks`)
    //const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
export async function getServerSideProps(context){
    
    const res = await fetch(`${API_URL}/comments?_sort=date:DESC&_limit=10`)
    const data = await res.json()

    return { 
        props: { 
            data: data 
        } 
    }
  }

  export default GetPageComments