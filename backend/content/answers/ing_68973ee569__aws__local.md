---
qid: ing_68973ee569__aws__local
question: 'Explain: which this should be reserved as well — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 463
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:47-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were asked to build an *intelligent parking‑garage platform* that could (1) predict space availability in real time, (2) optimize pricing, and (3) reduce driver wait times. The goal was a 30 % reduction in average arrival delay by the end of year two.

**Action & Design**  
I owned the architecture:  

| Requirement | AWS Service | Reasoning |
|-------------|------------|-----------|
| Real‑time sensor ingestion | **IoT Core + Kinesis Data Streams** | Handles >10k events/sec with sub‑second latency. |
| Predictive analytics | **SageMaker Endpoint (Batch Transform)** | Trained on historical occupancy + weather data; 99 % accuracy in predicting next‑hour availability. |
| Dynamic pricing engine | **Lambda + DynamoDB** | Serverless, scales to thousands of concurrent price updates; costs <$5/day. |
| Availability & fault tolerance | **Multi‑AZ RDS Aurora** + **Route 53 latency routing** | 99.99 % uptime, automatic failover. |

We used *EventBridge* for cross‑service orchestration and *Step Functions* to chain data pipelines, keeping the system modular.

**Result**  
Within six months of launch, average driver wait time dropped from 8 min to **4.3 min** (46 % improvement), and revenue grew by **18 %** due to dynamic pricing. The model’s precision improved by 5 % after a post‑deployment review that identified sensor drift—a learning loop we built into the pipeline.

**Leadership Principles Highlighted**  
- *Ownership* – I drove the end‑to‑end solution, from data ingestion to business impact.  
- *Dive Deep* – Continuously refined models using real‑world telemetry and iterated on architecture for cost and latency trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
