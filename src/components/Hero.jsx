import Button from './Button';

const Hero = (props) => {
  return (
    <section id='#hero'>
      <div className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
        <img src={props.logo} alt='logo' className='mx-auto my-16' />
        <h3 className='mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl'>
          A history of everything you copy
        </h3>
        <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on ally your devices.
        </p>
        <div className='flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4'>
          <Button bgColor='bg-strongCyan' operation={'Download for iOS'} />
          <Button bgColor='bg-lightBlue' operation={'Download for Mac'} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
