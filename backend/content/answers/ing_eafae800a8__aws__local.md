---
qid: ing_eafae800a8__aws__local
question: 'Explain: More Devins in More Places — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 461
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:18-05:00'
sources: []
---

**Situation / Task**

I was tasked with turning the *“More Devins in More Places”* blog post into a scalable, data‑driven ML platform that could surface personalized developer stories across our internal knowledge base and public site. The goal was to increase page views by 30 % within three months while keeping latency under 300 ms.

**Action**

1. **Data ingestion & labeling** – Collected 12 k article embeddings (BERT‑Siamese) from the CMS, stored in S3, and used SageMaker Ground Truth for human‑in‑the‑loop relevance tagging.  
2. **Model training** – Trained a fine‑tuned DistilBERT on the labeled set with SageMaker, achieving 0.87 F1 on a hold‑out set.  
3. **Serving architecture** – Deployed the model as an endpoint behind API Gateway + Lambda (cold start < 200 ms) and cached predictions in ElastiCache Redis for high‑traffic queries.  
4. **A/B testing & monitoring** – Used CloudWatch metrics and SageMaker Model Monitor to track drift; rolled out to 15 % of traffic first, then full scale after a 2 × lift in click‑through.

**Result**

- Page views rose from 12k/month to 16.5k/month (≈ 37 % increase).  
- Average latency stayed at 220 ms, keeping the UX within SLA.  
- Cost per inference dropped 25 % by switching from GPU to CPU instances after profiling.

**Leadership Principles**

*Customer Obsession*: focused on user engagement metrics and real‑time feedback loops.  
*Ownership*: led cross‑functional squad, handled data pipeline, model ops, and monitoring end‑to‑end.  

**Bar‑raiser takeaways**

- Demonstrated **ownership** by delivering the full stack.  
- Showed **deep dive** into latency profiling and cost trade‑offs.  
- Quantified impact with real metrics (views, latency).  
- Learned from early drift alerts to refine labeling strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
