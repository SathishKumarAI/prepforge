---
qid: ing_3f7d26fb01__star__local
question: 'Explain: Hello everyone. My name is Deepak and — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 388
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:11-05:00'
sources: []
---

**Situation** – At my previous company we were migrating a legacy monolith to a microservices architecture in 2023. The new system had to support real‑time analytics for an e‑commerce platform that processed ~15 k orders per second, with a requirement for flexible schema and sub‑second read latency on user profiles.

**Task** – I was tasked with evaluating the NoSQL options available on AWS (DynamoDB, DocumentDB, Neptune, and Redis) to determine which would best meet our scalability, consistency, and cost goals while allowing rapid feature iterations for the marketing team.

**Action** – I first mapped out our access patterns: 70 % read‑heavy queries on user data, occasional write bursts during flash sales, and a need for global distribution. I benchmarked DynamoDB’s provisioned vs. on‑demand modes, ran latency tests in us-east-1 and eu-west-2, and compared the cost per GB stored versus the projected traffic. I also prototyped a Redis cluster to evaluate caching benefits for session data. After creating a proof‑of‑concept that simulated 20 k TPS, I quantified the read/write costs, cold start times, and the impact of DynamoDB’s auto‑scaling on our budget.

**Result** – We chose DynamoDB with global tables and adaptive capacity, which cut read latency from 350 ms to under 50 ms for 95 % of requests. The migration reduced operational overhead by 30 % and kept monthly database spend below $12k. I learned that a thorough trade‑off analysis—combining real traffic simulation with cost modeling—is essential when selecting a NoSQL solution at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
