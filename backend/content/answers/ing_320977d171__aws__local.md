---
qid: ing_320977d171__aws__local
question: 'Explain: Uh the index grew by a factor — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 422
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:15-05:00'
sources: []
---

**Situation & Task**  
When I joined a new data‑science team at Google, the recommendation engine’s *feature index* (the set of engineered attributes fed into our models) had ballooned from ~2 k to >200 k over two years because each product release added dozens of ad‑hoc features. This exploded storage costs, slowed model training by 40 %, and introduced hard‑to‑debug data drift.

**Action**  
1. **Ownership & Bias for Action** – I spearheaded a *feature governance* framework:  
   - **Feature catalog (AWS Glue Data Catalog)** to track lineage, owner, and usage frequency.  
   - **Automated pruning job (Amazon SageMaker Processing + Lambda)** that flags unused features (>30 days inactivity) and proposes removal if correlation ≤0.05 with target.  
2. **Dive Deep & Invent** – Re‑architected the index storage using *Amazon Timestream* for time‑series feature values, enabling cost‑effective tiering (hot vs cold).  
3. **Scalability & Availability** – Deployed the pruning pipeline in a VPC with IAM roles; leveraged *SQS* to queue prune requests, ensuring 99.9 % availability during peak training windows.

**Result**  
- Reduced index size by **87 %**, cutting storage cost from $12k/month to $1.5k/month.  
- Training time dropped from 4 h to 2.3 h (−42 %).  
- Model drift incidents fell by 60 % as stale features were automatically retired.

**Reflection** – The key learning was that *feature engineering is a product*: it needs continuous ownership, automated hygiene, and clear metrics. This approach not only improved performance but also created a repeatable process for future model rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
