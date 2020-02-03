import React from "react";
import Img from "../common/components/Img";


class ImgComponent extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <div>
                    <a href="https://www.youtube.com/watch?v=RHBfeKNjcmQ">Видео</a>
                </div>
                <div>
                    1. Base image placeholder: <br/>
                    <Img/>
                </div>
                <div>
                    2. Image with alt and src: <br/>
                    <Img alt="very good img"
                         src="data:image/png;base64,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"/>
                </div>
                <div>
                    3. Base placeholder with 50x50, 100x100, 150x150 px: <br/>
                    <Img width="50" height="50"/>
                    <Img width="100" height="100"/>
                    <Img width="150" height="150"/>
                </div>
                <div>
                    4. Image with circle: <br/>
                    <Img circle/>
                </div>

            </div>
        );
    }
}

export default ImgComponent;