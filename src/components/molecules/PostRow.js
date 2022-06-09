// Importing stylesheet
import './molecules.css';


// Importing node modules
import moment from 'moment';


// Component that is being exported
const PostCard = (props) => {
    return(
        <article className='post-row'>
            <div className='row-content'>
                <h3 className='row-font'>
                    {props.title}
                </h3>
                <h3 className='row-font'>
                    {moment(props.date).format('MM/DD/YYYY')}
                </h3>
            </div>
        </article>
    );
};


export default PostCard;