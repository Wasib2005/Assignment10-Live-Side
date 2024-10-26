import { Footer } from "flowbite-react";
const FooterSection = () => {
  return (
    <div className="bg-[#F3F4F6] min-w-[640px]">
      <Footer container className="bg-[#F3F4F6]">
        <div className="w-full text-center">
          <div className="w-full justify-around sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src="favicon.svg"
              alt="Flowbite Logo"
              name="Tourism Hub"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright by="Tourism Hub" year={2024} />
        </div>
      </Footer>
    </div>
  );
};

export default FooterSection;
