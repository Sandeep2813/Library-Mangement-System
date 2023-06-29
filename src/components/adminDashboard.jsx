import '../styles/adminDashboard.css'

const AdminDashboard = () => {
    return ( 
      <div className="admindashboard">
        <div className="head">
        <h1>Welcome to Admin Home page</h1>
        </div>
      <div className="admin_image">
      <div className="admin">
            <h2>Signature series:In the <br /> News with Fareed zakaria</h2>
            <p>By Erika Berlin on January 11, 2023</p>
            <p>Greenwich Library’s Signature Series is pleased <br /> to welcome bestselling author and journalist <br /> Fareed Zakaria to the Library’s Berkley  <br /> Theater on Thursday,…</p>
           <a href="">Take a look</a>
        </div>
      </div> <br /> <br /> <br /> <br /> <br /> <br /> <br />
       <div className="lib">
        <div className="lib_img">
          <h2>At the Library This January</h2>
          <p>By Erika Berlin on December 29, 2022</p>
          <p>Greenwich Library has a full schedule of (free!) <br /> enrichment events throughout January. Speak <br /> with a librarian or check the online…</p>
          <a href="">Take a look</a>
        </div>
       </div><br /> <br /> <br /> <br /> <br /> <br /> <br />
       <div className="admin_image">
      <div className="admin">
            <h2>Greenwich Library to Host<br /> an Evening of BroadWay Caberet</h2>
            <p>By Erika Berlin on January 12, 2023</p>
            <p>The Friends of Greenwich Library are pleased to <br /> host a special night of cabaret-style <br /> performances with How I Got to…</p>
           <a href="">Take a look</a>
        </div>
      </div>
      </div>
     );
}
 
export default AdminDashboard;