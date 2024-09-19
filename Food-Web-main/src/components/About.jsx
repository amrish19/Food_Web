import React from 'react'

function About() {
  return (
    <div>
  
  <div class="mx-auto max-w-7xl px-3">
    
    
  
    
    
    
    <div class="mt-1 flex items-center">
      <div class="space-y-6 md:w-3/4 ">
        <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          
        </div>
        <p class="text-3xl font-bold text-gray-900 md:text-4xl">
          Meet our team
        </p>
        <p class="max-w-4xl text-base text-gray-700 md:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div></div>
      </div>
    </div>
    <div class=" grid grid-cols-1 gap-4 gap-y-6 border-b  border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4 ">
      <div class="rounded-md border">
      <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
        <img
          src="https://erp.psit.ac.in/assets/img/Simages/32322.jpg"
          alt="Gabrielle Fernandez"
          class="h-[350px] w-full rounded-lg object-cover "

        />
        </a>
        <p class="mt-6 w-full px-2 text-xl text-center font-semibold text-gray-900">
         Aslaan Khan
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-center text-gray-500">
          Backend Dev
        </p>

        
      
        <a href="https://www.linkedin.com/in/aslaan-khan-1824a1272/">
        <button className=' ml-28 mb-4 bg-blue-300 rounded-xl w-16 h-8 '> Profile</button>
        </a>
        

      
        
      </div>
      <div class="rounded-md border">
        <img
          src="https://erp.psit.ac.in/assets/img/Simages/2213285.jpg"
          alt="Victória Silva"
          class="h-[350px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Aditya Singh
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
         Ui part 
        </p>
      </div>
      
      
      
      
      
     
    
      
    </div>
  </div>
  
</div>

  )
}

export default About