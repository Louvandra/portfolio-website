

export const Footer = () => {
  return (
    <div className="Footer bg-gray-400 shadaw mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p py-4>&copy; Copyright by <span className="font-bold">Louvandra</span>
        </p>
        <div className="social-footer">
        <i className="ri-facebook-circle-fill text-2xl"></i>
        <i className="ri-twitter-fill text-2xl"></i>
        <i className="ri-youtube-fill text-2xl"></i>
        <i className="ri-linkedin-box-fill text-2xl"></i>
        <i className="ri-reddit-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}
