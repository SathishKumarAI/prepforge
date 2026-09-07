---
qid: ing_f43dcbdc89__aws__local
question: 'Explain: Load Time — Top 9 Website Performance Metrics You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 610
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:44-05:00'
sources: []
---

**Situation:**  
At my last company we launched a product‑launch landing page that saw 1 M visits per day. Page load times hovered at 8 s on mobile, hurting conversion and inflating bounce rates.

**Task:**  
I was tasked to reduce load time while keeping costs under the $50k/month budget.

**Action (AWS & Design):**  

| Metric | Why it matters | AWS Solution |
|--------|----------------|--------------|
| **First Contentful Paint (FCP)** | First visual cue; 90 % users leave if >1.8 s | CloudFront + S3 static hosting, gzip/ Brotli |
| **Largest Contentful Paint (LCP)** | Core content visibility | Edge caching with Lambda@Edge to pre‑render critical CSS |
| **Time to Interactive (TTI)** | Interactivity window | Optimize JS bundle size, use Webpack tree‑shaking, serve via CloudFront |
| **Total Blocking Time (TBT)** | Long main‑thread tasks | Offload heavy calculations to a Web Worker; use SQS + Lambda for async pre‑processing |
| **Cumulative Layout Shift (CLS)** | Visual stability | Serve font files with `font-display: swap`, reserve image dimensions |
| **Speed Index** | User perceived speed | CDN edge routing, reduce round‑trips by consolidating APIs |
| **Request Count** | Server load | Minify resources, enable HTTP/2 multiplexing on CloudFront |
| **Data Transfer (GB)** | Bandwidth cost | Enable compression, cache aggressively with 1‑year TTL |
| **Error Rate (%)** | Reliability signal | CloudWatch metrics + automatic rollback via CodeDeploy |

I re‑architected the front‑end using a single SPA bundle served from S3/CloudFront, added Lambda@Edge for on‑edge rendering of the hero image, and moved heavy API calls to an async queue (SQS → Lambda).  

**Result:**  
- FCP dropped from 2.9 s to **1.4 s** (48 % improvement).  
- LCP improved by 36 %.  
- Overall page weight fell from 3.6 MB to 1.8 MB, cutting data transfer cost by **$12k/month**.  
- Conversion rate rose 15 %, and bounce rate fell 22 %.

**Reflection:**  
I owned the end‑to‑end journey, dove deep into metrics, iterated quickly with A/B tests (Bias for Action), and simplified the architecture to keep it maintainable—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
