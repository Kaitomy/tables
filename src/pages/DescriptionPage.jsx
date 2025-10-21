import React from 'react'

const DescriptionPage = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-12'>
                <h2 className='text-center mb-5'>Мое описание</h2>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <div className='card shadow-lg border-0' style={{
                    borderRadius: '15px',
                    overflow: 'hidden'
                }}>
                    <div className='card-body p-0'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <div className='h-100 d-flex align-items-center justify-content-center' 
                                style={{background: 'linear-gradient(135deg, #7977dbff 0%, #9f65b9ff 100%)'}}>
                                    <div className='text-center p-4'>
                                        <img
                                            src="/images/2.jpg"
                                            alt="Жабонька"
                                            className='img-fluid rounded-circle shadow-lg mb-3'
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease'
                                                
                                            }}
                                            onMouseEnter={(event) => event.target.style.transform = 'scale(1.2)'}
                                            onMouseLeave={(event) => event.target.style.transform = 'scale(1)'}
                                        />
                                        <h4 className='text-white mb-0'>Образцова Ксения</h4>
                                        <p className='text-white'>Frontend, DevOps</p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-8'>
                                <div className='p-5'>
                                    <div className='mb-4'>
                                        <h3 className='text-primary mb-3'>
                                            Личная информация
                                        </h3>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <p className='mb-2'><b> Полное имя:</b> Образцова Ксения Сергеевна</p>
                                                <p className='mb-2'><b> Возраст:</b> 30 лет</p>
                                                <p className='mb-2'><b> Город:</b> Москва</p>

                                            </div>
                                            <div className='col-md-6'>
                                                <p className='mb-2'><b> Email:</b> k.s.obrazcova@mpt.ru</p>
                                                <p className='mb-2'><b> Телефон:</b> +7(999)999-99-99</p>
                                                <p className='mb-2'><b> Статус:</b> <span className='badge bg-warning'>В поиске работы</span> </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='text-warning mb-3'>
                                            Образование
                                        </h3>
                                        <div className='card bg-light'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>РЭУ им. Г.В.Плеханова</h5>
                                                <p className='card-text mb-1'>Информационные системы и программирование</p>
                                                <p className='card-text mb-1'>Прикладная информатика</p>
                                                <p className='card-text mb-1'>2016-2020</p>
                                                
                                                
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DescriptionPage