import { Button } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function HomeSection1() {
  return (
    <div className="section1-cover flex justify-center pt-[80px] pb-[50px]">
      <div className="section-flex flex justify-between w-[90%]">
        <div className="section-item w-[35%] h-[700px]">
          <img
            className="w-full h-full"
            src="/images/home/home-hero-img1.png"
            alt="hero-img1"
          />
        </div>
        <div className="section-item w-[35%] h-[700px] flex justify-center items-center">
          <div className="hero-mid-cover w-[93%] h-[300px]">
            <h1 className="text-6xl text-left font-semibold text-heroTitle">
              Radiance & Refinement
            </h1>
            <br />
            <p className="text-3xl text-heroSubtitle w-[450px]">
              Step into the world of Elysian Gems, where beauty meets
              craftsmanship
            </p>
            <div className="btn-cover-flex flex justify-start w-full pt-[20px]">
              <div className="btn-cover-item w-[28%]">
                <Button
                  className="w-full border border-heroSubtitle capitalize text-heroSubtitle justify-between"
                  variant="outlined"
                >
                  <span>Discover </span>
                  <ArrowForwardIcon className="text-heroSubtitle" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-item w-[30%] h-[700px]">
          <img
            className="w-full h-full"
            src="/images/home/home-hero-img2.png"
            alt="hero-img1"
          />
        </div>
      </div>
    </div>
  )
}
