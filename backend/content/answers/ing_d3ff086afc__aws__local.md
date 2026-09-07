---
qid: ing_d3ff086afc__aws__local
question: 'Explain: KeyCDN — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 460
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:57-05:00'
sources: []
---

**Situation & Task**  
I was asked to architect a global CDN similar to **KeyCDN** for a startup that needed low‑latency video delivery while keeping costs under $2 M/yr. The goal: *Customer Obsession*—deliver sub‑100 ms latency worldwide—and *Ownership*—design for durability and self‑healing.

**Approach (Dive Deep & Bias for Action)**  
1. **Edge Layer** – Deploy 200+ **AWS CloudFront edge locations** with custom origin access keys, using **Lambda@Edge** to cache dynamic metadata per user segment.  
2. **Origin Tier** – Store immutable content in **Amazon S3 Glacier Deep Archive** (cold) and a *hot* tier in **S3 Standard-IA** for 10 % of traffic; use **S3 Transfer Acceleration** for uploads.  
3. **Cache Purge & Versioning** – Implement **S3 Object Lambda** to rewrite URLs with content‑hashes, ensuring cache invalidation is atomic and idempotent.  
4. **Analytics & Auto‑Scaling** – Stream CloudFront logs to **Amazon Kinesis Data Firehose → Athena** for real‑time hit/miss metrics; trigger **AWS Auto Scaling** on the origin EC2 fleet based on 5‑minute rolling averages.

**Result (Deliver Results)**  
- Latency dropped from 250 ms to 80 ms in APAC.  
- Peak traffic handled 30× more concurrent requests without degradation.  
- Annual cost reduced by 35% versus a pure on‑prem CDN, saving $650k.  

**Learning & Trade‑offs**  
Tried an in‑house edge cache (Redis) first; it failed under flash crowds due to single‑point failure. Migrating to CloudFront eliminated that risk and simplified compliance with GDPR via automatic regional data residency.

*Bar‑raiser cues:* clear ownership of end‑to‑end flow, deep understanding of CDN internals, quantifiable performance gains, and evidence of learning from the initial Redis prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
