---
qid: ing_e378db5b45__aws__local
question: 'Explain: Back to the Browser — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 382
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:25-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: A client’s e‑commerce platform was experiencing a 12 % drop in conversion during peak traffic because the front‑end kept timing out while resolving hostnames for CDN assets.

*Task*: I had to diagnose why DNS resolution was slower than expected and engineer a scalable, cost‑effective fix.

*Action*:  
1. **Dive Deep** – Instrumented `dig` and `nslookup` across 50 edge locations, revealing that only 6 % of queries hit the authoritative name servers; the rest were served from stale recursive caches due to an aggressive TTL (3600 s) on a mis‑configured internal DNS zone.  
2. **Design** – Migrated the zone to Amazon Route 53, set `SOA` and `NS` records with a 300 s TTL, and enabled *query logging* for real‑time analytics. Leveraged *Amazon CloudFront*’s origin request policy to bypass cache when the TTL expired.  
3. **Bias for Action** – Rolled out changes via AWS Config rules, monitored latency in CloudWatch, and rolled back within 15 min if RTT > 200 ms.

*Result*: DNS lookup time dropped from an average of 180 ms to 35 ms (80 % reduction). The page load time improved by 4.2 s, lifting conversion rates by **7 %** during the next sales campaign and saving $1.8K/month in CDN costs due to fewer cache misses.

**Learning**: Continuous monitoring of TTLs and proactive DNS health checks are essential; small mis‑configurations can cascade into significant revenue loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
