import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineWrenchScrewdriver,
  HiOutlineBugAnt,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineVideoCamera,
  HiOutlineCamera,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiBrainDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiAmazonwebservices,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiPostman,
  SiWebpack,
  SiJest,
  SiGithubactions,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiGooglechrome,
  SiFigma,
  SiSupabase,
  SiOpenai,
  SiGithubcopilot,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  // Navigation & UI
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  globe: HiOutlineGlobeAsiaAustralia,
  email: HiEnvelope,

  // Skills — general
  cpu: HiOutlineCpuChip,
  code: HiOutlineCommandLine,
  settings: HiOutlineWrenchScrewdriver,
  api: HiOutlineWrenchScrewdriver,
  bug: HiOutlineBugAnt,
  refresh: HiOutlineArrowPath,
  check: HiOutlineCheckCircle,
  video: HiOutlineVideoCamera,
  camera: HiOutlineCamera,
  brain: PiBrainDuotone,

  // Social
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  instagram: FaInstagram,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,

  // Tech — Languages
  javascript: SiJavascript,
  typescript: SiTypescript,

  // Tech — Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss3,

  // Tech — Backend
  nodejs: SiNodedotjs,
  express: SiExpress,

  // Tech — Database & Storage
  mongodb: SiMongodb,
  firebase: SiFirebase,
  cloudinary: SiCloudinary,
  aws: SiAmazonwebservices,

  // Tech — DevOps & Tools
  vercel: SiVercel,
  postman: SiPostman,
  webpack: SiWebpack,
  jest: SiJest,
  githubactions: SiGithubactions,
  chrome: SiGooglechrome,

  // Tech — Design & Other
  figma: SiFigma,
  supabase: SiSupabase,

  // Tech — AI Tools
  openai: SiOpenai,
  copilot: SiGithubcopilot,

  // Adobe
  aftereffects: SiAdobeaftereffects,
  premierepro: SiAdobepremierepro,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
