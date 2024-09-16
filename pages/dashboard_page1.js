import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { Timeline } from "@components/Timeline";
import { MapSection } from "@components/MapSection";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import Script from "next/script";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <SEO title="RICE-MAP Dashboard" />
            {/* Load Leaflet first */}
            <Script
                src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
                strategy="beforeInteractive"
            />
            {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
            <Script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></Script>
            <MapSection></MapSection>
            <Script
                src="/js/Data_Yearly_country_1950_2016.js"
                // strategy="afterInteractive"
            />
            <Script
                src="/js/prov_yearly/SPI1_Yearly_thailand_1950_2016.js"
                // strategy="afterInteractive"
            />
            <Script
                src="/js/prov_yearly/SPI3_Yearly_thailand_1950_2016.js"
                // strategy="afterInteractive"
            />

            <Script
                src="/js/dashboard_map_update.js"
                // strategy="afterInteractive"
            />
            <Script
                src="/js/dashboard_timeline.js"
                // strategy="afterInteractive"
            />
            <Script
                src="/js/map.js"
                // strategy="afterInteractive"
            />
        </>

        // <Layout className="">

        // </Layout>
    );
}
