---
qid: ing_df780d6751__star__local
question: 'Explain: Server-side failure — How to Troubleshoot if You Can\u2019t Access
  a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 330
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:34-05:00'
sources: []
---

**Situation** – In late Q3 of last year I was on the backend team for a SaaS analytics platform that suddenly stopped allowing users to reach the dashboard. The error logs were empty because the request never hit our application servers; it was dropping at the edge load balancer.

**Task** – My job was to identify why traffic was being blocked and restore access within an hour, while keeping the rest of the service running for other customers.

**Action** – I first checked DNS propagation using `dig` from multiple public resolvers; everything pointed correctly. Next, I queried the load balancer’s health checks (AWS ALB) to confirm target groups were healthy. Seeing a 503 from the LB, I pulled the access logs and found repeated 429s—rate‑limiting by CloudFront. I traced the origin of the spikes back to an automated crawler that had been re‑indexed after a content update; it exceeded our new request threshold. I temporarily whitelisted the crawler’s IP range in the ACL and lowered the rate limit for the next hour while we updated the crawler’s `robots.txt`.

**Result** – Service was restored in 45 minutes, and the dashboard uptime jumped from 94% to 99.8% over the following week. The incident taught me to monitor edge‑layer metrics (latency, error codes) separately from application logs and to maintain an up‑to‑date list of external agents that can impact rate limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
