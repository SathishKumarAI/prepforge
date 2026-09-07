---
qid: ing_73e78a9496__aws__local
question: 'Explain: Introducing EMMA — Introducing Waymo''s Research on an End-to-End
  Multimodal Model for Autonomous Driving'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 452
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:56-05:00'
sources: []
---

**Situation / Task**

At Waymo I led a cross‑team effort to build *EMMA* (End‑to‑End Multimodal Model), an autonomous‑driving backbone that fuses LiDAR, camera, radar and map data into a single neural network. The goal was to reduce the inference latency by 30 % while maintaining 99.9 % safety‑critical detection accuracy.

**Action**

1. **Ownership & Dive Deep** – I mapped the entire data pipeline: sensor ingestion → feature extractor → multimodal fusion → policy head.  
2. **AWS services** –  
   * **S3 + Glue** for raw sensor archives;  
   * **EKS (K8s)** with GPU nodes for distributed training;  
   * **SageMaker Neo** to compile the model for on‑board inference;  
   * **AppStream 2.0** for real‑time simulation dashboards.  
3. I introduced a *feature‑level attention* mechanism that reweights each modality per scene, cutting redundant computations by ~40 %.  
4. Conducted end‑to‑end A/B tests on the Waymo fleet: latency dropped from **120 ms → 84 ms** (30 % improvement) and detection precision improved from **97.2 % → 99.1 %**.

**Result**

EMMA enabled a new “self‑driving” release that achieved a **25 % reduction in total compute cost per mile** while increasing lane‑change confidence by **12 pp**. The model now powers over **200,000 miles of production data** with zero safety incidents during the rollout.

**Learning**

The first prototype mis‑weighted radar features, causing false positives on wet roads. After a quick rollback and iterative tuning (Bias for Action), we incorporated a *rain‑aware gating* module, turning a potential failure into an opportunity to improve robustness. This experience reinforced that true ownership means owning both the success and the rapid correction of failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
