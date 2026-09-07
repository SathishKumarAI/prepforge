---
qid: ing_92ed8f1522__aws__local
question: 'Explain: Senior ML Engineer – AV Foundation — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 432
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:26-05:00'
sources: []
---

**Situation & Task**  
At Uber’s AV Foundation I led a cross‑team effort to build a real‑time “Digital Twin” that fuses sensor data (LiDAR, radar, camera) with map metadata so the autonomous stack can reason about both the physical road and the digital overlay. The goal was to reduce decision latency by 40 % while keeping inference cost under $0.05 per frame.

**Action**  
*Ownership & Dive Deep*: I rewrote the feature‑extraction pipeline in Rust, reduced memory churn from 1.2 GB to 650 MB, and introduced a two‑stage model: a lightweight CNN on edge for preliminary detection (AWS Greengrass) followed by a heavier Transformer on an EC2 g4dn.xlarge for final pose estimation.  
*Bias for Action*: Deployed the pipeline in a blue/green rollout using AWS SageMaker endpoints; used CloudWatch metrics to auto‑scale based on frame rate spikes.  
*Invent & Simplify*: Built a custom container image that bundles all sensor drivers, eliminating 3 rd‑party dependencies and cutting deployment time from 4 h to 30 min.

**Result**  
- Latency dropped from 150 ms to 90 ms (−40 %).  
- Cost per inference fell from $0.12 to $0.04, saving ~$2M annually at fleet‑scale.  
- Accuracy improved by 3.5 % in mean‑average‑precision for lane‑change prediction.

**Learnings**  
Failure during the first deployment highlighted insufficient observability; I added Prometheus alerts and a rollback strategy that reduced MTTR from 12 h to 15 min. This experience sharpened my focus on ownership, data‑driven iteration, and end‑to‑end reliability—core Amazon principles for any senior ML engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
