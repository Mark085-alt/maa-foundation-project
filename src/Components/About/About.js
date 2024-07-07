import React from 'react'
const About = () => {
  return (<>

        {/* 1st section laptop view  */}

    <div dir="ltr" className=" max-[912px]:hidden  flex ps-[8.5%] h-screen bg-cover bg-center w-ful overflow-hidden"
      style={{ backgroundImage: `url('/images/Group42.jpg')` }}
    >
      <div className=' relative top-[38px] h-auto md:w-[380px] lg:w-[480px]  xl:w-[600px]' >

        <h1 className="font-Open Sans lg:text-[40px] xl:text-[52px] text-[#FA4040] font-semibold"  >Maa Foundation</h1>
      
        <p className=' lg:text-[18px] xl:text-[21px] mt-8 text-justify ' >

          <span className='text-[#FA4040] ' >MAA FOUNDATION </span>is a beacon of hope and empowerment, dedicated to nurturing the potential of orphaned children and fostering the advancement of women through education. With a firm belief in the transformative power of learning, MAA Foundation tirelessly works to bridge the educational gaps in society. Their initiatives range from career counseling and life skills education for students to parenting sessions aimed at guiding children's growth effectively. Embracing the spirit of selflessness and unconditional love, MAA Foundation collaborates with various stakeholders to amplify their impact, ensuring that every project is scalable and replicable, thus extending their reach to more communities in need. Their vision is not only to educate but to instill values and skills that will empower individuals to build a brighter, self-sustaining future.
        </p>

      </div>

    </div>


        {/* 1st section mobile view  */}
        <div className=' min-[913px]:hidden 
        h-[110vh] w-full  mb-3
        max-[767px]:h-[110vh]  
        max-[620px]:h-[115vh]  
        max-[556px]:h-[130vh]  
        max-[431px]:h-[130vh]  
        max-[415px]:h-[130vh] 
        max-[400px]:h-[142vh] 
        max-[376px]:h-[170vh]
        max-[344px]:h-[155vh]
        max-[328px]:h-[165vh]
        max-[266px]:h-[170vh]
        ' >
          
          <div className=' h-screen w-full flex flex-col items-center space-y-[35px] max-[540px]:space-y-[30px] ' >
            
          <h1 className=" max-[540px]:mt-4 max-[540px]:text-[43px]   mt-5  font-Open Sans text-[50px] text-[#FA4040] max-[391px]:text-[30px] font-semibold"  >Maa Foundation</h1>

          <img className=' h-[30%] w-[83%] ' src='/images/img1.jpg' alt='img' />


          <p className='  px-[7.5%]  text-[20px]  text-justify ' >

          <span className='text-[#FA4040]' >MAA FOUNDATION</span> is a beacon of hope and empowerment, dedicated to nurturing the potential of orphaned children and fostering the advancement of women through education. With a firm belief in the transformative power of learning, MAA Foundation tirelessly works to bridge the educational gaps in society. Their initiatives range from career counseling and life skills education for students, to parenting sessions aimed at guiding children's growth effectively. Embracing the spirit of selflessness and unconditional love, MAA Foundation collaborates with various stakeholders to amplify their impact, ensuring that every project is scalable and replicable, thus extending their reach to more communities in need. Their vision is not only to educate but to instill values and skills that will empower individuals to build a brighter, self-sustaining future.
        </p>


          </div>

        </div>



         {/* 2nd section laptop view view  */}

    <div dir="rtl" className=" max-[912px]:hidden   w-full ps-[8.5%] h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url('/images/page2.jpg')` }}
    >
      <div dir="ltr" className='  relative top-[38px] h-auto lg:w-[660px] xl:w-[840px]' >


        <h1 className=" text-right font-Open Sans lg:text-[40px] xl:text-[52px] text-[#FA4040] font-semibold"  >Founder & President</h1>
       
        <p className=' lg:text-[18px] xl:text-[21px] mt-8 text-justify ' >

          <span className='text-[#FA4040]' >Richa Bashistha</span>, a dedicated and compassionate individual, is known for her significant contributions to the Railway Ministry of India. However, her work extends beyond her professional commitments. She is the driving force behind the MAA Foundation, an organization that has been transforming lives and making a difference in society.
        </p>
       
        <p className=' lg:text-[18px] xl:text-[21px] mt-8 text-justify ' >The
          <span className='text-[#FA4040]' > Maa Foundation</span>,  under Richa's leadership, has been working tirelessly to uplift orphan children and empower women. The foundation offers resources that provide a career counselling program, personality development camps (life skill education), and many more self-improvement tools. For parents, they offer parenting sessions to nurture their children correctly.
        </p>
        
        <p className=' lg:text-[18px] xl:text-[21px]  mt-8 text-justify ' >Richa's vision for the MAA Foundation is not just about providing immediate help. It's about equipping individuals with the skills and knowledge they need to improve their own lives and contribute positively to society. Her work with the foundation reflects her belief in the power of education and the importance of providing equal opportunities for everyone.
        </p>

      </div>

    </div>



    {/* 2nd section mobile view  */}

    <div className=' min-[913px]:hidden min-h-auto w-full   ' >
          
          <div className=' flex flex-col items-center space-y-[31px] ' >
            
          <h1 className=" font-Open Sans max-[540px]:text-[43px] max-[400px]:text-[30px] max-[376px]:text-[27px]  text-[50px] text-[#FA4040] font-semibold"  >Founder & President</h1>

          <img className=' h-[40%] w-[60%] ' src='/images/img2.jpg' alt='img' />


        <p className='   px-[7.5%]  text-[20px] text-justify ' >
          <span className='text-[#FA4040]' >Richa Bashistha</span>, a dedicated and compassionate individual, is known for her significant contributions to the Railway Ministry of India. However, her work extends beyond her professional commitments. She is the driving force behind the MAA Foundation, an organization that has been transforming lives and making a difference in society.
        </p>
        <p className='  px-[7.5%]  text-[20px] text-justify ' >
          <span className='text-[#FA4040]' > Maa Foundation</span>,  under Richa's leadership, has been working tirelessly to uplift orphan children and empower women. The foundation offers resources that provide a career counselling program, personality development camps (life skill education), and many more self-improvement tools. For parents, they offer parenting sessions to nurture their children correctly.
        </p>
        <p className='  px-[7.5%]  text-[20px] text-justify ' >
          Richa's vision for the MAA Foundation is not just about providing immediate help. It's about equipping individuals with the skills and knowledge they need to improve their own lives and contribute positively to society. Her work with the foundation reflects her belief in the power of education and the importance of providing equal opportunities for everyone.
        </p>


          </div>

        </div>


  </>)
}

export default About 
