const AddPost = () => {

    return ( 
      <div className="addpost">
        <div className="add d-flex ml-4 ">
            <div className="img p-5 ">
            <img height={590} width={450} src="images/pan.jpg" alt="" />
            </div>
            
            <form action="">
            <div className="form text-center mt-5 border-bottom-1">
                <h2>ADD POST</h2>
    
            </div>
                <div className="author m-2">
                <label htmlFor="">Author</label><br />
                <input type="text" placeholder="Author" />
                </div><br />
                <div className="title m-2">
                    <label htmlFor="">Title</label><br />
                    <input type="text" placeholder="Title" />
                </div><br />
                 <div className="summary m-2">
                    <label htmlFor="">Summary</label><br />
                    <input type="text" placeholder="Summary of the post" />
                </div><br />
                <div className="image m-2">
                    <label htmlFor="">Image</label><br />
                    <input type="url" placeholder="Image of the post" />
                </div><br />
                <div className="location m-2">
                    <label htmlFor="">Location</label><br />
                    <input type="url" placeholder="Location of the post" />
                </div><br />
                <div className="btn">
                   <button class="btn btn">Submit Post</button>
                </div><br />

            </form>
        </div>

      </div>  
     );
}
 
export default AddPost;