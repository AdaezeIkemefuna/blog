import './Home.css';
import BlogDetails from './BlogDetails';
import useFetch from './useFetch';

const Home = () => {
    const { data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return ( 
            <>
            {error && { error }}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogDetails blogs={blogs} title="All Blogs"/>}
            </>
    )
};
export default Home;