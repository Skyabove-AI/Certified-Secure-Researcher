import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Certified Secure Researcher™ Blog',
    description: 'Expert insights on research security compliance, IP theft prevention, NSPM-33 requirements, and ORCID security.',
    site: context.site || 'https://certifiedsecureresearcher.com',
    items: [
      {
        title: 'The $44 Million Question: What\'s Your Research Security Blind Spot?',
        pubDate: new Date('2025-11-17'),
        description: 'Organizations saved $44 million by identifying security blind spots. Discover the 5 critical vulnerabilities costing research institutions millions.',
        link: '/blog/research-security-blind-spots/',
        categories: ['Risk Assessment', 'Research Security'],
      },
      {
        title: 'Why 73% of Research Organizations Discover IP Theft Too Late',
        pubDate: new Date('2025-11-17'),
        description: 'The devastating lag between crime and discovery transforms security incidents into existential crises. Learn how to break the late discovery cycle.',
        link: '/blog/ip-theft-late-discovery/',
        categories: ['Research Security', 'IP Protection'],
      },
      {
        title: 'ORCID: The Double-Edged Sword of Research Identity Management',
        pubDate: new Date('2025-11-17'),
        description: 'Streamlined credentials vs. strategic intelligence vulnerabilities—understanding the hidden risks of mandatory researcher identification systems.',
        link: '/blog/orcid-double-edged-sword/',
        categories: ['Security Analysis', 'ORCiD'],
      },
    ],
    customData: `<language>en-us</language>`,
  });
}
