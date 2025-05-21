"use client"
import { BlurFade } from "@/components/blur-fade"
import { NumberTicker } from "@/components/number-ticker"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"

gsap.registerPlugin(useGSAP, MotionPathPlugin) // register the hook to avoid React version discrepancies

export default function Home() {
  useGSAP(() => {
    gsap.to("#rotatingText", {
      duration: 7,
      ease: "none",
      repeat: -1,
      delay: 2,
      rotate: 360,
      transformOrigin: "50% 50%"
    })
  })

  return (
    <main className="container mx-auto py-6 space-y-10">
      {/* nav bar */}
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <BlurFade direction="down">
            <div>
              <svg width="93" height="40" viewBox="0 0 93 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.6194 32.4453C24.0761 33.4919 22.2063 33.9578 20.345 33.751L18.051 33.4951C16.4918 33.4501 15.0059 32.8131 13.8997 31.707L13.2532 31.0615L12.9797 30.7744C12.3575 30.0899 11.8527 29.305 11.4875 28.4531L10.7542 26.7402L10.6477 26.4814C10.409 25.8747 10.2335 25.2442 10.1262 24.6006L10.0735 24.2353C9.85812 22.5298 10.1182 20.7973 10.8254 19.2305L10.9846 18.8975L11.7473 17.374C11.8665 16.1269 12.6146 15.017 13.7473 14.4463L14.9602 13.2324C15.644 12.5486 16.3853 11.9249 17.176 11.3691L17.5178 11.1357L17.8411 10.9199L17.9709 10.834L18.1096 10.7637C19.0582 10.2893 19.9347 9.68391 20.7131 8.96582L21.0413 8.65136L21.4602 8.23242C22.8894 6.80324 24.8277 6.00006 26.8489 6H28.5833C29.2785 6 29.9696 6.11221 30.6292 6.33203C31.5819 6.64962 32.4483 7.18441 33.1584 7.89453L34.4954 9.23242L30.9602 12.7676L29.6223 11.4307C29.4611 11.2694 29.2644 11.1473 29.0481 11.0752C28.8984 11.0253 28.7411 11 28.5833 11H26.8489C26.1538 11.0001 25.4869 11.2761 24.9954 11.7676L24.5764 12.1865L24.1038 12.6406C23.0249 13.6359 21.8148 14.4795 20.5081 15.1514L20.2913 15.2959L19.8157 15.6299C19.3484 15.9759 18.9069 16.3561 18.4954 16.7676L17.1604 18.1035L16.927 18.3184C16.8334 18.3979 16.7356 18.4725 16.635 18.543C16.57 18.8268 16.4712 19.1031 16.3401 19.3652L15.4563 21.1328L15.3157 21.4443C15.0599 22.0763 14.9572 22.7602 15.0159 23.4394L15.0588 23.7783C15.1015 24.034 15.1666 24.2856 15.2542 24.5293L15.3499 24.7705L16.0833 26.4844C16.2291 26.8246 16.4314 27.1377 16.6799 27.4111L16.7893 27.5254L17.4348 28.1719C17.6451 28.382 17.9305 28.5 18.2278 28.5H18.3665L18.5042 28.5156L20.8967 28.7812C21.5277 28.8513 22.1621 28.7092 22.6995 28.3809L22.9231 28.2285C22.9771 28.188 23.0304 28.1457 23.0813 28.1016L23.2288 27.9639L23.5872 27.6055C24.1971 26.9955 24.8584 26.4391 25.5637 25.9434L25.8684 25.7353L26.009 25.6416C26.8838 25.0584 27.6755 24.3594 28.3625 23.5654L28.6506 23.2197L29.2756 22.4385L29.3625 22.3301L31.2913 20.4014C31.6878 20.0049 32.1051 19.6293 32.5413 19.2773L32.9846 18.9326C33.5716 18.4924 34.1123 17.9937 34.5979 17.4443L34.802 17.2061L36.3069 15.3994L36.3801 15.3125L37.6692 14.0234C38.0027 13.6899 38.2805 13.3037 38.4915 12.8818C38.8863 12.0922 39.3908 11.3628 39.9885 10.7148L40.2502 10.4414L40.8313 9.86035C41.232 9.45964 41.6624 9.08984 42.1174 8.75293L42.5803 8.42675L43.2161 8.0039C44.6864 7.02369 46.4138 6.5 48.1809 6.5C49.0227 6.5 49.8597 6.61904 50.6672 6.85254L51.011 6.95996L52.2229 7.36328C53.0026 7.62318 53.7202 8.0392 54.3323 8.58398L54.5881 8.82519C54.9904 9.22752 55.3343 9.68411 55.6086 10.1816L55.7219 10.3975L56.4641 11.8818L51.9915 14.1182L51.2493 12.6338L51.1624 12.4893C51.1295 12.4436 51.0929 12.4003 51.053 12.3603L50.9612 12.2793C50.8659 12.204 50.7577 12.1451 50.6418 12.1064L49.4299 11.7031L49.1252 11.6143C48.8166 11.5383 48.4995 11.5 48.1809 11.5C47.4009 11.5 46.6385 11.7314 45.9895 12.1641L45.3538 12.5869L45.092 12.7715C44.8355 12.9615 44.5933 13.1706 44.3674 13.3965L43.7864 13.9775L43.5461 14.2373C43.3177 14.506 43.1222 14.8019 42.9641 15.1182C42.5128 16.0207 41.9188 16.8451 41.2053 17.5586L40.0803 18.6836L38.6438 20.4062L38.344 20.7559C37.6338 21.5593 36.8431 22.2887 35.9846 22.9326L35.6819 23.168C35.3835 23.4087 35.0976 23.6653 34.8264 23.9365L33.094 25.6689L32.5549 26.3428L32.1438 26.8369C31.1625 27.9709 30.0319 28.9688 28.7825 29.8018L28.6418 29.8955L28.2395 30.1787C27.8442 30.4715 27.4705 30.7934 27.1223 31.1416L26.7649 31.499L26.5637 31.6924C26.36 31.8821 26.1459 32.0614 25.9231 32.2285L25.6194 32.4453Z"
                  fill="black"
                />
                <path
                  d="M67.3088 7.35369C68.8521 6.3071 70.7219 5.84122 72.5833 6.04802L74.8772 6.30388C76.4364 6.3489 77.9224 6.98586 79.0286 8.09197L79.675 8.73748L79.9485 9.02459C80.5707 9.70907 81.0755 10.494 81.4407 11.3459L82.1741 13.0588L82.2805 13.3176C82.5193 13.9243 82.6947 14.5548 82.802 15.1984L82.8547 15.5636C83.0701 17.2692 82.8101 19.0017 82.1028 20.5685L81.9436 20.9015L81.1809 22.425C81.0617 23.6721 80.3136 24.782 79.1809 25.3527L77.968 26.5666C77.2842 27.2504 76.5429 27.8741 75.7522 28.4299L75.4104 28.6633L75.0872 28.8791L74.9573 28.965L74.8186 29.0353C73.87 29.5097 72.9936 30.1151 72.2151 30.8332L71.887 31.1476L71.468 31.5666C70.0388 32.9958 68.1005 33.7989 66.0793 33.799H64.345C63.6497 33.799 62.9586 33.6868 62.2991 33.467C61.3463 33.1494 60.4799 32.6146 59.7698 31.9045L58.4329 30.5666L61.968 27.0314L63.3059 28.3683C63.4672 28.5296 63.6638 28.6517 63.8801 28.7238C64.0299 28.7737 64.1871 28.799 64.345 28.799H66.0793C66.7744 28.7989 67.4413 28.5229 67.9329 28.0314L68.3518 27.6125L68.8245 27.1584C69.9033 26.1631 71.1135 25.3195 72.4202 24.6476L72.637 24.5031L73.1125 24.1691C73.5798 23.8231 74.0214 23.4429 74.4329 23.0314L75.7678 21.6955L76.0012 21.4806C76.0948 21.4011 76.1927 21.3265 76.2932 21.256C76.3582 20.9722 76.4571 20.6959 76.5881 20.4338L77.4719 18.6662L77.6125 18.3547C77.8683 17.7227 77.971 17.0388 77.9124 16.3595L77.8694 16.0207C77.8267 15.765 77.7616 15.5134 77.6741 15.2697L77.5784 15.0285L76.845 13.3146C76.6991 12.9744 76.4968 12.6613 76.2483 12.3879L76.1389 12.2736L75.4934 11.6271C75.2831 11.417 74.9977 11.299 74.7004 11.299H74.5618L74.4241 11.2834L72.0315 11.0178C71.4006 10.9477 70.7661 11.0898 70.2288 11.4181L70.0051 11.5705C69.9512 11.611 69.8978 11.6533 69.8469 11.6974L69.6995 11.8351L69.3411 12.1935C68.7311 12.8035 68.0698 13.3599 67.3645 13.8556L67.0598 14.0636L66.9192 14.1574C66.0444 14.7406 65.2527 15.4396 64.5657 16.2336L64.2776 16.5793L63.6526 17.3605L63.5657 17.4689L61.637 19.3976C61.2405 19.7941 60.8231 20.1697 60.387 20.5217L59.9436 20.8664C59.3566 21.3066 58.8159 21.8053 58.3303 22.3547L58.1262 22.5929L56.6213 24.3996L56.5481 24.4865L55.259 25.7756C54.9255 26.1091 54.6477 26.4953 54.4368 26.9172C54.0419 27.7068 53.5374 28.4362 52.9397 29.0842L52.678 29.3576L52.0969 29.9386C51.6962 30.3394 51.2658 30.7092 50.8108 31.0461L50.3479 31.3722L49.7122 31.7951C48.2418 32.7753 46.5144 33.299 44.7473 33.299C43.9055 33.299 43.0685 33.18 42.261 32.9465L41.9172 32.839L40.7053 32.4357C39.9256 32.1758 39.208 31.7598 38.5959 31.215L38.3401 30.9738C37.9378 30.5715 37.5939 30.1149 37.3196 29.6174L37.2063 29.4015L36.4641 27.9172L40.9368 25.6808L41.679 27.1652L41.7659 27.3097C41.7987 27.3554 41.8353 27.3987 41.8752 27.4386L41.967 27.5197C42.0623 27.595 42.1706 27.6539 42.2864 27.6926L43.4983 28.0959L43.803 28.1847C44.1116 28.2607 44.4287 28.299 44.7473 28.299C45.5273 28.299 46.2897 28.0676 46.9387 27.6349L47.5745 27.2121L47.8362 27.0275C48.0927 26.8375 48.3349 26.6284 48.5608 26.4025L49.1418 25.8215L49.3821 25.5617C49.6106 25.293 49.806 24.9971 49.9641 24.6808C50.4154 23.7783 51.0094 22.9539 51.7229 22.2404L52.8479 21.1154L54.2844 19.3927L54.5842 19.0431C55.2944 18.2397 56.0851 17.5103 56.9436 16.8664L57.2463 16.631C57.5447 16.3903 57.8306 16.1337 58.1018 15.8625L59.8342 14.1301L60.3733 13.4562L60.7844 12.9621C61.7657 11.8281 62.8964 10.8302 64.1458 9.99724L64.2864 9.90349L64.6887 9.62029C65.0841 9.32754 65.4577 9.00556 65.8059 8.6574L66.1633 8.29998L66.3645 8.10662C66.5682 7.91689 66.7823 7.73759 67.0051 7.57048L67.3088 7.35369Z"
                  fill="black"
                />
              </svg>
            </div>
          </BlurFade>

          <BlurFade direction="down" delay={0.25}>
            <ul className="flex items-center gap-6">
              <li className="relative overflow-hidden cursor-pointer header-menu-link-inner ">
                <span className="header-menu-link-text inline-block relative z-10 uppercase">Home</span>
                <span className="header-menu-link-text-clone absolute top-0 left-0 z-10 uppercase ">Home</span>
              </li>
              <li className="relative overflow-hidden cursor-pointer header-menu-link-inner ">
                <span className="header-menu-link-text inline-block relative z-10 uppercase">About</span>
                <span className="header-menu-link-text-clone absolute top-0 left-0 z-10 uppercase ">About</span>
              </li>
              <li className="relative overflow-hidden cursor-pointer header-menu-link-inner ">
                <span className="header-menu-link-text inline-block relative z-10 uppercase">Courses</span>
                <span className="header-menu-link-text-clone absolute top-0 left-0 z-10 uppercase ">Courses</span>
              </li>
              <li className="relative overflow-hidden cursor-pointer header-menu-link-inner ">
                <span className="header-menu-link-text inline-block relative z-10 uppercase">Blog</span>
                <span className="header-menu-link-text-clone absolute top-0 left-0 z-10 uppercase ">Blog</span>
              </li>
              <li className="relative overflow-hidden cursor-pointer header-menu-link-inner ">
                <span className="header-menu-link-text inline-block relative z-10 uppercase">Contacts</span>
                <span className="header-menu-link-text-clone absolute top-0 left-0 z-10 uppercase ">Contacts</span>
              </li>
            </ul>
          </BlurFade>
        </div>

        <BlurFade direction="left" delay={0.3}>
          <div className="flex items-center gap-4">
            <button
              type="button"
              id="home-reel-cta"
              className="flex pointer-events-auto font-semibold relative float-left overflow-hidden items-center gap-[1rem] text-white cursor-pointer h-[3.75rem] rounded-full bg-black uppercase w-fit"
            >
              <span
                id="home-reel-cta-dot"
                className="inline-block relative w-[0.5rem] h-[0.5rem] rounded-full bg-white z-10"
              ></span>
              <span id="home-reel-cta-text" className="relative z-10">
                Get Started
              </span>
              <span
                id="home-reel-cta-arrow"
                className="flex absolute justify-center items-center right-[1em] h-[1.2em] w-[1.2em] rounded-2xl z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </BlurFade>
      </nav>
      {/* nav bar end */}

      <div className="flex gap-6">
        <div className="flex-1 flex flex-col">
          <BlurFade direction="right" delay={0.35}>
            <h2 className="text-8xl text-end">REVOLUTIONIZE</h2>
          </BlurFade>
          <BlurFade direction="right" delay={0.45}>
            <h2
              className="text-8xl flex items-center gap-8
            "
            >
              LEARNING
              <BlurFade direction="left" delay={0.5} className="flex items-center">
                <span className="border border-gray-300 rounded-full px-4.5 py-3 h-full text-3xl">WITH</span>
              </BlurFade>
            </h2>
          </BlurFade>
          <BlurFade direction="right" delay={0.55}>
            <h2 className="text-8xl text-center">AI-DRIVEN</h2>
          </BlurFade>
          <BlurFade direction="right" delay={0.6}>
            <h2 className="text-8xl text-end">EDUCATION</h2>
          </BlurFade>
        </div>
        <BlurFade direction="down" delay={0.7}>
          <div className="rounded-4xl w-[369px] h-full overflow-hidden bg-black/20 text-white p-10 flex flex-col relative group">
            <div className="absolute inset-0 -z-10">
              <Image
                src={"/image.png"}
                alt="nature"
                width={400}
                height={100}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex justify-between flex-1">
              <span className="border border-gray-300 rounded-full px-2.5 py-1.5 h-max ">Welcome</span>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.7497 10.4509L10.5019 8L14.7497 5.54906C14.9891 5.41094 15.071 5.10531 14.9329 4.86594L13.9322 3.13375C13.7941 2.89469 13.4882 2.8125 13.2488 2.95062L9.00099 5.40156V0.5C9.00099 0.22375 8.77693 0 8.50068 0H6.49943C6.22318 0 5.99911 0.22375 5.99911 0.5V5.40188L1.7513 2.95094C1.51193 2.81281 1.20599 2.895 1.06786 3.13406L0.0672382 4.86594C-0.0708869 5.105 0.0109882 5.41094 0.250363 5.54906L4.49818 8L0.250363 10.4509C0.0109882 10.5891 -0.0708869 10.895 0.0672382 11.1341L1.06786 12.8663C1.20599 13.1053 1.51193 13.1872 1.7513 13.0494L5.99911 10.5984V15.5C5.99911 15.7763 6.22318 16 6.49943 16H8.50068C8.77693 16 9.00099 15.7763 9.00099 15.5V10.5981L13.2488 13.0491C13.4882 13.1872 13.7941 13.1053 13.9322 12.8659L14.9329 11.1337C15.071 10.8947 14.9891 10.5891 14.7497 10.4509Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>
              Discover a new way of learning <br />
              with out AI-powered online <br />
              platform. Achieve your global <br />
              and succeed with us.
            </p>
          </div>
        </BlurFade>
      </div>
      {/* Bento grid */}
      <div className="grid grid-cols-[530px_auto] gap-3">
        <div className="grid grid-rows-[180px_180px] gap-4 relative">
          <div className="absolute -top-40 left-4">
            <BlurFade direction="right" delay={0.75}>
              <svg width="150" height="150" viewBox="50 50 200 200" overflow={"visible"}>
                <defs>
                  <path id="circlePath" d="M 150, 150 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0 " />
                </defs>
                <g id="rotatingText" transform="translate(0,0)">
                  <text fontSize="16" fontFamily="Arial">
                    <textPath href="#circlePath" startOffset="0%" textLength={502} className="text-[18px]">
                      Don't just study, excel with our personalized approach approach &nbsp;
                    </textPath>
                  </text>
                </g>

                <path
                  d="M21 1.75L15.75 15.75L1.75 21L15.75 26.25L21 40.25L26.25 26.25L40.25 21L26.25 15.75L21 1.75Z"
                  fill="black"
                  transform="translate(130,130)"
                />
              </svg>
            </BlurFade>
          </div>
          <BlurFade delay={0.25} direction="down">
            <div className="bg-gray-400 rounded-4xl overflow-hidden h-full group">
              <Image
                src={"/teach.png"}
                alt="nature"
                width={400}
                height={100}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 gap-4">
            <BlurFade delay={0.25 * 2} direction="up">
              <div className="bg-gray-400  text-white flex items-center justify-center flex-col rounded-4xl h-full">
                <NumberTicker value={137} delay={1.2} />
                <p>Courses</p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 3} direction="up">
              <div className="bg-black text-white flex items-center justify-center flex-col rounded-4xl h-full">
                <NumberTicker value={12000} delay={1.5} />
                <p>Learners</p>
              </div>
            </BlurFade>
          </div>
        </div>
        <BlurFade direction="left" delay={0.75} offset={10}>
          <div className="bg-[#E7F99A] rounded-4xl p-10 flex h-full">
            <div className="flex-1">
              <div className="space-x-3 mb-8">
                <span className="rounded-full bg-black text-[#E7F99A] px-6 py-2 ">Personalized Learning</span>
                <span className="rounded-full border border-black px-6 py-2 hover:bg-black transition-all duration-300 hover:text-[#E7F99A]">
                  Online Education
                </span>
                <span className="rounded-full border border-black px-6 py-2 hover:bg-black transition-all duration-300 hover:text-[#E7F99A]">
                  AI
                </span>
              </div>

              <h2 className="text-5xl">Flexible</h2>

              <div className="separator w-full h-[1px] mb-5 mt-8 bg-black"></div>

              <p className="text-2xl">
                Out cutting-edge technology adapts to your needs <br />
                and provides a tailored curriculum that helps you <br /> succeed. Experience the future education today.
              </p>
            </div>
            <div className=" w-2/12">
              <svg
                width="63"
                className="rotate-45"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.8125 62.6875V15.9227L56.7454 33.6342L62.3171 27.0533L31.5 0.975624L0.682861 27.0533L6.25461 33.6342L27.1875 15.9227V62.6875H35.8125Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  )
}
