import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function HomeSection2() {
  return (
    <div className="section2-cover flex justify-center">
      <div className="section-flex flex justify-center w-[98%] pt-[50px] pb-[20px] border-y border-grey-600">
        <div className="section-item flex flex-row justify-between w-[90%]">
          <div className="cover-item w-[35%] py-[50px] border-r border-heroSubtitle">
            <h1 className="text-sm text-center text-heroSubtitle font-semibold">
              Why choose us?
            </h1>
            <br />
            <p className="text-xl text-center text-heroSubtitle">
              Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor
            </p>
            <div className="btn-cover flex justify-center w-full pt-[20px]">
              <Button className="w-[35%] capitalize text-heroSubtitle justify-between">
                <span>More about us </span>
                <ArrowForwardIcon className="text-heroSubtitle" />
              </Button>
            </div>
          </div>
          <div className="cover-item w-[35%] py-[50px] border-r border-heroSubtitle">
            <h1 className="text-sm text-center text-heroSubtitle font-semibold">
              Our collection
            </h1>
            <br />
            <p className="text-xl text-center text-heroSubtitle">
              Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor
            </p>
            <div className="btn-cover flex justify-center w-full pt-[20px]">
              <Button className="w-[35%] capitalize text-heroSubtitle justify-between">
                <span>See collections </span>
                <ArrowForwardIcon className="text-heroSubtitle" />
              </Button>
            </div>
          </div>
          <div className="cover-item w-[35%] py-[50px] border-r border-heroSubtitle">
            <h1 className="text-sm text-center text-heroSubtitle font-semibold">
              Custom jewelry
            </h1>
            <br />
            <p className="text-xl text-center text-heroSubtitle">
              Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor
            </p>
            <div className="btn-cover flex justify-center w-full pt-[20px]">
              <Button className="w-[35%] capitalize text-heroSubtitle justify-between">
                <span>More about us </span>
                <ArrowForwardIcon className="text-heroSubtitle" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
