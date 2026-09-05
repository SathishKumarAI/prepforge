---
qid: ing_d9d06e7e6a__star__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 365
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:55-05:00'
sources: []
---

**Situation:**  
I was leading the rollout of a real‑time image‑classification API for a mobile gaming platform that served millions of users in North America and Asia. Our existing edge cache on AWS CloudFront had high latency (≈350 ms) for Asian regions, hurting user engagement.

**Task:**  
Pick a CDN that reduced global latency to under 200 ms while keeping cost per request below $0.00005 and ensuring GDPR compliance for EU traffic.

**Action:**  
1. Built a benchmark script using Python’s `requests` + `timeit` to hit the API from 10 CloudLab nodes in each target region, recording round‑trip times and cache hit rates.  
2. Compared four providers—AWS CloudFront, Fastly, Akamai, and Cloudflare—on metrics: latency, edge node count, pricing model (pay‑per‑request vs tiered), and compliance certifications.  
3. Ran a 48‑hour pilot with Fastly’s real‑time logging to capture dynamic cache behavior; adjusted TTLs and added custom VCL logic for ML payload size optimization.  
4. Negotiated a volume discount with Fastly and configured WAF rules to block anomalous traffic spikes.

**Result:**  
Latency dropped from 350 ms to 145 ms in Asia, improving conversion by 12% and reducing server load by 18%. Cost per request fell to $0.000042, staying within budget. I learned that a data‑driven pilot coupled with provider-specific features (e.g., Fastly’s real‑time metrics) can deliver measurable performance gains without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
