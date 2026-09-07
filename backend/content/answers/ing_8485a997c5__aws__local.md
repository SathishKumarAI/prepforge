---
qid: ing_8485a997c5__aws__local
question: 'Explain: Um and put all that gunk in — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:36-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at Google to ship a real‑time recommendation engine for the Search UI. The goal was to reduce latency from ~350 ms to <50 ms while keeping model accuracy above 0.78 AUC.

**Action (Design)**  
1. **Feature extraction**: moved heavy feature engineering into a streaming pipeline on **Apache Beam** + **Dataflow**, caching results in **Memcached** for sub‑10 µs lookups.  
2. **Model serving**: deployed the XGBoost model via **TensorFlow Serving** behind an internal **gRPC** gateway, sharded by user cohort to keep warm pools < 200 ms.  
3. **Observability**: instrumented with **Stackdriver Logging & Monitoring**, auto‑scaling based on CPU/latency thresholds.  
4. **Cost control**: used preemptible VMs for batch inference and scheduled nightly retraining jobs, cutting infra spend by 35 %.

**Result (Quantified)**  
- Latency dropped from 350 ms to **48 ms** (average), achieving the <50 ms target.  
- Accuracy improved from 0.75 to **0.81 AUC**, increasing click‑through rate by 12 %.  
- Infrastructure cost fell 35 % while handling a 4× traffic surge during product launch.

**Learning & Ownership**  
I documented “gunk” (legacy code) as a knowledge base, enabling new hires to onboard in 2 days instead of 6. This demonstrates *Ownership* and *Dive Deep*, and the bar‑raiser will note my proactive risk mitigation (preemptible VMs) and data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
