import Nav from '../nav/nav'
import LeftSection from './LeftSection'
import BlogPosts from './Blog'

import clsx from 'clsx'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Dashboard() {
  return (
    <div className="h-screen bg-gray-200">
      <Nav
        navigation={navigation}
        userNavigation={userNavigation}
        user={user}
      />

      <main className="-mt-24 pb-8 bg-gray-200 h-screen">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            <LeftSection />

            <BlogPosts />
          </div>
        </div>
      </main>
    </div>
  )
}
