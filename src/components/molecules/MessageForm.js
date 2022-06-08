// Importing stylesheet
import './molecules.css'


// Importing necessary components
import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';


// Helper functions needed by component
const submitComment = () => {
    return;
};


// Component that is being exported
const MessageForm = () => {
    return(
        <article className='message-card'>
            <form onSubmit={submitComment}>
                
            </form>
        </article>
    );
};


export default MessageForm;