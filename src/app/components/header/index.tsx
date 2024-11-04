import { AppBar, Toolbar } from '@mui/material'

export default function Header() {
  return (
    <div className="header-cover-flex">
      <AppBar position="fixed">
        <Toolbar className="min-h-0 bg-header flex justify-center pb-[13px] pt-[13px]">
          <div className="menu-item-flex flex flex-row justify-center items-center w-[98%]">
            <div className="menu-item1-flex flex justify-between w-[25%]">
              <div className="menu-item w-[70px] border-r border-neutral-50">
                Home
              </div>
              <div className="menu-item w-[80px] border-r border-neutral-50">
                About Us
              </div>
              <div className="menu-item w-[90px] border-r border-neutral-50">
                Collections
              </div>
              <div className="menu-item w-[25%]">Blogs</div>
            </div>
            <div className="menu-item2-flex flex justify-center w-[50%]">
              <div className="logo-cover-flex flex justify-center w-full">
                <div className="logo-item w-[30%]">
                  <img
                    className="verosa-logo w-full"
                    src="/images/verosa-logo.png"
                    alt="verosa img"
                  />
                </div>
              </div>
            </div>
            <div className="menu-item3-flex flex justify-between w-[25%]">
              <div className="menu-item">Contact Us</div>
              <div className="social-cover-flex">
                <div className="social1"></div>
                <div className="social1"></div>
                <div className="social1"></div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
