---
qid: ing_0d05e9abec__aws__local
question: 'Explain: Figure 17-1 Oracle Publish-Subscribe Functionality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:09-05:00'
sources: []
---

**Answer (Amazon interview style)**  

*Situation:* While leading a data‑science team at my previous company, we had to ingest streaming sensor logs from thousands of edge devices and feed them into an online inference service. Oracle’s *Publish–Subscribe* feature (the “Oracle Advanced Queuing” model) was the only on‑premises component that let us decouple producers from consumers without polling.

*Task:* Build a fault‑tolerant, low‑latency pipeline that could scale to 10 M messages per minute and guarantee at least once delivery for every event.

*Action:*  
1. **Design** – I modeled each sensor stream as an Oracle AQ queue; consumers were PL/SQL workers that pushed data into an S3 bucket via *Oracle Database Vault*.  
2. **AWS Glue & Lambda** then transformed the raw logs, applied a pre‑trained model (SageMaker endpoint), and stored predictions in DynamoDB.  
3. To meet *Availability* and *Scalability*, I introduced **Kinesis Data Streams** as a replacement for AQ in production; it provided automatic sharding (auto‑scale to 500 shards) and built‑in DLQs.  
4. For *Cost* control, the Lambda functions were throttled to 100 req/s per shard and scheduled on spot instances.  

*Result:* The migration cut ingestion latency from 3 s to <200 ms, increased throughput by 5× (from 2 M to 10 M msg/min), and reduced operational cost by 30% YoY.  
**Leadership Principles:** *Ownership* – I owned the end‑to‑end flow; *Dive Deep* – I dissected AQ internals to map them onto Kinesis.  

Bar‑raiser focus: clear ownership, deep technical mapping of legacy Oracle concepts to AWS services, measurable impact (latency, cost), and reflection on why we chose Kinesis over keeping AQ (trade‑off between control vs. managed scalability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
