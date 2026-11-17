import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <div className="w-full min-h-[300px] bg-primary-100 py-6">
        <div className="w-5/6 mx-auto md:flex justify-between items-center text-center md:text-left ">
            <div className="w-full md:w-3/5 py-2">
                 <div
                className="bg-gray-500 w-[200px] m-auto md:m-0
            h-[80px] bg-cover bg-center bg-no-repeat border "
                style={{
                  mask: `url(${logo}) no-repeat center / contain`,
                  WebkitMask: `url(${logo})no-repeat center / contain`,
                }}>
              </div>
              <p className="text-xs py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex quos excepturi vero debitis sequi consequuntur officiis, dolorum deleniti nulla deserunt amet unde? Deserunt odio assumenda neque atque amet porro.</p>
              <h3 className="text-sm">Lorem ipsum dolor sit amet.</h3>

            </div>
            <div className="w-full md:w-1/6 mt-4 md:mt-15">
            <h2 className="text=sm">Link</h2>
            <p className="text-xs py-1">erfanBatorie@gmail.com</p>
            <p className="text-xs py-1">erfanBatorie@gmail.com</p>
            <p className="text-xs py-1">erfanBatorie@gmail.com</p>
            </div>
            <div className="w-full md:w-1/6  mt-4 md:mt-15">
            <h2 className="text=sm">contact us</h2>
            <p className="text-xs py-1">Lorem ipsum dolor sit amet.</p>
            <p className="text-xs py-1">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer