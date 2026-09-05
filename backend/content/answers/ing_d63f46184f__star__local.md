---
qid: ing_d63f46184f__star__local
question: 'Explain: Page Size — Top 9 Website Performance Metrics You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 311
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:00-05:00'
sources: []
---

**Situation**  
At my last role I was leading a redesign of the e‑commerce landing page for a mid‑size retailer that had been experiencing a 30 % bounce rate on mobile and a 5‑second average load time during peak traffic.

**Task**  
I needed to cut the page size below 800 KB without losing any critical product imagery or functionality, ensuring the site met Google’s Core Web Vitals targets (Largest Contentful Paint <2.5 s).

**Action**  
First I ran a Lighthouse audit to identify heavy assets: three high‑resolution hero images, an unused CSS block, and several third‑party analytics scripts. I replaced the hero images with next‑gen `<picture>` tags serving WebP at 60 % compression, removed the unused CSS via PurgeCSS, and swapped the synchronous analytics call for a lazy‑loaded `defer` script. I also implemented Brotli compression on the server and switched to HTTP/2 push for critical fonts.

**Result**  
The page size dropped from 1.6 MB to 720 KB—a 55 % reduction—while the LCP improved to 1.8 s and mobile bounce fell to 18 %. The experience taught me that obsessively trimming file sizes, even at the cost of a few kilobytes, can have a measurable impact on user engagement and conversion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
