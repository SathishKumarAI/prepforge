---
qid: ing_33002d1e22__aws__local
question: 'Explain: A Theory of Building Long-running Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:36-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were tasked with building a *long‑running autonomous agent* that could ingest streaming telemetry, learn policies on‑the‑fly, and execute actions in real time for an industrial IoT fleet (≈ 10 000 devices). The goal was to reduce manual intervention by 70 % and improve uptime from 92 % to > 99.5 %.

**Approach & Design**  
1. **Data Ingestion:** Kinesis Data Streams → Lambda → S3 for raw persistence.  
2. **Feature Store:** DynamoDB with TTL + Glue ETL to feed SageMaker Pipelines.  
3. **Model Training:** Continuous training via SageMaker Processing jobs triggered by CloudWatch Events on new data; we used the *Neural Architecture Search* feature to keep model size ≤ 200 MB.  
4. **Inference & Action Loop:** SageMaker Edge Runtime deployed to EC2‑instances in a Spot Fleet (cost‑optimized). Lambda polls DynamoDB Streams for state changes, routes to the agent via API Gateway.  
5. **Observability:** CloudWatch Metrics + X-Ray tracing; we set up automated anomaly detection on latency (> 200 ms) and accuracy drift.

**Result**  
- Achieved 99.7 % uptime after 6 months (up from 92 %).  
- Reduced manual tickets by **72 %**, saving ≈ $250k/yr in ops costs.  
- Model inference cost dropped 40 % using Spot Fleet and SageMaker Edge.

**Leadership Principles Reflected**  
- **Customer Obsession:** Directly improved customer uptime and reduced support burden.  
- **Ownership & Dive Deep:** I owned the full ML pipeline, debugged latency spikes by tracing X‑Ray segments, and iterated on feature engineering until error rates fell below 0.5 %.  

**Bar‑raiser Takeaway**  
Showed ownership by driving the end‑to‑end solution, deep technical dive into model scaling, quantified impact via clear metrics, and learned from early inference failures to shift to a more cost‑effective deployment strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
