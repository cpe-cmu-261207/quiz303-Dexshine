const Posts = () => {
    return (
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/myprofile.jpg"></img>
            <span className='font-semibold text-lg'>Nattapon Tancho</span>
          </div>

          {/* status message */}
          <p>Quiz ยากกว่าที่คิด #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>207 คน</p>
          </div>

        </div>
    )
}
export default Posts