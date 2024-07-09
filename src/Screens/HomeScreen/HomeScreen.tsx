import React from 'react'
import Slider from '../../Components/UserComponent/Slides/Slide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faShieldHalved, faUser } from '@fortawesome/free-solid-svg-icons'
import './HomeScreen.css'


export default function HomeScreen() {
  return (
    <div>
        <main>
            {/************************************************** * Carrousel début ************************************ * **/}

         {/* <Slider/> */}
         {/************************************************** * Carroussel fin************************************ * **/}
        
        {/************************************************** * Section 1  début************************************ * **/}
        <section>
         <div className=' ml-20 mr-20' style={{display:'grid', gridTemplateColumns:'30% 70%',justifyContent:'center', alignItems:'center'}}>
            <div  className='flex justify-center items-center '>
                <div  style={{border:'3px dotted #00AFE5', borderRadius:'50%',height:'350px',width:'350px'}} className='px-2  py-2'>
                <img src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1717521789/black-businessman-using-computer-laptop_b0xsgx.jpg" alt="" style={{borderRadius:'50%',width:'100%', height:'100%'}} className=' ' />
                </div>
            </div>
            <div  className='ml-2'>
                <h1 className='font-bold text-2xl' style={{color:'#00afe5'}}><strong>UN LOGICIEL MICRO ENTREPRISE CLAIR ET COMPLET !</strong></h1>
                <p className='text-justify mt-10'>Vous êtes habitué en tant qu’auto-entrepreneur à jongler entre votre partie gestion professionnelle 
                    relation clients, prestations à réaliser et votre partie gestion micro entreprise pure devis, factures,
                     déclarations.
                     Voici ce que permet notre application pour toute la partie gestion qui est souvent fastidieuse !</p>
                </div>
         </div>
        </section>
        {/************************************************** * Section 1  début************************************ * **/}

        {/************************************************** * Section 2  début************************************ * **/}
        <section className='my-40'>
            <div className='flex flex-wrap justify-center gap-y-10 lg:gap-x-10 md:gap-x-10 md:gap-y-52 sm:gap-y-96' id='content-one-card-one'>
            <div className=''>
                <div className='w-80 h-96 shadow-lg border-t-8 rounded-3xl p-5' style={{borderTop:'10px solid  #00afe5', marginBottom: '-5rem'}}>
                    <div className='flex justify-center relative' style={{ top: '-5rem', marginBottom: '-3rem' }}>
                        <div className='rounded-full flex justify-center items-center' style={{backgroundColor:'#00afe5', width:'100px', height:'100px'}}>
                            <FontAwesomeIcon icon={faShieldHalved} className='text-5xl text-white' />
                            
                        </div>
                    </div>
                    <div>
                        <h3 className='text-center mb-6 text-2xl' style={{color:'#F0C24D'}}><strong>CALCUL DE VOS CHARGES SOCIALES</strong></h3>
                        <p>Plus d’inquiétude à avoir pour le calcul de vos cotisations sociales. En effet, nous vous indiquons précisément les montants à déclarer en fonction de vos factures.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='w-80 h-96 shadow-lg border-t-8 rounded-3xl p-5' style={{borderTop:'10px solid  #00afe5', marginBottom: '-5rem'}}>
                    <div className='flex justify-center relative' style={{ top: '-5rem', marginBottom: '-3rem' }}>
                        <div className='rounded-full flex justify-center items-center' style={{backgroundColor:'#00afe5', width:'100px', height:'100px'}}>
                            <FontAwesomeIcon icon={faUser} className='text-5xl text-white' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-center mb-6 text-2xl' style={{color:'#F0C24D'}}><strong>GAGNEZ DU TEMPS</strong></h3>
                        <p>En utilisant notre solution, vous économisez en moyenne 2 heures par semaine dans la gestion administrative de votre micro-entreprise. .</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='w-80 h-96 shadow-lg border-t-8 rounded-3xl p-5' style={{borderTop:'10px solid  #00afe5', marginBottom: '-5rem'}}>
                    <div className='flex justify-center relative' style={{ top: '-5rem', marginBottom: '-3rem' }}>
                        <div className='rounded-full flex justify-center items-center' style={{backgroundColor:'#00afe5', width:'100px', height:'100px'}}>
                            <FontAwesomeIcon icon={faCirclePlus} className='text-5xl text-white' />
                            
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center mb-6 text-2xl' style={{color:'#F0C24D'}}><strong >LES OBLIGATIONS LÉGALES</strong></h1>
                        <p>MicroDesk, sur la base de vos données, s’assure de la bonne tenue des différents registres que vous avez l’obligation de présenter en cas de contrôle fiscal.</p>
                    </div>
                </div>
            </div>

           

                
            </div>
        </section>
         {/************************************************* * Section 2  fin************************************ * **/}


         {/************************************************** * Section 3  début************************************ **/}
         <section>

         </section>
         {/************************************************** * Section 3  fin************************************ * **/}
         </main>
    </div>
  )
}
