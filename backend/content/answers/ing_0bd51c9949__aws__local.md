---
qid: ing_0bd51c9949__aws__local
question: 'Explain: 2.2 On-Policy Distillation — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 632
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:30-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – the end‑user is a model that runs in production and needs to be fast, cheap, and reliable.  
*Dive Deep* – we dissect the distillation pipeline to understand every trade‑off.

---

### Situation
I was tasked with reducing inference latency for a 1 B parameter LLM used in a real‑time recommendation engine. The team’s baseline was a nightly batch distillation that produced a 10× smaller student, but it required a full re‑run of the policy each time we updated the teacher, causing a 48 h turnaround.

### Task
Implement an **On‑Policy Distillation (OPD)** pipeline that:
1. Learns from the teacher *while* the student is actively interacting with users.
2. Maintains model quality within 1.5% loss in BLEU for text generation and preserves throughput (>2000 QPS).

### Action
1. **Define a “policy roll‑out” window**: every hour we capture 10k user interactions, label them with the teacher’s soft logits (temperature = 2), and append to a replay buffer.
2. **Dual‑optimizer scheme**  
   * Primary loss = cross‑entropy against ground truth.  
   * Secondary loss = KL divergence to teacher logits.  
   Weighted by λ(t) that decays linearly from 0.7 → 0 over 72 h, ensuring the student doesn’t overfit early noise.
3. **AWS Architecture**  
   * **SageMaker Ground Truth** for labeling on‑the‑fly.  
   * **DynamoDB Streams + Lambda** to ingest interactions and trigger training jobs.  
   * **ECS Fargate** with GPU Spot instances (cost ≈ $0.12/h) to run 4 parallel training jobs, each consuming a shard of the replay buffer.  
   * **S3 EventBridge** triggers model registry updates; new checkpoints are pushed to SageMaker Endpoint for live A/B testing.
4. **Scalability & Availability** – The replay buffer is sharded across multiple DynamoDB tables; failover uses cross‑region replication, ensuring zero downtime if a region fails.

### Result
- Latency dropped from 120 ms → 35 ms (3× faster).  
- Cost per inference fell by 60% due to smaller model size and spot GPU usage.  
- BLEU score degradation was only 0.9%, well within the SLA.  
- Deployment cycle shortened from 48 h to <4 h, allowing weekly policy updates.

### Learnings
OPD is essentially a continual learning loop; we had to carefully balance exploration (teacher guidance) vs exploitation (real user data). The λ(t) schedule emerged after ablation studies—without it the student over‑fitted early noise and performance plummeted by 3%. Future work: incorporate uncertainty estimates from Monte Carlo Dropout to weight teacher logits dynamically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
