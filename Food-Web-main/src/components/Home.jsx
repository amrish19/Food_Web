import React from 'react'

function Home() {
  return (
    <>

<div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span>
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="https://www.flaticon.com/free-icon/smartphone_4634868"
        >
          <path
            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
            fill="black"
          ></path>
        </svg>
      </span>
      <span class="font-bold">Food App</span>
    </div>
    <div class="hidden grow items-start lg:flex">
      <ul class="ml-12 inline-flex space-x-8">
       

        <li>
          <NavLink 
            to="/register"
            

            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800"}
          `
        
        }
          >
            Register New Resturant .. ? 
          </NavLink>


        </li>
        <li>

          
        <NavLink 
            to="/about"
            

            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800"}
          `
        
        }
          >
            About
          </NavLink>
        </li>



        <NavLink 
            to="/signin"
            

            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800"}
          `
        
        }
          >
            Sign-Up
          </NavLink>



          <NavLink 
            to="/login"
            

            className={({isActive})=>
          `
           ${isActive ? " text-red-600":" text-gray-800"}
          `
        
        }
          >
            Login
          </NavLink>



       

      </ul>
    </div>
    <div class="hidden lg:block">
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>
    </div>
    <div class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>





    <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 class="text-lg font-semibold">Resturants</h2>
      <p class="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
      </p>
    </div>
    <div>
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add new employee
      </button>
    </div>
  </div>
  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Employee</span>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Role
                </th>
                <th scope="col" class="relative px-4 py-3.5">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        John Doe
                      </div>
                      <div class="text-sm text-gray-700">john@devui.com</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">Front-end Developer</div>
                  <div class="text-sm text-gray-700">Engineering</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  Developer
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" class="text-gray-700">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        Jane Doe
                      </div>
                      <div class="text-sm text-gray-700">jane@devui.com</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">Back-end Developer</div>
                  <div class="text-sm text-gray-700">Engineering</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  CTO
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" class="text-gray-700">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</>

  )
}

export default Home