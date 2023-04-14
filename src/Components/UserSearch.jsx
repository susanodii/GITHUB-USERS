import React from 'react'

const UserSearch = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form>
          <div className="form-control">
            <div className="relative ml-16">
              <input
                type="text"
                className="w-full pr-40 bg-gray-700 input input-lg text-white   "
                placeholder="Search for a user"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg "
              >
                {' '}
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <button className="btn btn-ghost btn-lg text-white bg-gray-700">Clear</button>
      </div>
    </div>
  )
}

export default UserSearch
