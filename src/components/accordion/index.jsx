import Address from "./alamat";
import Loction from "./loction";

export default function AccordionFlush() {
    return (
        <>
            <div className="w-full bg-slate-950 py-20 px-3">
                <div name="outlets" className="max-w-[66rem] mx-auto">
                    <p className='text-2xl md:text-4xl text-center w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]'
                        name="outlets">
                        OUTLETS
                    </p>
                    <p className='md:text-2xl w-full text-center font-semibold text-slate-600 mb-5'>
                        "Temukan kelezatan yang tiada duanya di Mie Gacoan, destinasi kuliner yang wajib Anda kunjungi! Yuk, buktikan sendiri nikmatnya!"
                    </p>
                    <Address nameAddress={"MALANG"} location={"malang"} >
                        <Loction locationToko={"KENDALSARI"} toko={"Jl. Kendalsari Barat No. 18 Tulusrejo, Lowokwaru"} href={"https://www.google.com/maps/dir//-7.943492,112.621676/@-8.8121807,112.0390804,7z?entry=ttu"} />

                        <Loction locationToko={"JL. JAKARTA"} toko={"Jl Jakarta No. 16 Sumbersari, Lowokwaru"} href={"https://www.google.com/maps/place/Mie+Gacoan+Jl.+Jakarta/@-7.9628093,112.6229121,18.57z/data=!4m6!3m5!1s0x2dd6296dc886eb2b:0x9155f320e6f9cc0c!8m2!3d-7.9629116!4d112.6237069!16s%2Fg%2F11v02w5rcb?entry=ttu"} />

                        <Loction locationToko={"CILIWUNG"} toko={"Jl. Ciliwung No. 55 Purwantoro, Blimbing"} href={"https://www.google.com/maps/dir//Jl.+Ciliwung+No.55g,+Keduyo,+Purwantoro,+Kec.+Blimbing,+Kota+Malang,+Jawa+Timur+65122/@-7.9539977,112.6432146,17.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd629f4b0faaf07:0xf9e62073ae14c41d!2m2!1d112.6439414!2d-7.9539725?entry=ttu"} />

                        <Loction locationToko={"STASIUN"} toko={"Jl. Ronggowarsito, Klojen"} href={"https://www.google.com/maps/dir//Klojen,+Kec.+Klojen,+Kota+Malang,+Jawa+Timur/@-7.9759071,112.5537883,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd629b60b7d6d1b:0x11c797e4f7ea9e41!2m2!1d112.6361902!2d-7.9759152?entry=ttu"} />

                        <Loction locationToko={"SUKUN"} toko={"Jl. S. Supriyadi No. 74A, Sukun"} href={"https://www.google.com/maps/place/Mie+Gacoan+Sukun/@-7.998215,112.6160324,17z/data=!3m1!4b1!4m6!3m5!1s0x2e78833db8f86e79:0xf9530d21e7e657f9!8m2!3d-7.998215!4d112.6186073!16s%2Fg%2F11kpdxkkb3?entry=ttu"} />

                        <Loction locationToko={"SINGOSARI"} toko={"Jl. Raya Mondoroko No.123a, Pangetan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Singosari+Kab.+Malang/@-7.9001902,112.6601754,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd62b7894907899:0xb702cbaf429d0c2a!8m2!3d-7.9001902!4d112.6627503!16s%2Fg%2F11t_k3p1bf?entry=ttu"} />

                    </Address>

                    <Address nameAddress={"SURABAYA"} location={"surabaya"} >
                        <Loction locationToko={"AMBENGAN"} toko={"Jl. Ambengan No. 51 Ketabang, Genteng"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+Ambengan/@-7.2557638,112.7465751,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7f99dc5eb54a5:0xa3b192295a982276!8m2!3d-7.2557638!4d112.74915!16s%2Fg%2F11t_v8mgn2?entry=ttu"} />

                        <Loction locationToko={"WIYUNG"} toko={"Jl. Raya Menganti No.51, Babatan, Kec. Wiyung"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+Wiyung/@-7.3111971,112.6806393,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fd48abc58c05:0x3351e2ea6611996d!8m2!3d-7.3111971!4d112.6832142!16s%2Fg%2F11t5th2c60?hl=id&entry=ttu"} />

                        <Loction locationToko={"MANYAR"} toko={"Jl. Manyar Kertoarjo III, Mulyorejo"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+Manyar+Surabaya/@-7.2811203,112.7704847,16z/data=!4m6!3m5!1s0x2dd7fb18849c3e0d:0xf4cb0433dfff1944!8m2!3d-7.2811363!4d112.77174!16s%2Fg%2F11stq4l6_j?entry=ttu"} />

                        <Loction locationToko={"MERR"} toko={"Jl. Dr. Ir Soekarno, Penjaringan Sari, Rungkut"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+MERR+Surabaya/@-7.3197606,112.7785742,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb6a94c3e691:0x9962d6387bd34263!8m2!3d-7.3197606!4d112.7811491!16s%2Fg%2F11t_v95sbd?hl=id&entry=ttu"} />

                        <Loction locationToko={"MARGOREJO"} toko={"Jl. Margorejo Indah A/96, Wonocolo"} href={"https://www.google.com/maps?sca_esv=2e1e5fac6755c7bb&rlz=1C1PNKB_enID1085ID1085&output=search&q=Jl.+Margorejo+Indah+A/96,+Wonocolo+gacoan&source=lnms&entry=mc"} />

                        <Loction locationToko={"MAYJEN"} toko={"Jl. Mayjen Sungkono, Dukuh Pakis"} href={"https://www.google.com/maps/place/Mie+Gacoan+Mayjen+Sungkono/@-7.3007678,112.7140169,13z/data=!4m6!3m5!1s0x2dd7fdbff3664a37:0x16be406b363f2b4c!8m2!3d-7.2899928!4d112.7132122!16s%2Fg%2F11t61clzxc?entry=ttu"} />

                        <Loction locationToko={"KENJERAN"} toko={"Jl. Kenjeran No.361, Gading, Kec. Tambaksari"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+Kenjeran/@-7.2452446,112.758647,15z/data=!4m10!1m2!2m1!1sJl.+Kenjeran+No.361,+Gading,+Kec.+Tambaksari+gacoan!3m6!1s0x2dd7f9330743b223:0xe844d4c11904e37a!8m2!3d-7.2464019!4d112.775356!15sCjNKbC4gS2VuamVyYW4gTm8uMzYxLCBHYWRpbmcsIEtlYy4gVGFtYmFrc2FyaSBnYWNvYW5aMSIvamwga2VuamVyYW4gbm8gMzYxIGdhZGluZyBrZWMgdGFtYmFrc2FyaSBnYWNvYW6SAQtub29kbGVfc2hvcJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSYU1YVmhOemwzUlJBQuABAA!16s%2Fg%2F11t_t65hmj?entry=ttu"} />

                        <Loction locationToko={"AHMAD YANI"} toko={"Jl. Ahmad Yani 174, Gayungan"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+Ahmad+Yani/@-7.3308295,112.7278097,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb2991dc0d9f:0xc85143b5f8e337e8!8m2!3d-7.3308295!4d112.7303846!16s%2Fg%2F11svdl614c?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"YOGYAKARTA"} location={"ygyakarta"} >
                        <Loction locationToko={"COLOMBO"} toko={"Jl. Colombo Baru No. 1A Caturtunggal, Sleman"} href={"https://www.google.com/maps/place/Mie+Gacoan+Colombo/@-7.7640889,110.3075851,11z/data=!4m6!3m5!1s0x2e7a597d8f8616e3:0x555c3aeb47c32b57!8m2!3d-7.7775745!4d110.3848603!16s%2Fg%2F11fkdqv3ds?entry=ttu"} />

                        <Loction locationToko={"KOTA BARU"} toko={"Jl. Krasak Timur No.13, Kotabaru, Kec. Gondokusuman"} href={"https://www.google.com/maps/place/Mie+Gacoan+Kotabaru/@-7.7885357,110.3725783,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5930d6b7875f:0x6330d678abba8199!8m2!3d-7.7885357!4d110.3751532!16s%2Fg%2F11jbnqcthc?entry=ttu"} />

                        <Loction locationToko={"GODEAN"} toko={"Jl. Ngapak Kenteng Gamping, Sleman"} href={"https://www.google.com/maps/place/MIE+GACOAN+JOGJA+-+GODEAN/@-7.7783352,110.335103,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a590911fd37e1:0x4d86403679c3c577!8m2!3d-7.7783352!4d110.3376779!16s%2Fg%2F11mfb1c0sf?entry=ttu"} />

                        <Loction locationToko={"TAMAN SISWA"} toko={"Jl. Taman Siswa No. 27 Wirogunan, Mergangsan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Taman+Siswa/@-7.8046056,110.3759155,17.18z/data=!4m10!1m2!2m1!1sJl.+Taman+Siswa+No.+27+Wirogunan,+Mergangsan+mie+gacoan!3m6!1s0x2e7a5750c0bbda53:0xee6e45d756945c1e!8m2!3d-7.8046117!4d110.3782201!15sCjdKbC4gVGFtYW4gU2lzd2EgTm8uIDI3IFdpcm9ndW5hbiwgTWVyZ2FuZ3NhbiBtaWUgZ2Fjb2FuIgOIAQFaNiI0amwgdGFtYW4gc2lzd2Egbm8gMjcgd2lyb2d1bmFuIG1lcmdhbmdzYW4gbWllIGdhY29hbpIBC25vb2RsZV9zaG9w4AEA!16s%2Fg%2F11fm15nlvy?entry=ttu"} />

                        <Loction locationToko={"BABARSARI"} toko={"Jl. Ruko Raflesia B5 - B6 Babarsari, Sleman"} href={"https://www.google.com/maps/place/Ruko+Rafflesia,+Jl.+Babarsari+A+No.10,+Kledokan,+Caturtunggal,+Kec.+Depok,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55281/@-7.7743645,110.3937668,15z/data=!3m1!4b1!4m10!1m2!2m1!1sjl.+ruko+raflesia+b5+-+b6+babarsari+sleman+mie+gacoan!3m6!1s0x2e7a59ed3d77de1b:0x41e37326c41b31e0!8m2!3d-7.7743862!4d110.4122209!15sCjVqbC4gcnVrbyByYWZsZXNpYSBiNSAtIGI2IGJhYmFyc2FyaSBzbGVtYW4gbWllIGdhY29hbpIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F11h92kz8ff?entry=ttu"} />

                        <Loction locationToko={"MAGELANG"} toko={"Jl. Tidar No.44, Kemirirejo, Kec. Magelang Tengah"} href={"https://www.google.com/maps/place/Mie+Gacoan+Tidar+Magelang/@-7.4861027,110.2136133,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a8f3e1b810153:0x83ac4989e4147c3d!8m2!3d-7.4861027!4d110.2161882!16s%2Fg%2F11q1vpbr45?entry=ttu"} />

                        <Loction locationToko={"GEJAYAN"} toko={"Jl. Affandi No.9, Karang Gayam, Pelemkecut"} href={"https://www.google.com/maps/place/Mie+Gacoan+Gejayan/@-7.7637541,110.3907803,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5959d1aafeb9:0x1906e7ba074b3daa!8m2!3d-7.7637541!4d110.3933552!16s%2Fg%2F11q4h7jcvb?entry=ttu"} />

                        <Loction locationToko={"WIROBRAJAN"} toko={"Jl. Sonosewu, Patangpuluhan, Wirobrajan"} href={"https://www.google.com/maps/place/MIE+GACOAN+PATANGPULUHAN/@-7.811645,110.353861,14z/data=!4m6!3m5!1s0x2e7a579af5f48561:0x1456125f0b25e32e!8m2!3d-7.8075155!4d110.3470482!16s%2Fg%2F11sz2mk9jv?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"SEMARANG"} location={"semarang"} >
                        <Loction locationToko={"PETERONGAN"} toko={"Jl. Kompol Maksum 284, Peterongan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Peterongan/@-6.9974955,110.4313812,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708da5f5476407:0x3b4df6e676181448!8m2!3d-6.9974955!4d110.4339561!16s%2Fg%2F11fv3x8s81?entry=ttu"} />

                        <Loction locationToko={"TEMBALANG"} toko={"Tinjomoyo, Banyumanik, Semarang City"} href={"https://www.google.com/maps/place/Mie+Gacoan+Banyumanik/@-7.0650253,110.3973619,15z/data=!4m10!1m2!2m1!1stinjomoyo+banyumanik+semarang+city+mie+gacoan!3m6!1s0x2e708979c6fe49e9:0x578cc2b5d02532cd!8m2!3d-7.0650253!4d110.4153863!15sCi10aW5qb21veW8gYmFueXVtYW5payBzZW1hcmFuZyBjaXR5IG1pZSBnYWNvYW5aLyItdGluam9tb3lvIGJhbnl1bWFuaWsgc2VtYXJhbmcgY2l0eSBtaWUgZ2Fjb2FukgELbm9vZGxlX3Nob3DgAQA!16s%2Fg%2F11pv8rx7v3?entry=ttu"} />

                        <Loction locationToko={"NGALIYAN"} toko={"Jl. Prof. Hamka, Ngaliyan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Ngaliyan/@-7.001805,110.3390579,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708b517d05b815:0xceb1c83eb9f1c186!8m2!3d-7.001805!4d110.3416328!16s%2Fg%2F11nnvd226f?entry=ttu"} />

                        <Loction locationToko={"MAJAPAHIT"} toko={"Jl. Brigjen Sudiarto No. 326"} href={"https://www.google.com/maps/place/Mie+Gacoan+Majapahit/@-7.0084218,110.4463469,15z/data=!4m10!1m2!2m1!1sjl.+Brigjen+Sudiarto+No.+326+mie+gacoan!3m6!1s0x2e708cfa31450b8d:0x8be9502b76e795f1!8m2!3d-7.0084218!4d110.4643713!15sCidqbC4gQnJpZ2plbiBTdWRpYXJ0byBOby4gMzI2IG1pZSBnYWNvYW4iA4gBAVonIiVqbCBicmlnamVuIHN1ZGlhcnRvIG5vIDMyNiBtaWUgZ2Fjb2FukgELbm9vZGxlX3Nob3DgAQA!16s%2Fg%2F11rr13cwgx?entry=ttu"} />

                        <Loction locationToko={"PAMULARSIH"} toko={"Jl. Pamularsih Raya, Gisikdrono"} href={"https://www.google.com/maps/place/Mie+Gacoan+Pamularsih+Raya/@-6.9878383,110.3847122,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708bcf3886d307:0x525ecfbed30c9a94!8m2!3d-6.9878383!4d110.3872871!16s%2Fg%2F11s0v7k94h?entry=ttu"} />

                        <Loction locationToko={"BANYUMANIK"} toko={"Jl. Sukun Raya No. 30 Srondol Wetan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Banyumanik/@-7.0650253,110.4128114,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708979c6fe49e9:0x578cc2b5d02532cd!8m2!3d-7.0650253!4d110.4153863!16s%2Fg%2F11pv8rx7v3?entry=ttu"} />

                        <Loction locationToko={"VETERAN"} toko={"Jl. Veteran, Lempongsari, Gajahmungkur"} href={"https://www.google.com/maps/place/Mie+Gacoan+Veteran/@-6.9973579,110.4147656,17z/data=!3m1!4b1!4m6!3m5!1s0x2e708b337f77a761:0xcd7650dbc1ab0baa!8m2!3d-6.9973579!4d110.4173405!16s%2Fg%2F11rtw7bzp7?entry=ttu"} />

                    </Address>

                    <Address nameAddress={"SOLO"} location={"solo"} >
                        <Loction locationToko={"MAWAR"} toko={"Jl.Mawar No.7, Mangkubumen, Kec. Banjarsari"} href={"https://www.google.com/maps/place/Mie+Gacoan+Mawar+Solo/@-7.5626742,110.8058813,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a16817752e3af:0xac3b6027a40869d!8m2!3d-7.5626742!4d110.8084562!16s%2Fg%2F11dxl4gr6x?entry=ttu"} />

                        <Loction locationToko={"SOLO BARU"} toko={"Jl. IR.Soekarno Blok AC 1-2 Grogol, Solo Baru"} href={"https://www.google.com/maps/place/Mie+Gacoan+Solo+Baru/@-7.6077365,110.8091472,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a17a38f7ef3e9:0xae537ea28096acd3!8m2!3d-7.6077365!4d110.8117221!16s%2Fg%2F11h5ss3t0g?entry=ttu"} />

                        <Loction locationToko={"MANAHAN"} toko={"Jl.Menteri Supeno No.19, Manahan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Manahan/@-7.5530135,110.8021162,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a17519f3acd1b:0x65acc3e805b98216!8m2!3d-7.5530135!4d110.8046911!16s%2Fg%2F11k8dl_8d7?entry=ttu"} />

                        <Loction locationToko={"JEBRES"} toko={"Jl. Jend. Urip Sumoharjo No.197, Purwodiningratan"} href={"https://www.google.com/maps/place/Mie+Gacoan+Solo+Jebres/@-7.5618196,110.8332683,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a17aa1fefce9d:0x52be124381f6cebc!8m2!3d-7.5618196!4d110.8358432!16s%2Fg%2F11sxs8n8sz?entry=ttu"} />

                        <Loction locationToko={"KARTASURA"} toko={"Jl. Slamet Riyadi No.368, Dusun I, Makamhaji"} href={"https://www.google.com/maps/place/Mie+Gacoan+Kartasura/@-7.5660284,110.7709131,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a151ab5ee4155:0xdda07fc9388e16b7!8m2!3d-7.5660284!4d110.773488!16s%2Fg%2F11spmqhybz?entry=ttu"} />

                    </Address>

                    <Address nameAddress={"BANDUNG"} location={"bandung"} >
                        <Loction locationToko={"BANDUNG"} toko={"Jl. Dr. Setiabudi No.191B, Bandung Satu, Kec. Sukasari"} href={"https://www.google.com/maps/place/Mie+Gacoan+Setiabudi/@-6.86619,107.5913571,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e7d44f91ef2b:0xc4288bd98ca9f9de!8m2!3d-6.86619!4d107.593932!16s%2Fg%2F11r2jbyx_n?entry=ttu"} />

                        <Loction locationToko={"DIPATI UKUR"} toko={"Jl. Dipati Ukur 191"} href={"https://www.google.com/maps/place/Mie+Gacoan+Dipatiukur/@-6.8979639,107.6110263,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e64e3baa2263:0xf077716da8639355!8m2!3d-6.8979639!4d107.6136012!16s%2Fg%2F11t5qx_g8k?entry=ttu"} />

                        <Loction locationToko={"PASKAL"} toko={"Jl. Pasir Kaliki 181"} href={"https://www.google.com/maps/place/Mie+Gacoan+Paskal/@-6.901375,107.5946363,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e7b2940ce101:0xaf20291c843b7b9b!8m2!3d-6.901375!4d107.5972112!16s%2Fg%2F11rmyszfdy?entry=ttu"} />

                        <Loction locationToko={"DAGO"} toko={"Jl. Dago No.151a, Lb. Siliwangi, Kecamatan Coblong"} href={"https://www.google.com/maps/place/Mie+Gacoan+Dago/@-6.888856,107.6108681,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e71c3bc742ed:0xfeb5e24962249315!8m2!3d-6.888856!4d107.613443!16s%2Fg%2F11s_yvnhpp?entry=ttu"} />

                        <Loction locationToko={"GATSU"} toko={"Jl. Gatot Subroto Bandung"} href={"https://www.google.com/maps/place/MIE+GACOAN+-+GATSU+BANDUNG/@-6.9248915,107.6253688,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e776edc36e5d:0x8d417908d722b866!8m2!3d-6.9248915!4d107.6279437!16s%2Fg%2F11rtp1r2vh?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"CiREBON"} location={"cirebon"} >
                        <Loction locationToko={"CIREBON"} toko={"Jl. Tentara Pelajar No.87, Pekiringan, Kec. Kesambi"} href={"https://www.google.com/maps/place/Mie+Gacoan+Tentara+Pelajar./@-6.7144884,108.5502353,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee35ce5e9b711:0xa6ad4ce8b9c86405!8m2!3d-6.7144884!4d108.5528102!16s%2Fg%2F11ns39p3jx?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"BALI"} location={"bali"} >
                        <Loction locationToko={"GATSU"} toko={"Jl. Gatot Subroto Barat No.338, Dauh Puri Kaja, Kec. Denpasar Utara"} href={"https://www.google.com/maps/place/Mie+Gacoan+Gatsu+Tengah/@-8.6357166,115.2151566,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23fde2e80b387:0xdd072364b555746b!8m2!3d-8.6357166!4d115.2177315!16s%2Fg%2F11fsklpkpy?entry=ttu"} />

                        <Loction locationToko={"RENON"} toko={"Jl. Tantular Bar. No.83, Dangin Puri Klod"} href={"https://www.google.com/maps/place/Mie+Gacoan+Renon/@-8.6721201,115.1673444,13z/data=!4m10!1m2!2m1!1sJl.+Tantular+Bar.+No.83,+Dangin+Puri+Klod+mie+gacoan!3m6!1s0x2dd241d91ea208e5:0x941aae7c19515542!8m2!3d-8.6700572!4d115.2230165!15sCjRKbC4gVGFudHVsYXIgQmFyLiBOby44MywgRGFuZ2luIFB1cmkgS2xvZCBtaWUgZ2Fjb2FuIgOIAQFaMyIxamwgdGFudHVsYXIgYmFyIG5vIDgzIGRhbmdpbiBwdXJpIGtsb2QgbWllIGdhY29hbpIBC25vb2RsZV9zaG9w4AEA!16s%2Fg%2F11j0yh1sx3?entry=ttu"} />

                        <Loction locationToko={"PAKERISAN"} toko={"Jl. Tukad Pakerisan No.76, Panjer,Kec. Denpasar Sel"} href={"https://www.google.com/maps/place/Mie+Gacoan+Pakerisan/@-8.6883131,115.223625,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd241f71c22c97f:0xf9d0b149a6114504!8m2!3d-8.6883131!4d115.2261999!16s%2Fg%2F11ghncgsd1?entry=ttu"} />

                        <Loction locationToko={"TEUKU UMAR"} toko={"Jl. Teuku Umar Barat No.99, Pemecutan Klod, Kec. Denpasar Baru"} href={"https://www.google.com/maps/place/Mie+Gacoan+Teuku+Umar+Barat/@-8.6812338,115.1883137,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd241d8d8bb9871:0xd9eb478db25e1c47!8m2!3d-8.6812338!4d115.1908886!16s%2Fg%2F11hzsn4rg8?entry=ttu"} />

                        <Loction locationToko={"BATU BULAN"} toko={"Batubulan, Kec. Sukawati, Kabupaten Gianyar, Bali"} href={"https://www.google.com/maps/place/Mie+Gacoan+Batubulan/@-8.6265098,115.2554481,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f20e4ceee83:0xf5324a8e19d4fb9!8m2!3d-8.6265098!4d115.258023!16s%2Fg%2F11qn6bcg2k?entry=ttu"} />

                        <Loction locationToko={"DALUNG"} toko={"Jl. Raya Padang Luwih No.145, Dalung, Kec. Kuta Utara"} href={"https://www.google.com/maps/place/Mie+Gacoan+-+%E1%AC%AB%E1%AC%B6+%E1%AC%95%E1%AC%98%E1%AD%84%E1%AC%AF%E1%AC%A6%E1%AD%84%E1%AD%9F/@-8.630454,115.1732501,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23919d8280d8b:0x60b41a2a49990951!8m2!3d-8.630454!4d115.175825!16s%2Fg%2F11qm6l1dy3?entry=ttu"} />

                    </Address>

                    <Address nameAddress={"BOGOR"} location={"bogor"} >
                        <Loction locationToko={"BOGOR"} toko={"Jl. Raya Pajajaran No.63, RT.04/RW.13, Bantarjati"} href={"https://www.google.com/maps/place/Mie+Gacoan+Bogor/@-6.5832353,106.8032626,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c5b8f298740f:0x5c78b63307a54155!8m2!3d-6.5832353!4d106.8058375!16s%2Fg%2F11pzscknzw?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"DEPOK"} location={"depok"} >
                        <Loction locationToko={"DEPOK"} toko={"Jl. Margonda Raya No.23, Depok, Kec. Pancoran Mas"} href={"https://www.google.com/maps/place/Mie+Gacoan+Depok+-+Margonda/@-6.3969607,106.8188784,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69ebf9fd598a9d:0xe577d3ca1dbc2693!8m2!3d-6.3969607!4d106.8214533!16s%2Fg%2F11rr02gm8t?entry=ttu"} />
                    </Address>

                    <Address nameAddress={"JAKARTA"} location={"jakarta"} >
                        <Loction locationToko={"TEBET"} toko={"Jl. Tebet Raya No.35, RW.2, Tebet Timur, Kec. Tebet"} href={"https://www.google.com/maps/place/Mie+Gacoan+Tebet/@-6.228984,106.8512008,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3bac5043353:0xe51a4d1a0a728f8c!8m2!3d-6.228984!4d106.8537757!16s%2Fg%2F11t46gwg3h?entry=ttu"} />
                    </Address>
                </div>
            </div>

        </>
    );
}