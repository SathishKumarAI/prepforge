---
qid: ing_8c58c0eb3a__aws__local
question: 'Explain: ⚙️ Backend Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 362
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My team was tasked with launching a recommendation engine for an e‑commerce platform that had seen a 12 % drop in conversion after a site redesign.

*Task:* As the backend lead, I needed to design a scalable AI pipeline that could ingest real‑time clickstream data and output personalized product scores within 200 ms per request.

*Action:*  
- **Data ingestion:** Built an AWS Kinesis Data Stream (1 M events/sec) feeding into Lambda for feature extraction.  
- **Model training:** Used SageMaker to train a LightGBM model nightly on S3‑stored click logs, auto‑tuning hyperparameters with Hyperparameter Tuner.  
- **Serving:** Deployed the model via SageMaker Endpoints behind an Application Load Balancer; added Redis (ElastiCache) as a cache layer for frequent queries.  
- **Observability:** Instrumented CloudWatch metrics and X-Ray traces to monitor latency and error rates, enabling automatic rollback on SLA breach.

*Result:* After rollout, conversion rose 18 % and page‑view latency dropped from 350 ms to 180 ms. Cost per recommendation stayed under $0.02 by using spot instances for training and scaling Lambda concurrency based on traffic peaks.

**What a bar‑raiser hears:**  
- Clear ownership of end‑to‑end flow.  
- Deep dive into AWS services, trade‑offs (SageMaker vs EC2), and cost impact.  
- Quantified lift in business metrics and evidence of failure mitigation (auto‑rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
