---
qid: ing_9c5a5871e9__aws__local
question: 'Explain: so we did solve the problem so — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 388
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:22-05:00'
sources: []
---

**Situation / Task**  
I was tasked with validating a new ML inference pipeline that would run at scale on an autoscaling cluster of EC2 instances. The risk was that race conditions in the distributed training job could silently corrupt model weights and lead to 5‑% accuracy drop, which would be unacceptable for our customer‑facing recommendation service.

**Action**  
I built a deterministic simulation layer inspired by Will Wilson’s “Testing Distributed Systems” paper. I:

1. **Captured all nondeterministic inputs** (random seeds, network delays, message order) into a *simulation context* stored in DynamoDB.
2. Replayed the entire job on an isolated Docker‑based simulator that logged every state transition to CloudWatch Logs.
3. Wrote a Lambda function that compared replayed outputs against production runs and surfaced any divergence via SNS alerts.

I leveraged **SageMaker Pipelines** for orchestration, **EFS** for shared state, and **Step Functions** to coordinate the simulation workflow. The system ran in <10 min per cycle, cost <$5, and had 99.9% availability due to built‑in retries.

**Result**  
The deterministic replay uncovered a subtle message ordering bug that reduced accuracy by 4.3%. Fixing it restored performance to >97% and prevented an estimated $1M in lost revenue over the next quarter.  

---

*Leadership Principles*: **Customer Obsession** (prevent quality loss), **Ownership** (built end‑to‑end test harness), **Dive Deep** (analyzed low‑level state transitions).  
Bar‑raiser focus: depth of design, quantifiable impact, and lessons learned from the discovered failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
