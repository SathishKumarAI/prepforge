---
qid: ing_3d909dbff6__aws__local
question: 'Explain: Multi-Agents: What''s Actually Working | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 474
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:01-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team to build an autonomous recommendation engine that used *multi‑agent reinforcement learning* (MARL) for real‑time content curation on our e‑commerce platform. The goal was to increase click‑through rate (CTR) by 15% while keeping inference latency under 200 ms at peak traffic.

**Action & Design**  
1. **Problem Framing** – I clarified that each agent represented a distinct content type and the environment was the user session graph.  
2. **AWS Stack** –  
   * **Amazon SageMaker Pipelines** for end‑to‑end training, using the `sagemaker-marl` framework to orchestrate parallel agent simulations on GPU‑enabled `ml.p3dn.24xlarge`.  
   * **Amazon Elastic Inference (EI)** attached to a **SageMaker Neo‑compiled model** reduced inference cost by 70% while maintaining <200 ms latency.  
   * **Amazon DynamoDB Streams + Lambda** fed real‑time user interactions back into the agents for on‑the‑fly policy updates, ensuring freshness without full retraining.  
3. **Scalability & Availability** – We used **Auto Scaling Groups** with Spot Instances for training and **AWS Fargate** for inference containers to avoid over‑provisioning during traffic spikes.  

**Result**  
After a 12‑week rollout, CTR rose by **18%**, surpassing the target. Latency stayed below 180 ms on average, and we cut inference spend by **55%** compared to the baseline.

---

### Leadership Principles Reflected
- **Customer Obsession** – focused on real user engagement metrics (CTR).  
- **Dive Deep & Ownership** – built end‑to‑end pipeline, debugged agent drift, and iterated on policy updates.  

The bar‑raiser will note my ownership of the entire ML lifecycle, deep dive into MARL dynamics, quantified impact on business KPIs, and continuous learning from failed agent policies to refine reward shaping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
