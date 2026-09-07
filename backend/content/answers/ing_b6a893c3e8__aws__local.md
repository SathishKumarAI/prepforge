---
qid: ing_b6a893c3e8__aws__local
question: 'Explain: Stronger business continuity — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:58-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading a fraud‑detection ML pipeline for a fintech startup that processed ~3 M transactions/day. The SLA required 99.95 % uptime; any outage meant lost revenue and regulatory fines.

**Action (A)**  
1. **Define Disaster Recovery (DR) strategy**:  
   * *Business Continuity*: kept the model serving layer online by replicating inference endpoints in a second region with an automatic DNS fail‑over (Route 53).  
   * *Recovery Point Objective (RPO)*: < 5 min – used Cloud Spanner for training metadata and Cloud Pub/Sub snapshots to capture raw events.  
   * *Recovery Time Objective (RTO)*: < 30 min – automated Terraform stacks that spin up a new Vertex AI endpoint in the standby region, backed by Cloud Functions that re‑train on the latest checkpoints.  
2. **Cost/Scalability**: leveraged spot instances for retraining jobs and autoscaling GKE nodes for inference to keep spend <$300/month while handling 10× traffic spikes during DR drills.  

**Result (R)**  
After implementing this DR plan, we performed quarterly fail‑over tests with zero data loss and a total downtime of < 12 min, improving uptime from 99.90 % to 99.98 %. Revenue protection increased by $1.2 M annually, and the compliance audit passed without any infra‑related findings.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results** – ensuring uninterrupted fraud detection protects users and revenue.  
- **Ownership & Dive Deep** – I owned the end‑to‑end DR design, quantified RPO/RTO targets, and iterated based on real test data.

*Bar‑raiser takeaway*: Demonstrates ownership, deep technical detail, measurable impact, and learning from rigorous testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
