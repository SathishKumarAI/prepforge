---
qid: ing_3decd42c20__aws__local
question: 'Explain: The browser DNS caching issue — Why DNS Based Global Server Load
  Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 382
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:57-05:00'
sources: []
---

**Situation / Task**  
In a multi‑region e‑commerce platform, I was tasked to cut the **global latency spike** that hit customers during peak traffic. The naïve fix was to deploy a *DNS‑based Global Server Load Balancer (GSLB)* and point all users to the nearest region.

**Action**  
I dug into the DNS cache behaviour (TTL, recursive resolvers) and built a simulation in Python that replayed 1 M queries over 48 h. I discovered that **≈60 % of users were still routed to the origin region** because their local ISPs cached the old IP for up to 12 h. To mitigate this, I replaced GSLB with an *Application‑Load‑Balancing (ALB) + Route 53 Weighted Routing* plus a **short TTL (30 s)** and integrated CloudFront edge caching.

- Used Amazon Route 53 latency routing for real‑time decisions  
- Employed AWS Global Accelerator to keep endpoint IPs stable, avoiding DNS churn  
- Added health checks that automatically remove unhealthy endpoints

**Result**  
Post‑deployment, the **average end‑to‑end latency dropped from 350 ms to 120 ms** (a 66 % improvement) and the **request error rate fell by 3.8 ×** during peak hours.  

**Reflection**  
I learned that *DNS caching* is a hidden bottleneck; solving it requires both **ownership** of the end‑to‑end path and a deep dive into protocol quirks—exactly what Amazon expects from a senior engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
