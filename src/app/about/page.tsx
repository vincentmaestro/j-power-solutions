import Nav from "../components/nav";
import Footer from "../components/footer";
import CoreValues from "../components/core-values";
import Image from "next/image";
import YoutubeVideoPlayer from "../components/youtube-video-player";

export const metadata = {
    title: 'About',
    description: 'Etinpower is a minigrid developer focused on providing access to clean and reliable energy to unserved and underserved communities and creating industrialised hubs in West Africa. Our name is distinct and says what we are. "Etin" means &apos;power&apos; in the Edo language. EtinPower is therefore "Power Squared" or concentrated energy, hopefully reflecting our desire to totally impact and uplift our communities, harnessing the power of modern energy to propel them towards a brighter and more sustainable future.'
}

export default function About() {
    return(
        <div className="bg-gray-50">
            <Nav />

            <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-14 mt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-1">
                                Etinpower is a minigrid developer focused on providing access to clean and reliable energy to unserved and underserved communities and creating industrialised hubs in West Africa, commencing with Edo State.
                                <br />
                                <br />
                                Our name is distinct and says what we are. &quot;Etin&quot; means &apos;power&apos; in the Edo language. EtinPower is therefore &quot;Power Squared&quot; or concentrated energy, hopefully reflecting our desire to totally impact and uplift our communities, harnessing the power of modern energy to propel them towards a brighter and more sustainable future.
                                <br />
                                <br />
                                We provide electricity to vulnerable off-grid communities, while also providing opportunities for economic growth by facilitating productive use of energy through the use of appliances that will increase income, productivity, and standard of living of our customers and our communities.
                            </p>
                        </div>
                        <YoutubeVideoPlayer videoId="5oCpcDh7Uw8" />
                    </div>
                    <br />
                    <br />
                    <div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-1">
                            We provide electricity to vulnerable off-grid communities, while also providing opportunities for economic growth by facilitating productive use of energy through the use of appliances that will increase income, productivity, and standard of living of our customers and our communities.
                            <br />
                            <br />
                            Etinpower makes available the services that will enable people and communities to earn more income through training and knowledge sharing. We currently have minigrids in Edo state.
                            <br />
                            <br />
                            We plan to become a single point of contact for Solutions involving Renewable options for power. We enhance and synergize with research and development companies around the World to apply techniques which help in milking alternative power uses at an affordable cost.
                            <br />
                            <br />
                            Our work is rooted in the belief that access to modern energy is critical for achieving SDG 1 – zero poverty, productivity, and the overall well-being of communities, as energy impacts all areas of life. We are working towards making universal access to energy services (SDG 7) a reality, by giving our customers affordable, reliable, sustainable, and clean modern energy. This drives all we do at EtinPower Limited.
                        </p>
                    </div>
                </div>
            </section>

            <CoreValues />

            <section className="py-4 sm:py-5 px-4 sm:px-10 md:px-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-5 mb-8 sm:mb-10">Founder&apos;s Statement</h2>
                <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10">
                    <div className='w-full md:w-1/2'>
                        <Image src='/Prof-Yinka-Omorogbe.jpg' alt='Prof. Yinka Omorogbe, SAN' width={500} height={200} />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Statistically, 75 millions Nigerians still live without access to modern energy, lacking basic infrastructure needed to live sustainable lives free of poverty. This isn’t just an energy gap. It is a development gap, a justice gap. 
                            <br /> 
                            <br />
                            EtinPower was founded to close that gap. We develop solar mini-grids and energy solutions for off-grid and underserved communities starting in Edo State, and providing at least Tier 3 electricity, with 12+ hours of power daily in each of our communities. But we go beyond light. We provide productive use equipment, facilitate community trainings, and build ecosystems that uplift income, health, education, and dignity.
                            <br />
                            <br />
                            Our business model is inclusive and sustainable, connecting entire communities, offering affordable services, and working closely with residents to turn electricity into enterprise and empowerment.
                            <br />
                            <br />
                            Our agents are embedded in each of our communities and I personally visit every community that we serve. We build trust not just infrastructure.
                        </p>
                    </div>
                </div>
                <br />
                <div className="mb-10">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Energy access fuels real progress. Whilst it is the focus of SDG 7, it advances nearly every Sustainable Development Goal, improving health care, enhancing education, creating jobs, giving women and youth new opportunities, and reducing poverty.
                        <br />
                        <br />
                        At EtinPower, we are lighting up lives and futures. As we grow, we invite visionary partners to join us in scaling impact, building bankable communities, and making universal access to clean, reliable energy a reality.
                        <br />
                        <br />
                        <span className="font-bold text-4xl leading-loose text-green-500">&quot;&nbsp;</span>
                        If you give me electricity and I use it for things that will not increase my quality of life and safeguard my future, if you come back to me after some time, I will still be poor.
                        <br />
                        <span className="font-bold text-4xl leading-loose text-green-500">&quot;&nbsp;</span>
                        The secret to lifting people out of poverty through improved and better energy lies in getting them to use their modern energy sources to create more income and opportunities.
                        <br />
                        <br />
                        Thank you for walking this path with us.
                    </p>
                    <br />
                    <div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Prof. Yinka Omorogbe, SAN
                            <br />
                            Chief Executive Officer
                            <br />
                            EtinPower Limited.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}