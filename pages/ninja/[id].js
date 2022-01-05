export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    
    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props:{detail: data}
    }
}

const Detail = ({detail}) => {
    return ( 
        <div>
            <h1>{detail.name}</h1>
            <p>{detail.email}</p>
            <p>{detail.website}</p>
            {/* <p>{ninja.address && ninja.address.city}</p> */}
        </div>
     );
}
 
export default Detail;