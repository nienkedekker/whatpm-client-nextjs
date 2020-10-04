import { useState } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';

const CreateItem = (type) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          // todo
          Authorization: `Bearer ${Cookie.get('mevn-token')}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        Router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  return (
    <>
      <p>TODO</p>
    </>
  );
};

export default CreateItem;
