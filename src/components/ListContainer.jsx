const ListContainer = ({data}) => {
    return (
    <>
        <section id="studentList"> 
            {data.map((student) => (
                <article key={student.id} class="list-item">
                    <h1>{student.name}</h1>
                    <p>{student.srcode}</p>
                    <p>{student.program}</p>
                    <button>Delete</button>
                </article>
            ))}
        </section>
    </>
    )
}

export default ListContainer;