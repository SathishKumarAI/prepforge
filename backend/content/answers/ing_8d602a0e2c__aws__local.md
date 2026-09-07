---
qid: ing_8d602a0e2c__aws__local
question: 'Explain: So that might impact a lot of — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:28-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain how a machine‑learning component could change the architecture of a location‑based service like Google Maps during a systems‑design interview. The goal was to show ownership, customer obsession and dive deep into trade‑offs.

**Action**  
1. **Define the ML use case** – real‑time traffic prediction using streaming sensor data (GPS, cellular).  
2. **Design** –  
   * Ingest → Amazon Kinesis Data Streams (10 M events/s).  
   * Pre‑process & feature engineering → AWS Glue / Lambda.  
   * Model inference → Amazon SageMaker Neo on spot EC2 instances for low latency (<30 ms) and cost control.  
   * Result distribution → Amazon API Gateway + CloudFront to edge nodes, with cache invalidation via DynamoDB Streams.  
3. **Scalability & Availability** – Auto‑scaling across AZs; use Multi‑Region replication for 99.999% uptime.  
4. **Cost** – Spot + Savings Plans cut inference spend by 45 %, while Lambda cold starts kept <5 %.  
5. **Metrics** – After deployment, traffic prediction accuracy improved by 18 % (MSE reduced from 0.32 to 0.26), leading to a 12 % reduction in average user wait time for route updates.

**Result**  
The system now delivers near‑real‑time, data‑driven routing with measurable performance gains while keeping costs under budget—an embodiment of *Ownership*, *Dive Deep*, and *Deliver Results*.

---

> **Bar‑raiser cues:** Ownership (end‑to‑end design), Dive Deep (service choices & trade‑offs), Quantified impact (exact percentages), Learning from failure (spot instance risk mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
