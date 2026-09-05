---
qid: ing_4b5648413b__star__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 353
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:00-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a global e‑commerce platform that suddenly hit a traffic spike during a flash sale. The latency on the product pages was averaging 1.2 s, and our conversion rate dropped by 18% compared to pre‑sale benchmarks.

**Task:**  
I had to reduce page load times below 600 ms for users in all regions while keeping cost under the quarterly budget of $50k.

**Action:**  
I designed a multi‑tier CDN strategy. First, I selected Cloudflare as the edge provider because of its instant DNS propagation and built‑in HTTP/2 support. I configured cache rules to keep static assets (images, CSS, JS) for 24 h and used Cache‑Control headers to allow aggressive revalidation of dynamic JSON feeds. Next, I implemented a regional origin pull strategy: traffic from North America was routed to our primary US‑East data center, while EU users hit a secondary European node. Finally, I set up an A/B test using Cloudflare Workers to rewrite URLs and serve compressed assets on the fly, measuring latency with synthetic monitors.

**Result:**  
Page load times dropped to 480 ms on average across all regions, boosting conversions by 12% during the sale. The CDN cost stayed within $38k, saving us 24% of the budget. I learned that fine‑tuning cache headers and geographic routing can dramatically improve user experience without heavy infrastructure investment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
