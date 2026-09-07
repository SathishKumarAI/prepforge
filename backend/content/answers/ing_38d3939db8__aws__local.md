---
qid: ing_38d3939db8__aws__local
question: 'Explain: DoorDash AI-Assisted and Custom Rounds — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:22-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In a recent DoorDash interview I was asked to describe the “AI‑Assisted & Custom Rounds” feature that uses machine learning to surface personalized delivery offers to drivers.  
> 
> **Task:** Explain how we would architect this system on AWS, focusing on customer obsession and ownership while delivering measurable impact.  
> 
> **Action:**  
> 1. **Data ingestion** – Use Kinesis Data Streams to capture real‑time driver telemetry (location, speed, rating).  
> 2. **Feature store** – Store engineered features in SageMaker Feature Store; keep a 30‑day retention for quick training and a 6‑month archive on S3.  
> 3. **Model training** – Train an incremental XGBoost model nightly with SageMaker Pipelines, pushing the new artifact to SageMaker Endpoint (latency < 50 ms).  
> 4. **Inference & personalization** – Serve predictions via API Gateway + Lambda, tagging each offer with a confidence score; use DynamoDB Global Tables for low‑latency lookups across regions.  
> 5. **Feedback loop** – Capture acceptance rates and store back in Kinesis for re‑training, closing the loop within 24 h.  
> 
> **Result:** Pilot deployment reduced the time drivers spent waiting for offers by 37 % (from 12 s to 7.8 s) and increased offer acceptance from 18 % to 26 %, boosting DoorDash revenue by ~$4M annually.  
> 
> **Reflection:** The biggest learning was that caching stale features in DynamoDB caused a 15 % drop in prediction accuracy; switching to SageMaker Feature Store fixed it—demonstrating the *Dive Deep* principle and continuous ownership of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
