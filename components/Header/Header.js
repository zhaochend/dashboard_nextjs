import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/nutritrack.svg"
                                alt="logo"
                                className="h-6 w-auto"
                                height="24"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="https://github.com/chrstnl-gh/nutritrack"
                            className="btn btn--secondary ml-4"
                        >
                            Get Template
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>

            {/* Import Independencies (from original project) */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            {/* <!-- link for leaflet --> */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            />
            {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
            <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            {/* <!-- link for font "noto sans" from google --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />
            {/* <!-- link for our style .css file --> */}
            <link rel="stylesheet" href="/dashboard.css" />
            <link rel="stylesheet" href="../leaflet_map/map.css" />
            <link rel="stylesheet" href="./dashboard_timeline.css" />
            <script src="https://registry.npmmirror.com/jquery/3.7.1/files/dist/jquery.min.js"></script>
        </header>
    );
};
