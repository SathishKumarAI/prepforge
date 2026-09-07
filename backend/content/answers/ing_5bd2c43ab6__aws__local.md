---
qid: ing_5bd2c43ab6__aws__local
question: 'Explain: to start with perfect um yeah so — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 455
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:50-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a scalable “smart parking garage” platform that could serve 20 000 cars/day across multiple sites while keeping wait times under 30 s and occupancy accuracy >99%.  

**Action (Design)**  
1. **Data ingestion** – Cameras + IR sensors stream video to an **Amazon Kinesis Video Streams** edge gateway; each frame is sent to a **Lambda@Edge** function that calls Amazon Rekognition for vehicle detection, returning bounding‑box coordinates.  
2. **State & routing** – Results are published to **SNS** → **SQS** → **EC2 Auto‑Scaling group** running a stateless **FastAPI** service that updates an in‑memory Redis cache (Amazon ElastiCache) and writes occupancy events to **DynamoDB** (partition key = garage, sort key = timestamp).  
3. **User API** – A low‑latency **API Gateway** exposes `/reserve`, `/status`; behind it a **Lambda** pulls from Redis for real‑time availability.  
4. **Analytics & alerts** – CloudWatch metrics trigger an SNS alarm if occupancy drops below 10% or above 90%, sending notifications to the operations dashboard (Amazon QuickSight).  

**Result**  
After pilot deployment, wait times dropped from 45 s to 22 s (51% improvement) and accuracy hit 99.4%. Cost per processed vehicle was $0.003, below the target of $0.005.  

**Leadership Principles**  
- **Customer Obsession** – Designed for instant feedback & minimal driver friction.  
- **Ownership** – Built end‑to‑end pipeline; iterated on sensor placement after initial false‑positive spike (learned to adjust Rekognition confidence thresholds).  

*Bar‑raiser cue*: Showed deep dive into latency bottlenecks, quantified impact, and learned from early detection errors—exactly what we look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
