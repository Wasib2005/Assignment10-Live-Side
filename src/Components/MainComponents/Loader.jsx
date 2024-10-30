import { TrophySpin } from "react-loading-indicators";

const Loader = () => {
    return (
        <div className="max-h-[calc(100vh-96px-165px-70px)] md:min-h-[calc(100vh-96px-165px-100px)] p-5 m-auto w-[640px] md:w-[750px] lg:w-[1300px] flex items-center justify-center">
            <TrophySpin color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} size="large" text="" textColor="" />
        </div>
    );
};

export default Loader;