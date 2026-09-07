---
qid: ing_d70e831cf3__aws__local
question: 'Explain: that and um to be able to — Amazon System Design Interview: Design
  Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 436
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:37-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a city‑wide smart parking system that could serve **10 k concurrent users**, reduce search time by 70 %, and integrate with Amazon’s existing fleet of delivery drones.

**Action – System Design**  
*Front‑end*: React Native + AWS Amplify (Auth, GraphQL) for real‑time UI.  
*Back‑end*:  
- **API Gateway + Lambda** (Node.js) to expose parking spot queries.  
- **Amazon DynamoDB** with a Global Secondary Index on `location` for sub‑100 ms lookups.  
- **AWS IoT Core** to ingest sensor data from parking meters; messages are routed via **Rule Engine** into an **SQS queue**.  
- A **Kinesis Data Stream** feeds into **Amazon SageMaker Endpoint** that predicts spot availability windows (ML model trained on historical usage).  
*Edge*: **Greengrass** nodes on parking sensors cache the latest predictions locally to reduce latency when the cloud is unreachable.

**Result**  
After a 3‑month pilot, average search time dropped from **4.2 min** to **1.1 min** (73 % reduction). The system handled 12 k concurrent requests with <99.9 % availability while keeping monthly spend under **$15K**, 30 % below the baseline infrastructure estimate.

**Leadership Principles**  
- *Customer Obsession*: We measured real user wait times and iterated until we hit a 70 % improvement.  
- *Ownership*: I owned the end‑to‑end architecture, from sensor firmware to ML model retraining pipelines.

**Bar‑raiser Takeaway**  
Demonstrated deep dive into AWS services (IoT, DynamoDB, SageMaker), quantified impact with real metrics, and learned that edge caching was essential when network latency spikes during peak hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
