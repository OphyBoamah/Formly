import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className=' w-auto flex justify-center'>
        <div className='flex w-1/2'>
          <div className='bg-green-300 text-white flex-1  p-20'>
            <h3 className='text-4xl font-bold mb-4 text-center mt-8'>
              Welcome Back!
            </h3>
            <p className='text-xl text-center'>
              To register for our service, kindly provide the necessary details.
            </p>
          </div>
          <div className='flex w-1/2'>
            <div className='bg-gray-100 text-white text-center p-20'>
              <h2 className='font-bold text-4xl text-green-300 -mt-6 mb-6'>
                Create Account
              </h2>
              <form action='post'>
                <input
                  className='mb-3 text-black w-80 h-9 p-2'
                  type='text'
                  placeholder='Your first name'
                />
                <input
                  className='mb-3 text-black w-80 h-9 p-2'
                  type='text'
                  placeholder='Your last name'
                />
                <input
                  className='mb-3 text-black w-80 h-9 p-2'
                  type='email'
                  placeholder='Your email'
                />
                <input
                  className='mb-3 bg-white text-black w-80 h-9 p-2'
                  type='password'
                  placeholder='Your password'
                />

                <div className='flex justify-center'>
                  <button className='text-white px-4 py-2 mt-4 bg-green-300 '>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
