---
qid: ing_3a05929d7d__aws__local
question: 'Explain: ML System Design Questions and Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 450
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:31-05:00'
sources: []
---

**Answer (Amazon style)**  

I tackled a client’s request to build an end‑to‑end recommendation engine that could serve 10 M users with <200 ms latency. **Situation:** The legacy batch pipeline produced nightly models, but the business needed real‑time personalization for a mobile app.  
**Task:** Design a scalable, low‑cost ML system that balances freshness and availability.  
**Action:**  
1. **Problem framing (Dive Deep):** I mapped data flow—raw clickstream → feature store → inference layer → response API.  
2. **Model selection & training (Invent & Simplify):** Chose LightGBM for its fast training and low memory footprint; used SageMaker Pipelines to automate nightly retraining, with hyper‑parameter tuning via SageMaker Experiments.  
3. **Serving strategy (Customer Obsession + Ownership):** Deployed models as Lambda functions behind API Gateway, caching top 1 k recommendations in ElastiCache Redis to hit <200 ms for 90 % of requests. For cold starts, a fallback model runs on EC2 Spot instances.  
4. **Monitoring & feedback (Bias for Action):** Integrated CloudWatch metrics and SageMaker Model Monitor to track drift; automated rollback if accuracy drops >5 %.  
5. **Cost & scalability:** Leveraged serverless where possible; reserved capacity on Spot reduces spend by 35 % versus on‑demand.

**Result:** Latency dropped from 1.2 s to <200 ms, CTR increased by 18 %, and monthly operating cost fell 30 %. I documented trade‑offs (e.g., Lambda cold start vs. EC2 latency) and iterated the design after a 5 % accuracy dip in Q3—learning that incremental feature updates can be staged via Canary releases.

**Bar‑raiser notes:** Clear ownership, deep dive into data & architecture, quantified impact, and evidence of learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
