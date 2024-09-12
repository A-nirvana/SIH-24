export default function Footer() {
  return <footer>
    <div className=' bg-[#131313] text-[]'>
      <div className='flex flex-wrap justify-between py-8 px-8 md:px-16'>

        <div id="node" className="w-[40%] md:max-w-[15vw] text-sm text-[#AA9A9A]">
          <div className=' text-2xl font-semibold mb-6 text-white'>Home</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum tenetur assumenda. Maiores, cupiditate iste!</p>
        </div>
        <div id="node" className="w-[40%] md:max-w-[10vw] text-sm text-[#AA9A9A]">
          <div className=' text-2xl font-semibold mb-6 text-white'>About us</div>
          <ul>
            <li><a>Contact Us</a></li>
            <li><a>Blog</a></li>
            <li><a>Feedback</a></li>
            <li><a>Support</a></li>
          </ul>
        </div>
        <div className="w-[40%] md:max-w-[10vw] text-sm text-[#AA9A9A] mt-12 md:mt-0">
          <div className=' text-2xl font-semibold mb-6 text-white'>Services</div>
          <ul>
            <li><a>Download</a></li>
            <li><a>Safety</a></li>
            <li><a>Status</a></li>
            <li><a>App Directory</a></li>
          </ul>
        </div>
        <div className="w-[40%] md:max-w-[10vw] text-sm text-[#AA9A9A] mt-12 md:mt-0">
          <div className=' text-2xl font-semibold mb-6 text-white'>Policies</div>
          <ul>
            <li><a>Terms</a></li>
            <li><a>Privacy</a></li>
            <li><a>Cookie Settings</a></li>
            <li><a>Guidelines</a></li>
            <li><a>Acknowledgements</a></li>
            <li><a>Licenses</a></li>
          </ul>
        </div>
        <div className="text-center w-screen md:w-[20vw]">
          <div className="flex top-soc justify-between mt-12">
            <a data-track="twitter" href="" target="_blank" className="link-s w-inline-block">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg" loading="lazy" alt="Twitter" className="invert dark:invert-0 h-8" /></a>
            <a data-track="instagram" href="" target="_blank" className="link-s w-inline-block">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg" loading="lazy" alt="Instagram" className="invert dark:invert-0 h-8" /></a>
            <a data-track="facebook" href="" target="_blank" className="link-s w-inline-block">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg" loading="lazy" alt="Facebook" className="invert dark:invert-0 h-8" /></a>
            <a data-track="youtube" href="" target="_blank" className="link-s w-inline-block">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg" loading="lazy" alt="Youtube" className="invert dark:invert-0 h-8" /></a>
          </div>
          <p className="copyright mt-16">
            &copy; Scholarific {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>;
}
