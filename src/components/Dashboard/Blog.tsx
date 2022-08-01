import clsx from 'clsx'

export default function Blog() {
  const blogPosts = {
    posts: [
      {
        id: 6,
        title: 'useState VS useEffect',
        datetime: '2020-01-01',
        content: 'This is the content of the first blog post.',
      },
      {
        id: 1,
        title: 'How to display API objects to your webpage in React',
        content: 'This is the content of the first blog post.',
        datetime: '2020-01-01',
      },
      {
        id: 2,
        title: 'Creating a Search and A-Z filter in NEXT JS',
        content: 'This is the content of the first blog post.',
        datetime: '2020-01-01',
      },
      {
        id: 3,
        title: 'Multiple Event Handlers In A Form',
        content: 'This is the content of the first blog post.',
        datetime: '2020-01-01',
      },
      {
        id: 4,
        title: 'Lifting State',
        content: 'This is the content of the first blog post.',
        datetime: '2020-01-01',
      },
      {
        id: 5,
        title: 'Welcome to the blog',
        content: 'This is the content of the first blog post.',
        datetime: '2020-01-01',
      },
    ],
  }

  return (
    <div className="grid grid-cols-1 gap-4 shadow sticky top-10">
      <section aria-labelledby="section-2-title">
        <h2 className="sr-only" id="section-2-title">
          Section title
        </h2>
        <div className="rounded-lg overflow-hidden shadow bg-indigo-400">
          <div className="p-6 flex flex-col justify-center ">
            <h2 className="mb-5 text-gray-700">Blog posts</h2>
            <ul role="list" className="divide-y divide-gray-200 ">
              {blogPosts.posts.map((post) => {
                return (
                  <li
                    key={post.id}
                    className={clsx(
                      'first-of-type:rounded-t-md last-of-type:rounded-b-md relative bg-white py-5 px-4 hover:bg-gray-50',
                      'focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600'
                    )}
                  >
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1">
                        <a href="#" className="block focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {post.title}
                          </p>
                        </a>
                      </div>
                      <time
                        dateTime={post.datetime}
                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                      >
                        {post.datetime}
                      </time>
                    </div>
                    <div className="mt-1">
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {post.content}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
