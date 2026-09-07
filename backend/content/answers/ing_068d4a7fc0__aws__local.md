---
qid: ing_068d4a7fc0__aws__local
question: 'Explain: Round 3: AI system design (45-60 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 376
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:47-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to build a real‑time recommendation engine for an e‑commerce platform that had to serve 10 M active users daily while keeping latency under 200 ms and staying within a $50K/month budget.

**Action**  
- **Ownership + Customer Obsession:** I scoped the problem by interviewing product, ops, and data teams to surface pain points (cold start, high churn).  
- **Dive Deep + Invent & Simplify:** Chose a hybrid model—pre‑compute top 1 k items per user with Amazon SageMaker Pipelines, store embeddings in DynamoDB for fast lookup, and use Lambda@Edge to deliver the final list at CDN edge.  
- **Bias for Action:** Deployed an A/B test on 5% traffic using CloudWatch metrics (CTR lift, latency).  
- **AWS Services & Trade‑offs:** SageMaker training (~$1k per run), DynamoDB (provisioned throughput 200WCU, auto‑scaling), Lambda cost <$500/month, CloudFront edge caching reduces origin hits.  

**Result**  
- CTR increased by **12%** in the test group, translating to ~$250K incremental revenue per month.  
- Latency dropped from 350 ms to **180 ms**, meeting SLA.  
- Total operational cost stayed at **$42k/month**, under budget.

**Reflection (Bar‑raiser)**  
I documented failure modes: cold‑start lag during peak, mitigated by caching recent embeddings. Learned that combining serverless edge compute with managed ML pipelines delivers both speed and scalability while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
