import GoBackComponent from "../GoBack/goback";
import Navbar from "../Navbar/Navbar";
import DetailInfo from "./DetailInfo";
import { formatPopulation, formatArea } from "../../utils";
import {
    StyledLine,
    Section,
    DetailsContainer,
    ID,
    Name,
    DetailsWrapper,
    ImageContainer,
    Image,
} from "./StyledCountryDetail";
import Footer from "../Footer/Footer";

const pais = {
    name: {
        common: "Argentina",
        official: "Argentine Republic",
        nativeName: {
            grn: {
                official: "Argentine Republic",
                common: "Argentina",
            },
            spa: {
                official: "República Argentina",
                common: "Argentina",
            },
        },
    },
    tld: [".ar"],
    cca2: "AR",
    ccn3: "032",
    cca3: "ARG",
    cioc: "ARG",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
        ARS: {
            name: "Argentine peso",
            symbol: "$",
        },
    },
    idd: {
        root: "+5",
        suffixes: ["4"],
    },
    capital: ["Buenos Aires"],
    altSpellings: ["AR", "Argentine Republic", "República Argentina"],
    region: "Americas",
    subregion: "South America",
    languages: {
        grn: "Guaraní",
        spa: "Spanish",
    },
    translations: {
        ara: {
            official: "جمهورية الأرجنتين",
            common: "الأرجنتين",
        },
        ces: {
            official: "Argentinská republika",
            common: "Argentina",
        },
        cym: {
            official: "Gweriniaeth yr Ariannin",
            common: "Ariannin",
        },
        deu: {
            official: "Argentinische Republik",
            common: "Argentinien",
        },
        est: {
            official: "Argentina Vabariik",
            common: "Argentina",
        },
        fin: {
            official: "Argentiinan tasavalta",
            common: "Argentiina",
        },
        fra: {
            official: "République argentine",
            common: "Argentine",
        },
        hrv: {
            official: "Argentinski Republika",
            common: "Argentina",
        },
        hun: {
            official: "Argentin Köztársaság",
            common: "Argentína",
        },
        ita: {
            official: "Repubblica Argentina",
            common: "Argentina",
        },
        jpn: {
            official: "アルゼンチン共和国",
            common: "アルゼンチン",
        },
        kor: {
            official: "아르헨티나 공화국",
            common: "아르헨티나",
        },
        nld: {
            official: "Argentijnse Republiek",
            common: "Argentinië",
        },
        per: {
            official: "جمهوری آرژانتین",
            common: "آرژانتین",
        },
        pol: {
            official: "Republika Argentyńska",
            common: "Argentyna",
        },
        por: {
            official: "República Argentina",
            common: "Argentina",
        },
        rus: {
            official: "Аргентинская Республика",
            common: "Аргентина",
        },
        slk: {
            official: "Argentínska republika",
            common: "Argentína",
        },
        spa: {
            official: "República Argentina",
            common: "Argentina",
        },
        swe: {
            official: "Republiken Argentina",
            common: "Argentina",
        },
        urd: {
            official: "جمہوریہ ارجنٹائن",
            common: "ارجنٹائن",
        },
        zho: {
            official: "阿根廷共和国",
            common: "阿根廷",
        },
    },
    latlng: [-34, -64],
    landlocked: false,
    borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
    area: 2780400,
    demonyms: {
        eng: {
            f: "Argentine",
            m: "Argentine",
        },
        fra: {
            f: "Argentine",
            m: "Argentin",
        },
    },
    flag: "🇦🇷",
    maps: {
        googleMaps: "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
        openStreetMaps: "https://www.openstreetmap.org/relation/286393",
    },
    population: 45376763,
    gini: {
        2019: 42.9,
    },
    fifa: "ARG",
    car: {
        signs: ["RA"],
        side: "right",
    },
    timezones: ["UTC-03:00"],
    continents: ["South America"],
    flags: {
        png: "https://flagcdn.com/w320/ar.png",
        svg: "https://flagcdn.com/ar.svg",
    },
    coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/ar.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/ar.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
        latlng: [-34.58, -58.67],
    },
    postalCode: {
        format: "@####@@@",
        regex: "^([A-Z]\\d{4}[A-Z]{3})$",
    },
};

const CountryDetail = () => {
    return (
        <>
            <Navbar />
            <GoBackComponent />
            <StyledLine />
            <Section>
                <DetailsContainer>
                    <div>
                        <ID>{pais.cca3}</ID>
                        <Name>{pais.name.official}</Name>
                    </div>
                    <DetailsWrapper>
                        <DetailInfo itemName={"Continente:"} detail={pais.continents[0]} />
                        <DetailInfo itemName={"Capital:"} detail={pais.capital} />
                        {pais.subregion && (
                            <DetailInfo itemName={"Subregión:"} detail={pais.subregion} />
                        )}
                        {pais.area && (
                            <DetailInfo itemName={"Área:"} detail={formatArea(pais.area)} />
                        )}
                        <DetailInfo
                            itemName={"Población:"}
                            detail={formatPopulation(pais.population)}
                        />
                    </DetailsWrapper>
                </DetailsContainer>
                <ImageContainer>
                    <Image src={pais.flags.png} />
                </ImageContainer>
            </Section>
            <Footer />
        </>
    );
};

export default CountryDetail;