import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-purple-600">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/guides" className="text-base text-gray-600 hover:text-purple-600">
                  Roommate Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-600 hover:text-purple-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-purple-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://instagram.com/rentRoomie" className="text-base text-gray-600 hover:text-purple-600">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-base text-gray-500">&copy; {new Date().getFullYear()} RentRoomie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 