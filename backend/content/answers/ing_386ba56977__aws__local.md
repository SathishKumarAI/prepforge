---
qid: ing_386ba56977__aws__local
question: 'Explain: Practical Properties of Each Tier — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 421
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:13-05:00'
sources: []
---

**Situation (S)**  
While redesigning a conversational platform for an e‑commerce voice assistant, I noticed that latency grew 4× when the bot had to recall long‑term user preferences. The team was debating whether to store state in short‑term memory or persist it across sessions.

**Task (T)**  
I needed to devise a tiered memory architecture that balanced **Customer Obsession** (quick, accurate responses) with **Ownership** (cost‑effective design).

**Action (A)**  
1. **Short‑term tier** – In‑memory cache (Amazon Elasticache Redis) for the last 20 interactions; TTL = 2 min.  
2. **Mid‑tier** – DynamoDB with a GSI on `user_id` to keep the past week’s intents, accessed only when the cache misses.  
3. **Long‑term tier** – S3 + Athena for archival logs (up to 12 months), enabling analytics and audit.  

I wrote a lightweight “state router” in Lambda that selects the appropriate tier based on request context. The design uses **Serverless (Lambda)** for zero‑provisioning, **Auto Scaling** for Redis, and **Provisioned Throughput** on DynamoDB to guarantee 99.9 % availability.

**Result (R)**  
- Latency dropped from 350 ms to 70 ms for 95 % of requests.  
- Cost decreased by 30 % compared with a monolithic DynamoDB solution.  
- User satisfaction scores rose from 4.2/5 to 4.7/5, as measured in post‑interaction surveys.

**Reflection**  
I learned that *dive deep* into access patterns uncovers hidden costs. The bar‑raiser expects this evidence of ownership, measurable impact, and a clear trade‑off analysis—exactly what we delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
