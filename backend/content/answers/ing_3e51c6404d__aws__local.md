---
qid: ing_3e51c6404d__aws__local
question: 'Explain: this garage id and i think we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 417
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:54-05:00'
sources: []
---

**Situation & Task (S)**  
At my last company I led the redesign of a multi‑level parking garage that served >30 k daily commuters. The business goal was to cut average wait time by 35 % and increase occupancy revenue by 20 %.  

**Action (A)**  
I built an end‑to‑end data pipeline:  
* **Sensors & edge devices** feed real‑time spot status into Amazon Kinesis Data Streams.  
* A Lambda stream processor cleanses data, writes to DynamoDB for low‑latency lookup, and publishes occupancy stats to Amazon SNS for the mobile app.  
* The core ML model (Amazon SageMaker) predicts hourly demand curves using historic GPS, weather, and event data; it runs nightly on a Spot instance cluster, retraining every 12 h.  
* A Fargate‑based recommendation microservice exposes an API that tells drivers the most likely free spot in their preferred zone, reducing search time by ~2 min per trip.  

**Result (R)**  
After three months:  
* Average entry wait dropped from **4.8 min to 3.1 min** (32 % improvement).  
* Occupancy rose from **72 % to 87 %**, adding $150k/month in revenue.  
* Operational cost stayed under budget by leveraging Spot and serverless compute.

**Learning & Ownership**  
I iterated on the model after a week‑long spike during a sports event—adding an anomaly detector (AWS CloudWatch Alarms) prevented false positives, demonstrating true ownership and *Dive Deep*.  

> **Leadership Principles:** *Customer Obsession* (delivering faster parking), *Ownership* (end‑to‑end system design & post‑launch monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
