import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {store} from '../../store';
import {handleAddCommentAction} from '../../store/actions';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();
  const params = useParams<{id: string}>();

  const handleSubmitClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if(text.length >= 50 && rating) {
      dispatch(handleAddCommentAction({
        id: Number(params.id),
        comment: text,
        rating
      }));
      return;
    }
    toast.warn('Текст должен быть более 50 символов и рейтинг должен быть не пустым');
  };
  return (
    <form className='add-review__form'>
      <div className='rating'>
        <div className='rating__stars'>
          <input className='rating__input' onChange={()=> setRating(10)} id='star-10' type='radio' name='rating' value='10'/>
          <label className='rating__label' htmlFor='star-10'>Rating 10</label>

          <input className='rating__input' onChange={()=> setRating(9)} id='star-9' type='radio' name='rating' value='9'/>
          <label className='rating__label' htmlFor='star-9'>Rating 9</label>

          <input className='rating__input' onChange={()=> setRating(8)} id='star-8' type='radio' name='rating' value='8' checked/>
          <label className='rating__label' htmlFor='star-8'>Rating 8</label>

          <input className='rating__input' onChange={()=> setRating(7)} id='star-7' type='radio' name='rating' value='7'/>
          <label className='rating__label' htmlFor='star-7'>Rating 7</label>

          <input className='rating__input' onChange={()=> setRating(6)} id='star-6' type='radio' name='rating' value='6'/>
          <label className='rating__label' htmlFor='star-6'>Rating 6</label>

          <input className='rating__input' onChange={()=> setRating(5)} id='star-5' type='radio' name='rating' value='5'/>
          <label className='rating__label' htmlFor='star-5'>Rating 5</label>

          <input className='rating__input' onChange={()=> setRating(4)} id='star-4' type='radio' name='rating' value='4'/>
          <label className='rating__label' htmlFor='star-4'>Rating 4</label>

          <input className='rating__input' onChange={()=> setRating(3)}id='star-3' type='radio' name='rating' value='3'/>
          <label className='rating__label' htmlFor='star-3'>Rating 3</label>

          <input className='rating__input' id='star-2'onChange={()=> setRating(2)} type='radio' name='rating' value='2'/>
          <label className='rating__label' htmlFor='star-2'>Rating 2</label>

          <input className='rating__input' id='star-1' onChange={()=> setRating(1)}type='radio' name='rating' value='1'/>
          <label className='rating__label' htmlFor='star-1'>Rating 1</label>
        </div>
      </div>

      <div className='add-review__text'>
        <textarea
          onChange={(event) => {setText(event.target.value);}}
          value={text}
          className='add-review__textarea' name='review-text' id='review-text'
          placeholder='Review text'
        >
        </textarea>
        <div className='add-review__submit'>
          <button
            onClick={handleSubmitClick}
            className='add-review__btn' type='submit'
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
};
export default ReviewForm;
