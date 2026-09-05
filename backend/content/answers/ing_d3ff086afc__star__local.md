---
qid: ing_d3ff086afc__star__local
question: 'Explain: KeyCDN — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 327
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:32-05:00'
sources: []
---

**Situation**  
When I was building a real‑time analytics dashboard for our SaaS product, the front‑end assets were served from an on‑prem server in New York. As we grew into Europe and Asia, page load times spiked to 4–5 seconds and the CDN vendor’s pricing model made us exceed budget.

**Task**  
I needed to design a cost‑effective CDN strategy that cut latency by at least 60% for users outside North America while keeping monthly spend under $2k.

**Action**  
I chose KeyCDN because of its low edge network cost and easy integration. I:

1. Created an Origin Pull setup pointing to our S3 bucket, enabling automatic SSL via Let’s Encrypt.
2. Configured a custom Cache-Control policy: static JS/CSS cached for 30 days, dynamic API responses for 5 minutes.
3. Enabled HTTP/2 and Brotli compression to reduce payload size.
4. Used the KeyCDN Geo‑Redirect feature to route traffic from EU to the nearest edge in Frankfurt, then set up a CloudWatch metric to trigger a Lambda that rotated an Origin IP if latency exceeded 200 ms.

**Result**  
Page load times dropped from 5 seconds to 1.8 seconds globally (a 64% reduction). Monthly CDN spend stayed at $1,800. I learned how cache headers and edge logic directly translate into user experience and cost savings in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
