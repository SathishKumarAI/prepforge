---
qid: ing_8c3afcc75c__aws__local
question: 'Explain: System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 517
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:59-05:00'
sources: []
---

**Situation & Task (Owner, Dive Deep)**  
I led a cross‑functional squad that built the core order‑routing engine for a food‑delivery app during a 6‑month sprint. The goal was to reduce average “order‑to‑pickup” time by 25 % while supporting 2 M concurrent users in peak hours.

**Action (Bias for Action, Invent & Simplify)**  
1. **Requirements**: Real‑time ETA calculation, dynamic restaurant‑courier matching, fault tolerance.  
2. **Design**:  
   * **Event‑driven microservices** on **Amazon ECS Fargate** with **AWS App Mesh** to decouple order ingestion from routing logic.  
   * **Kinesis Data Streams** for ingesting order events; **Lambda** transforms and pushes to a **DynamoDB Global Table** (partitioned by city) that stores live courier locations.  
   * **Greengrass‑enabled edge devices** on couriers’ smartphones push location via MQTT to Kinesis, ensuring sub‑second latency.  
   * **Elastic MapReduce** clusters run nightly ML jobs in **Amazon SageMaker** to update courier‑restaurant affinity scores; results are cached in **ElastiCache Redis** for 5 s TTL.  
3. **Scalability & Availability**: Auto‑scaling groups span three AZs, using **ALB** with health checks; DynamoDB’s on‑demand capacity handles burst traffic without provisioning spikes.  
4. **Cost Trade‑offs**: Switching from EC2 to Fargate cut infra cost by 30 % and eliminated over‑provisioning during off‑peak.

**Result (Deliver Results)**  
- Avg. order‑to‑pickup dropped from 12 min to 8.5 min (≈29 % improvement).  
- System sustained >1.2 M concurrent orders with <0.01 s latency spike.  
- Operational cost reduced by $250K annually.

**Learning**: The first run exposed a bottleneck in the courier‑location ingestion path; we introduced Kinesis buffering and re‑architected the Lambda to handle back‑pressure, demonstrating iterative improvement—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
