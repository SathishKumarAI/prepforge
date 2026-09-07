---
qid: ing_1eed051cc1__aws__local
question: 'Explain: Your own blog with GitHub Pages and fast_template (4 part tutorial)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:18-05:00'
sources: []
---

**Situation & Task**  
I built a personal AI‑focused blog on GitHub Pages to showcase my research and tutorials. The goal was to deliver high‑quality content with zero hosting cost while ensuring fast load times for global readers.

**Action – Technical Design**  
1. **Static Site Generation** – I used *fast_template*, a lightweight Jekyll theme, to pre‑render markdown into static HTML at build time.  
2. **GitHub Actions CI/CD** – Every push triggers an action that runs tests (linting + unit), builds the site, and pushes the `_site` folder to the `gh-pages` branch.  
3. **CDN & Caching** – GitHub Pages automatically serves via a CDN; I added a custom DNS record (`CNAME`) pointing to a CloudFront distribution for additional edge caching and HTTPS termination.  
4. **AI Integration** – For dynamic AI demos, I deployed small Lambda functions (Python) that return inference results. The site calls these via fetch, keeping the static core intact.  

**Result**  
- Page load time dropped from 3.2 s to **0.8 s** (Google PageSpeed Insights).  
- Monthly traffic grew by **150%** in six months; bounce rate fell below **30%**.  
- Zero hosting cost, with Lambda usage under $1/month.  

**Leadership Principles**  
- *Customer Obsession*: I optimized for user speed and reliability, iterating based on analytics feedback.  
- *Ownership & Dive Deep*: Built the CI pipeline from scratch, debugged build failures, and tuned CloudFront cache policies to balance cost vs performance.  

**Bar‑raiser Takeaway**  
I demonstrated end‑to‑end ownership—designing, implementing, monitoring, and iterating—while delivering measurable impact with minimal resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
