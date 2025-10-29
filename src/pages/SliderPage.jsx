import React, { useState } from 'react'



const SliderPage = () => {
    const images= [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg'

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        let next = currentIndex + 1;
        if (next >= images.length) {
            next = 0;
        }
        setCurrentIndex(next);
    };

    const prevImage = () => {
        let prev = currentIndex - 1;
        if (prev < 0) {
            prev = images.length - 1;
        }
        setCurrentIndex(prev);
    };

  return (
    <div className='container'>
        <h2 className='text-center mb-4'>Слайдер жабонек</h2>
        <div className='card'>
            <div className='card-body'>
                <div className='position-relative'>
                    <img
                        src={images[currentIndex]}
                        alt={`Слайд ${currentIndex}`}
                        className='w-100 img-fluid'
                        style={{height: '500px', objectFit: 'none'}}/>
                    <button
                        className='btn btn-primary position-absolute top-50 start-0 translate-middle-y'
                        onClick={prevImage}
                        >
                            ◀
                        </button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default SliderPage