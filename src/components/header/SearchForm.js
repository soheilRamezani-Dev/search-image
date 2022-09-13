import './SearchForm.css'

const SearchForm = () => {
    return <section className="search-form d-flex justify-content-center p-4">
        <form className="form-inline" onSubmit={''}>
            <div className="form-group">
                <label> Search image from Unsplash : </label>
                    <input type='text' className="form-input" placeholder="search image" onChange={''} value ="" />
                
                <submit className="btn btn-success ms-2" >Search</submit>
            </div>
        </form>
    </section>
}
 
export default SearchForm;