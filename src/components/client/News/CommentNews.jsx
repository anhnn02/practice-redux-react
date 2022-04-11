import React from 'react'

const CommentNews = () => {
  return (
      <div className="">
          <div className="flex justify-between items-center mt-8 mb-4">
              <span className="text-gray-darker">
                  <i className="text-2xl text-gray-primary bi bi-chat-square-fill"></i> 10 comments
              </span>
              <button><i
                  className="text-2xl text-gray-primary bi bi-heart-fill trans-second hover:text-primary-color"></i></button>
          </div>
          <div className="">
              <div className="item-cmt flex justify-between items-center">
                  <img className="max-w-full w-10 h-10 object-cover rounded-full"
                      src="https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=1600x1200&vertical=top"
                      alt="" />
                  <div className="max-w-full w-full mx-2">
                      <div className="">
                          <span className="font-bold text-sm">Anh Nguyen</span> <span
                              className="text-gray-darker text-sm">1 - 1 - 2022</span>
                      </div>
                      <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip
                      </p>
                  </div>
                  <div className="text-center">
                      <button>
                          <i className="text-sm text-gray-primary bi bi-pencil-fill"></i>
                      </button>
                      <button>
                          <i className="text-gray-primary text-sm bi bi-trash-fill"></i>
                      </button>
                  </div>
              </div>
              <div className="item-cmt flex justify-between items-center">
                  <img className="max-w-full w-10 h-10 object-cover rounded-full"
                      src="https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=1600x1200&vertical=top"
                      alt="" />
                  <div className="max-w-full w-full mx-2">
                      <div className="">
                          <span className="font-bold text-sm">Anh Nguyen</span> <span
                              className="text-gray-darker text-sm">1 - 1 - 2022</span>
                      </div>
                      <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip
                      </p>
                  </div>
                  <div className="text-center">
                      <button>
                          <i className="text-sm text-gray-primary bi bi-pencil-fill"></i>
                      </button>
                      <button>
                          <i className="text-gray-primary text-sm bi bi-trash-fill"></i>
                      </button>
                  </div>
              </div>
              <div className="item-cmt flex justify-between items-center">
                  <img className="max-w-full w-10 h-10 object-cover rounded-full"
                      src="https://cdn.dribbble.com/users/508142/screenshots/15397516/media/3b2ca2e15104af8d2c6f65362c9f8a76.jpg?compress=1&resize=1600x1200&vertical=top"
                      alt="" />
                  <div className="max-w-full w-full mx-2">
                      <div className="">
                          <span className="font-bold text-sm">Anh Nguyen</span> <span
                              className="text-gray-darker text-sm">1 - 1 - 2022</span>
                      </div>
                      <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adip
                      </p>
                  </div>
                  <div className="text-center">
                      <button>
                          <i className="text-sm text-gray-primary bi bi-pencil-fill"></i>
                      </button>
                      <button>
                          <i className="text-gray-primary text-sm bi bi-trash-fill"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CommentNews