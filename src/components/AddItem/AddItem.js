/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItemHandler, getMotors } from '../../api/motors';

const AddItem = () => {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, reset,
  } = useForm();
  const [isItemAdded, setIsItemAdded] = useState(false);

  const onSubmit = (data) => {
    dispatch(AddItemHandler(data))
      .then(() => setIsItemAdded(true))
      .then(() => reset())
      .then(() => dispatch(getMotors()));
  };

  return (
    <div className="row">
      <div className="p-0 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mx-3">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" {...register('name')} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="description" placeholder="Enter Description" {...register('description')} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" {...register('image')} />
          <input type="number" className="form-control m-1" id="price" placeholder="Enter Price" {...register('price')} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
          {
            isItemAdded && (
              <div className="alert alert-success mt-3 ms-1" role="alert">
                MotorCycle Added Successfully
              </div>
            )
          }
        </form>

      </div>

    </div>
  );
};

export default AddItem;
