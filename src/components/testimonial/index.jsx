import React from "react";
import {
    TECarousel,
} from "tw-elements-react";

import { Parallax } from 'react-parallax';

import background from "../../assets/hightlight/div2.jpg";

import Users1 from "../../assets/testimonial/94016534_1356715574526375_7710207295509086722_n.jpg"

import Users2 from "../../assets/testimonial/156191247_1896363097204220_5935104170325864076_n.jpg"

import Users3 from "../../assets/testimonial/76990119_490605831597876_6107029790777147392_n.jpg"

import Users4 from "../../assets/testimonial/20905554_346073829176586_6378616309663399936_a.jpg"

import Users5 from "../../assets/testimonial/34312524_377973602709664_1560141905289805824_n.jpg"

import Users6 from "../../assets/testimonial/28766721_1893863597571094_7894539602495537152_n.jpg"

import Users7 from "../../assets/testimonial/14676484_1201346333236680_7695244190724128768_a.jpg"

import Users8 from "../../assets/testimonial/39296787_2099563563638816_3350349128268775424_n.jpg"

import Users from "./users";

export default function Testimonial() {
    return (
        <>
            <TECarousel
                name="testimonial"
                showControls
                showIndicators
                crossfade
                className="w-full h-[100vh] lg:h-[80vh] flex justify-center items-center "

                ride="carousel"
                prevBtnIcon={
                    <>
                    </>
                }
                nextBtnIcon={
                    <>
                    </>
                }
            >
                <Parallax blur={2} bgImage={background} bgImageAlt="background testimonial" strength={300} className="w-full h-[100vh] lg:h-[80vh]" >
                    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']" style={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        backgroundBlendMode: "multiply",
                    }}>

                        <Users id={1} usersImg={Users1} paragraf={`"Solusi di tanggal tua, tapi masih ingin menikmati mie? Selalu datang ke Mie Gacoan! Meskipun harganya terjangkau, rasanya tidak kalah dengan yang mahal. Yuk, buktikan sendiri! Datang lapar, pulang bahagia. Kenapa bisa sebahagia itu? Karena selain makanan dan minumannya yang enak, harga Mie Gacoan ramah di kantong. Ngga ngerti lagi bisa seseneng itu tiap kali makan di Mie Gacoan. Rasanya tuh... sesuatuuu banget!! Wenak poll pengen kesana lagi next time. Enak parah. Tapi pedesnya ga tahan. Dinsumnya juga... Perfect pengen kesitu terus karyawannya juga... Ketagihaaan!!! Pengen dateng lagi dan lagi dan lagi!!"`} />

                        <Users id={2} usersImg={Users2} paragraf={`"Datang lapar, pulang bahagia. Kenapa bisa sebahagia itu? Karena selain makanan dan minumannya yang enak, harga Mie Gacoan ramah di kantong. Ngga ngerti lagi bisa seseneng itu tiap kali makan di Mie Gacoan. Rasanya tuh... sesuatuuu banget!! Wenak poll pengen kesana lagi next time. Enak parah. Tapi pedesnya ga tahan. Dinsumnya juga... Perfect pengen kesitu terus karyawannya juga... Ketagihaaan!!! Pengen dateng lagi dan lagi dan lagi!!"`} className={"opacity-0"} />

                        <Users id={3} usersImg={Users3} paragraf={`"Datanglah dengan perut kosong dan pulanglah dengan senyum kebahagiaan yang sulit terhapus. Di Mie Gacoan, pengalaman makan tidak sekadar tentang rasa yang lezat, tetapi juga tentang harga yang ramah di kantong. Tiap suapan menghadirkan kelezatan yang menggetarkan lidah dan membuatmu ingin kembali lagi. Rasakan sendiri kebahagiaan itu di Mie Gacoan!"`} className={"opacity-0"} />

                        <Users id={4} usersImg={Users4} paragraf={`"Wenak polll 😍😍 pengen kesana lagiii next time. Enak parahhhh. Tapi pedesnya ga tahaaaannn 😭😔. Dinsumnya juga... Perfect 👌 pengennya kesitu terus 😘 karyawannya juga... Ketagihaaaan!!! Pengen dateng lagi lagi dan lagi!!!! 🥘 🍗"`} className={"opacity-0"} />

                        <Users id={5} usersImg={Users5} paragraf={`"Enak parahhhh. Tapi pedesnya ga tahaaaannn 😭😔. Dinsumnya juga... Namun, setiap suapan tetap mengundang untuk kembali mencicipi. Perfect 👌 pengennya kesitu terus 😘 karyawannya juga... Ketagihaaaan!!! Pengen dateng lagi lagi dan lagi!!!! 🥘 🍗"`} className={"opacity-0"} />

                        <Users id={6} usersImg={Users6} paragraf={`"Perfect 👌 pengennya kesitu terus 😘 karyawannya juga... Tetap membuat pengunjung ingin kembali lagi dan lagi untuk menikmati suasana yang sempurna dan keramahan para karyawan."`} className={"opacity-0"} />

                        <Users id={7} usersImg={Users7} paragraf={`"Datanglah dengan perut kosong, dan pulanglah dengan senyum kebahagiaan yang sulit untuk terhapus. Kenapa bisa sebahagia itu? Karena di Mie Gacoan, kita tidak hanya menikmati makanan dan minuman yang lezat, tetapi juga merasakan kantong yang tidak terlalu terbebani. Harga-harga yang ramah di kantong membuat setiap kunjungan menjadi lebih berarti dan menggembirakan. Jadi, jangan ragu untuk merasakan kenikmatan yang sejati di Mie Gacoan!"`} className={"opacity-0"} />

                        <Users id={8} usersImg={Users8} paragraf={`"Mienya enak beda dr yg lain, varian makanan dan minumannya juga oke. Selain itu, pilihan menu yang beragam dan minuman yang segar membuat Mie Gacoan menjadi tempat yang selalu dinanti untuk dinikmati kapan pun."`} className={"opacity-0"} />
                    </div>
                </Parallax>
            </TECarousel>
        </>
    );
}
