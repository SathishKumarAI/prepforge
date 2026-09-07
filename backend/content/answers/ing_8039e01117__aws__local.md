---
qid: ing_8039e01117__aws__local
question: 'Explain: Although inheritance is a popular OOPs concept, it is less advantageous
  than composition. Explain.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 396
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:10-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*

**Situation / Task**  
I was tasked to refactor a legacy recommendation engine that grew from a single monolith into dozens of tightly‑coupled services. The original design relied heavily on inheritance (`BaseRecommender → ProductRec, UserRec`). This made unit testing fragile and deployments risky.

**Action**  
1. **Adopt Composition:** Introduced a `RecommendationStrategy` interface and concrete strategy classes (e.g., `CollaborativeFiltering`, `ContentBased`).  
2. **AWS Services:** Deployed each strategy as an isolated Lambda behind API Gateway, using DynamoDB for shared state and S3 for model artifacts.  
3. **Scalability & Cost:** Lambdas scale automatically to 10 k concurrent requests with $0.20/1M invocations vs. a monolith costing ~\$2,500/month in EC2.  
4. **Reliability:** Implemented Circuit Breaker patterns via API Gateway and fallback strategies, reducing outage impact from 3 hrs to < 5 min.

**Result**  
- Deployment frequency increased from once per quarter to bi‑weekly (×8).  
- Unit‑test coverage rose from 55% to 92%, cutting defect rate by 70%.  
- Operational cost dropped 60% while latency improved by 35%.

**Bar‑raiser Insight**  
Ownership: I owned the end‑to‑end refactor, ensuring zero downtime. Dive Deep: I quantified trade‑offs between Lambda cold starts vs. EC2 persistence and chose the optimal mix. Learned from early failures—initially over‑exposed state in S3, later moved to DynamoDB for ACID guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
