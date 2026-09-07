---
qid: ing_92c4c0b4bf__aws__local
question: What Is the Difference Between QPS and the Number of Requests?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 382
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:59-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> 
> **Situation / Task** – In my last role I was asked to explain the difference between QPS (queries per second) and total request count for a real‑time recommendation engine that serves 5 M users daily.  
> 
> **Action** – I first clarified that “request” is any HTTP call received by the API gateway, regardless of its outcome, while *QPS* counts only successful, non‑throttled queries that reach the inference layer.  
> - Built a telemetry pipeline (API Gateway → CloudWatch → Kinesis → Lambda → Redshift) to capture both metrics in real time.  
> - Used CloudWatch Alarms to correlate spikes in request volume with QPS drops, revealing that during peak hours 30 % of requests were throttled by the SageMaker endpoint due to burst limits.  
> - Proposed scaling the endpoint using **SageMaker Multi‑Model Endpoint** with **Auto Scaling** and a *prewarm* Lambda to keep warm containers, reducing throttle rate from 15 % to <1 %.  
> 
> **Result** – After implementing the solution, QPS stabilized at 12 k/s while total requests rose to 18 k/s during peak. End‑to‑end latency dropped 40 %, and cost per inference fell by 22 %.  
> 
> **Bar‑raiser notes** – I demonstrated ownership (owning telemetry), deep dive into metrics, quantified impact (latency & cost), and learning from a throttling failure to improve system resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
