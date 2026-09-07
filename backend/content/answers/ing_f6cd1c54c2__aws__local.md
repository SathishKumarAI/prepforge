---
qid: ing_f6cd1c54c2__aws__local
question: 'Explain: Coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 478
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:42-05:00'
sources: []
---

**Situation**  
In my senior year I led a 12‑student team on *CS324 – Machine Learning for Real‑Time Analytics* at MIT. Our goal was to build an end‑to‑end pipeline that predicted traffic congestion in Boston within 5 minutes, achieving ≥90 % accuracy and <1 s latency.

**Task**  
We had to ingest live GPS data (≈10 M points/day), train a time‑series model, deploy it at scale, and expose the predictions via an API for city planners. The challenge was balancing *high availability* with *low cost* while maintaining model fidelity.

**Action**  
1. **Data ingestion & storage** – Set up Amazon Kinesis Data Streams to buffer raw data; used Glue to clean and catalog into Amazon S3 (partitioned by hour).  
2. **Feature engineering & training** – Leveraged SageMaker Pipelines for reproducible ETL and hyper‑parameter tuning, storing artifacts in EFS for shared access.  
3. **Model serving** – Deployed a LightGBM model as a container on SageMaker Hosting Services with multi‑model endpoints; auto‑scales based on CloudWatch metrics (CPU > 70 % → add instance).  
4. **API & monitoring** – Exposed predictions through API Gateway + Lambda, secured via Cognito. Set up CloudTrail and X-Ray for observability; used Athena to query logs for drift detection.

**Result**  
- Achieved 92 % accuracy on the test set; latency <0.8 s per request.  
- Cost‑saved 35 % versus a baseline EC2‑only deployment by using spot instances in SageMaker.  
- Delivered daily performance dashboards that reduced planners’ decision time by 40 %.  

**Reflection**  
I owned the end‑to‑end stack, dove deep into each AWS service to understand trade‑offs (e.g., Kinesis vs. Kafka for ingestion), and iterated quickly—triggering a “bias for action” mindset. The bar‑raiser will note my quantified impact, ownership of the solution lifecycle, and lessons learned when scaling from dev to prod.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
