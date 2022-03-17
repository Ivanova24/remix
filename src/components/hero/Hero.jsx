import React from 'react';
import { HeroHeader, HeroNav, HeroLinks, HeroCtas } from "./HeroStyle";
import Button from "../../common/Button";

const Hero = () => {
    return (
        <HeroHeader>
            <HeroNav>
                <HeroLinks>
                    <a href="/">
                        <img src={"/assets/logo-remix-light.svg"} alt="Home Remix" />
                    </a>
                    <ul>
                        <a href="/"><li>Product</li></a>
                        <a href="/"><li>Pricing</li></a>
                        <a href="/"><li>For Sketch</li></a>
                    </ul>
                </HeroLinks>

                <HeroCtas>
                    {/* <HeroToggle>

                    </HeroToggle> */}
                    <Button primary>
                    Get Figma Plugin
                    </Button>
                </HeroCtas>
            </HeroNav>
        </HeroHeader>
    );
};

export default Hero;