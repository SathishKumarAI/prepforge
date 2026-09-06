---
qid: ing_d0a332192e__fp__local
question: 'Explain: Reduced recovery costs — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 428
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:08-05:00'
sources: []
---

**Disaster Recovery (DR) for Machine Learning on Google Cloud**

At its core, DR is a *risk‑minimisation* problem: you must guarantee that an ML pipeline—data ingestion → feature engineering → model training and serving—continues operating after an outage while keeping the *expected cost of recovery* below a budget.  
The fundamental constraint is that every component has two independent failure modes:

1. **Infrastructure failure** (compute, storage, networking)  
2. **Data loss or corruption**

Google Cloud solves this by **decoupling state from compute** and enforcing **immutable checkpoints** at the data layer. Data lives in Cloud Storage or BigQuery with *cross‑region replication*; training jobs run on managed services like Vertex AI that automatically spin new workers from a pre‑built image whenever a node dies. The recovery cost is therefore:

\[
C_{\text{rec}} = \underbrace{C_{\text{compute\,restart}}}_{\text{low, automatic}} + \underbrace{C_{\text{data\,restore}}}_{\text{negligible due to replication}}
\]

Because the *only* expensive term is re‑training from scratch—which is avoided by checkpointing model weights every epoch—recovery times drop from hours to minutes.  

**Non‑obvious insight:**  
Most people focus on “backup” as a one‑time snapshot. In ML, **checkpoint frequency** is the true lever: by storing intermediate model states in a cheap, highly available store (e.g., Cloud Storage), you convert a catastrophic *data loss* into an inexpensive *re‑execution* of just the missing epochs, not the entire training pipeline. This subtle shift turns DR from a reactive, costly operation into a proactive, low‑margin optimisation problem that Google Cloud’s managed services solve automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
