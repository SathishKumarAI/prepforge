---
qid: ing_0ddaa2cd9f__aws__local
question: 'Explain: When you add credit, debit, prepaid, or transit cards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:52-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:*  
In 2024 I led the redesign of our fraud‑detection pipeline for a global fintech app that processes ~10 M transactions/day. The original model only understood credit and debit cards, so it flagged every prepaid or transit card as “unknown,” causing a 15 % decline in user retention.

*Task:*  
Expand the model to recognize four card categories (credit, debit, prepaid, transit) while keeping false‑positive rates below 0.5 %.

*Action:*  
1. **Data engineering** – Scraped issuer metadata from EMV and BIN ranges; enriched each transaction with card type flags, country, and velocity metrics.  
2. **Feature design** – Added “card‑type entropy” (distribution of card types per merchant) and “issuer‑frequency” features.  
3. **Modeling** – Trained a Gradient‑Boosted Trees ensemble (XGBoost) on 500 k labeled samples, tuned with Bayesian optimization.  
4. **Infrastructure** – Deployed the model as an Amazon SageMaker endpoint behind an Application Load Balancer; used Kinesis Data Streams for real‑time inference and S3 + Glue for batch retraining.  
5. **Monitoring & A/B testing** – Implemented CloudWatch metrics (latency, error rate) and a 10 % traffic split to validate accuracy before full rollout.

*Result:*  
- Reduced false positives by **27 %** across all card types.  
- Increased user retention by **3.8 %** in the first month post‑deployment.  
- Cut inference latency from 120 ms to 45 ms, keeping SLA < 100 ms for 99.9 % of requests.  

*Learnings:*  
Owning the full lifecycle—from data capture to deployment—enabled rapid iteration and measurable business impact. I also documented a “card‑type drift” alert that surfaced issuer changes before they affected fraud scores, turning reactive maintenance into proactive governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
