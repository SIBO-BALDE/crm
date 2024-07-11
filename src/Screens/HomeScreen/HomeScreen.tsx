import React from 'react'
import Slider from '../../Components/UserComponent/Slides/Slide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge, faBriefcase, faBullseye, faCirclePlus, faCrosshairs, faFileVideo, faHandshake, faShieldHalved, faSignsPost, faUser } from '@fortawesome/free-solid-svg-icons'
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
         <div className=' ml-20 mr-20 content-about-section-content' id='content-about-section-content' style={{display:'grid', gridTemplateColumns:'30% 70%',justifyContent:'center', alignItems:'center'}}>
            <div  className='flex justify-center items-center ' id='content-about-section-content-image-content'>
                <div  style={{border:'3px dotted #00AFE5', borderRadius:'50%',height:'350px',width:'350px'}} className='px-2  py-2' id='content-about-section-content-image-content-1'>
                <img src="https://res.cloudinary.com/dtquwiu3x/image/upload/v1717521789/black-businessman-using-computer-laptop_b0xsgx.jpg" alt="" style={{borderRadius:'50%',width:'100%', height:'100%'}} id='content-about-section-content-image-content-2' />
                </div>
            </div>
            <div  className='ml-2' id='content-about-section-content-text-content'>
                <h1 className='font-bold text-2xl' style={{color:'#00afe5'}}><strong>UN LOGICIEL MICRO ENTREPRISE CLAIR ET COMPLET !</strong></h1>
                <p className='text-justify mt-10' id='content-about-section-content-text-content-text-para'>Vous êtes habitué en tant qu’auto-entrepreneur à jongler entre votre partie gestion professionnelle 
                    relation clients, prestations à réaliser et votre partie gestion micro entreprise pure devis, factures,
                     déclarations.
                     Voici ce que permet notre application pour toute la partie gestion qui est souvent fastidieuse !</p>
            </div>
         </div>
        </section>
        {/************************************************** * Section 1  début************************************ * **/}

        {/************************************************** * Section 2  début************************************ * **/}
        <section className='my-40 '>
            <div className='flex flex-wrap justify-center gap-y-10 lg:gap-x-10 md:gap-x-10 md:gap-y-52 sm:gap-y-96 container' id='content-one-card-one'>
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
            <div className='container mx-auto px-52'>
                <div>
                    <div>
                    <h1 className='text-center mb-6 text-3xl border-content-div-soulignement-text'><span></span> COMMENT FONCTIONNE NOTRE LOGICIEL DE GESTION ?</h1>
                    <div className='border-content-div-soulignement'></div>
                    </div>

                    {/* sd */}
                    <div>
                        <div className='mx-auto contain-main-card-obj'>
                            <div className='card-ojectif-main'>
                            <h5 className='card-ojectif-main-line-titre'>My feedback 360° favorise l’implication de tous</h5>
                            <div className='card-ojectif-main-line'></div>
                            <div className='mt-5'><p><strong>L’implication de tous les membres de l’équipe permet d’accélérer la réalisation de l’objectif quotidien.</strong></p></div>
                            <div className='content-flex-card-main-check'>
                            <div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Il est important de noter que lorsque les membres de l’équipe sont impliqués dans leur évaluation, le moral de chaque employé s’en trouve renforcé.</p></div>
                            </div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}> En tant qu’équipe, nous voulons tous travailler dans un climat amical, actif et déterminé à obtenir de meilleurs résultats.</p></div>
                            </div>
                            
                            
                            
                            </div>
                            <div >
                            <div className='content_animation1' >
                             <img src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1720609270/1_xvenic.png' alt='' className='content_animation1-image'/>
                            </div>

                            </div>

                            </div>
                            </div>
                            {/* seconde */}
                            <div className='card-ojectif-main'>
                            <h5 className='card-ojectif-main-line-titre2'>My feedback 360° encourage l’auto-développement</h5>
                            <div className='card-ojectif-main-line2'></div>
                            <div className='mt-5'><p><strong>Que ce soit dans la sphère privée ou professionnelle, l’envie de progresser doit venir de l’intérieur.</strong></p></div>
                            <div className='content-flex-card-main-check'>
                            <div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Le feedback à 360° degrés encourage les employés à s’auto-évaluer et à fixer leurs propres objectifs.</p></div>
                            </div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Ces objectifs sont des facteurs de motivation personnelle essentiels pour que les employés développent les valeurs et les compétences fondamentales du bureau.</p></div>
                            </div>
                            
                            
                            
                            </div>
                            <div >
                            <div className='content_animation1-2' >
                            <img src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1720609270/2_ytj5kv.png' alt='' className='content_animation1-image'/>
                            
                            </div>

                            </div>

                            </div>
                            </div>
                        </div>

                        <div className='container mt-4 mb-5 contain-main-card-obj'>
                            
                        <div className='card-ojectif-main'>
                            <h5 className='card-ojectif-main-line-titre2'>My feedback 360° renforce la confiance en soi</h5>
                        <div className='card-ojectif-main-line2'></div>
                        <div className='mt-5'><p><strong>L’art d’instaurer la confiance dans l’esprit d’un individu est une chose à laquelle les dirigeants influents devraient s’atteler.</strong></p></div>
                        <div className='content-flex-card-main-check'>
                        <div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Tout le monde apprécie un coup de pouce dans sa vie quotidienne.</p></div>
                            </div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Le retour d’information des employés  les encourage à penser par eux-mêmes.</p></div>
                            </div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Exprimer son opinion permet de renforcer la confiance   en soi.</p></div>
                            </div>
                        
                            
                            
                        </div>
                        <div >
                        <div className='content_animation1-3' >
                        <img src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1720609270/3_m6rs6f.png' alt='' className='content_animation1-image'/>
                           
                        </div>

                        </div>

                        </div>
                        </div>
                        {/* seconde */}
                        <div className='card-ojectif-main'>
                            <h5 className='card-ojectif-main-line-titre'>My feedback 360° favorise l’implication de tous</h5>
                            <div className='card-ojectif-main-line'></div>
                            <div className='mt-5'><p><strong>L’implication de tous les membres de l’équipe permet d’accélérer la réalisation de l’objectif quotidien.</strong></p></div>
                            <div className='content-flex-card-main-check'>
                            <div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}>Il est important de noter que lorsque les membres de l’équipe sont impliqués dans leur évaluation, le moral de chaque employé s’en trouve renforcé.</p></div>
                            </div>
                            <div className='d-flex  '>
                                            <div></div>
                                            <div><p style={{textAlign:'justify'}}> En tant qu’équipe, nous voulons tous travailler dans un climat amical, actif et déterminé à obtenir de meilleurs résultats.</p></div>
                            </div>
                            
                            
                            
                            </div>
                            <div >
                            <div className='content_animation1' >
                             <img src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1720733273/5_n7ocv7.png' alt='' className='content_animation1-image'/>
                            </div>

                            </div>

                            </div>
                            </div>
                        
                        
                        </div>
                    </div>
                </div>
            </div>

         </section>
         {/************************************************** * Section 3  fin************************************ * **/}


         {/************************************************** * Section 4  fin************************************ * **/}
         <section>
            <div className='container mx-auto px-52'>
                <div>
                        <h1 className='text-center mb-6 text-3xl border-content-div-soulignement-text'><span></span> Notre logiciel auto entrepreneur comprend également</h1>
                        <div className='border-content-div-soulignement'></div>
                </div>
            </div>
         </section>
         {/************************************************** * Section 4  fin************************************ * **/}
         </main>
    </div>
  )
}
