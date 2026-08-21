import type { Metadata } from 'next';
import './globals.css';
import './mobile.css';
import './desktop.css';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
 title:'Karim — Web Developer & Digital Product Builder',
 description:'Karim is a web developer based in Patna, India, specializing in WordPress, Elementor, web applications, AI integrations, SEO and digital product development.',
 metadataBase:new URL(siteConfig.canonicalUrl), alternates:{canonical:'/'},
 openGraph:{title:'Karim — Web Developer & Digital Product Builder',description:'Websites, web applications, AI tools and complete digital products.',type:'website',locale:'en_IN'},
 twitter:{card:'summary_large_image',title:'Karim — Web Developer & Digital Product Builder',description:'Websites, web applications, AI tools and complete digital products.'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}