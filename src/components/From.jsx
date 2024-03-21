const From = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.namu.value);
        console.log(e.target.emu.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="namu" id="" /><br />
                <input type="email" name="emu" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default From;