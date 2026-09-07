---
qid: ing_cdf2fef1e1__aws__local
question: 'Explain: Case Study 04: Semantic Search at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 499
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:45-05:00'
sources: []
---

**Situation & Task**  
At my previous role we were asked to build a semantic search layer for a global e‑commerce catalog that grew to 120 M SKUs. The goal was to return top‑k results in <200 ms while supporting natural language queries and multi‑language support, all on a pay‑as‑you‑go model.

**Action (Technical & Design)**  
* *Data ingestion*: Fetched product metadata from S3 nightly via Glue, transformed it with Athena, and stored vectors in DynamoDB (partition key = category).  
* *Vector generation*: Trained a Sentence‑Transformers model on SageMaker endpoints; the model was distilled to 50 M parameters and served via Lambda@Edge for low‑latency inference.  
* *Search engine*: Deployed Amazon OpenSearch Service with a custom cosine‑similarity scorer, sharded by category and replicated across three AZs for high availability.  
* *Cost & scalability*: Leveraged spot instances for training and on-demand for production; auto‑scaling groups kept nodes at 70 % utilization, cutting spend by 35 %.  
* *Monitoring*: Integrated CloudWatch metrics with a custom anomaly detector that triggered scaling and retraining alerts.

**Result**  
Within three months we achieved:
- **95 % recall** on benchmark queries (vs. 78 % baseline keyword search).  
- **Latency <180 ms** for 99.5 % of requests.  
- **$12k/month** cost savings vs. a traditional Elasticsearch cluster.

**Reflection & Leadership Principles**  
*Customer Obsession*: We iterated based on real‑world query logs, reducing friction for shoppers.  
*Ownership*: I owned the end‑to‑end pipeline, from data prep to production deployment, and drove cross‑team alignment.  

Bar‑raisers look for **ownership**, a deep dive into trade‑offs (spot vs. on‑demand, Lambda@Edge vs. EC2), quantified impact, and lessons learned when latency spikes during peak traffic—prompting us to introduce a pre‑cached hot‑vector layer that further reduced costs by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
