const FormContainer = () => {
    return (
    <>
        <section id="formContainer">
          <form id="studentForm">
            <div class="input-fields">
                <label for="name">Student name: </label>
                <input type="text" name="name" id="name"></input>
            </div>
            <div class="input-fields">
                <label for="program">Program: </label>
                <input type="text" name="program" id="program"></input>
            </div>
            <div>
                <button type="submit">Add Student</button>
            </div>
          </form>
        </section>
    </>
    )
}

export default FormContainer;