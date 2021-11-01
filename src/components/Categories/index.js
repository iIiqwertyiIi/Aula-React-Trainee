const Categories = ({categories}) => {
    return(
        <>
            <ul>{categories.map((item, index) => (
                    <li key={index}>{item.name}</li>
            ))}</ul>
        </>
    )
}

export default Categories