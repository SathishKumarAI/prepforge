---
qid: ing_798240f3f7__aws__local
question: 'Explain: Cleanup Service — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:49-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that built an internal **URL Shortener** (TinyURL) for the company’s marketing assets. The goal was to reduce link clutter in dashboards, improve click‑through tracking, and eliminate stale URLs that caused broken redirects.

**Action**  
1. **Ownership & Dive Deep** – I scoped the backlog, wrote acceptance criteria, and defined a success metric: <0.5 % redirect error rate and 30 % reduction in average link length.  
2. **Design** –  
   * **API Gateway + Lambda** for the short‑link creation endpoint (stateless, auto‑scales).  
   * **DynamoDB** with a Global Secondary Index on the original URL to detect duplicates; TTL deletes stale entries after 90 days.  
   * **CloudFront + S3** for fast global redirect responses, caching the mapping in Lambda@Edge to keep latency <30 ms.  
   * **SNS** triggers a cleanup Lambda that runs nightly, scans for URLs not hit in >180 days, flags them for archiving, and optionally auto‑removes them from DynamoDB (cost saving).  
3. **Bias for Action & Invent & Simplify** – Implemented a deterministic hash (`base62`) to generate the short code, eliminating collisions with a simple retry loop.

**Result**  
* Reduced average URL length by 32 % across all marketing channels.  
* Cut redirect error rate from 2.1 % to 0.4 %.  
* Saved ~$4k/month in DynamoDB read/write capacity by removing unused entries.  

**Learnings** – The cleanup Lambda exposed a subtle race condition when deleting items that were concurrently accessed; we added an optimistic lock (`version` attribute) and re‑tested, achieving >99.9 % reliability. This reinforced my habit of **dive deep** into failure modes before shipping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
