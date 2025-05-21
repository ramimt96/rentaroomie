import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How RentRoomie Works
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Find the perfect roommate and rental property in just a few simple steps
            </p>
          </div>
          
          <div className="py-12">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">1. Create Your Profile</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Sign up and build your profile. Tell us about your lifestyle, habits, and preferences as a roommate. 
                      Add details about your budget, desired locations, and what you're looking for in a living situation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">2. Browse & Match</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Swipe through potential roommates and properties that match your criteria. Our algorithm recommends 
                      compatible matches based on your preferences, lifestyle, and budget. Like a profile to show interest.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">3. Connect & Meet</h3>
                    <p className="mt-2 text-base text-gray-600">
                      When there's a mutual match, start chatting through our secure messaging system. Get to know 
                      each other, arrange property viewings, and discuss potential living arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-12">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">4. Visit Properties</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Schedule viewings of properties that interest you and your potential roommates. Our verified 
                      listings ensure you're seeing quality rentals that fit your shared requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">5. Finalize Arrangements</h3>
                    <p className="mt-2 text-base text-gray-600">
                      When you've found the perfect match and property, use our in-app tools to help finalize living 
                      arrangements. Set up roommate agreements, split expenses, and coordinate move-in logistics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="rounded-lg bg-purple-100 px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                      <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-gray-900">6. Move In & Enjoy</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Move in with your new roommates and start enjoying your new living situation! RentRoomie continues 
                      to provide support with resources for successful roommate relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-700 rounded-lg shadow-xl mt-12 mb-8">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to find your perfect match?</span>
                <span className="block text-purple-200">Start your roommate search today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50">
                    Sign up now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Is RentRoomie free to use?</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Basic matching and browsing is free. We offer premium features for a small monthly fee, including advanced filters, 
                    unlimited matches, and priority in search results.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">How do you verify roommates and properties?</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We verify all users through a comprehensive identity check. Properties are verified through our partnerships 
                    with trusted property managers and landlords.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">What if things don't work out with my roommate?</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We provide resources for conflict resolution and communication. Our premium users also have access to our 
                    roommate mediation service if needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">How do I pay rent through RentRoomie?</h3>
                  <p className="mt-2 text-base text-gray-600">
                    RentRoomie offers a secure payment platform that makes it easy to split and pay rent with roommates. 
                    Our system provides payment reminders and records for all transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 