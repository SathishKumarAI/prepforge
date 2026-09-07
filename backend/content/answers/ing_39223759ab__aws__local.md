---
qid: ing_39223759ab__aws__local
question: 'Explain: Model Sizes — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 370
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:02-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of an on‑prem NLP pipeline to a serverless architecture on AWS so we could serve up to **1 M requests/day** while keeping latency < 200 ms.

**Action**  
I first *dived deep* into the transformer internals: token count, hidden layers, and parameter sparsity. I benchmarked three family sizes—7B, 13B, and 30B—using SageMaker’s `TransformerInference` endpoint with **GPU‑P3 instances** vs. **Inferentia2**.  
I built a cost‑model in Python that projected hourly spend (e.g., 7B ≈ $0.12/hr, 13B ≈ $0.24/hr) and compared it to a *serverless* `AWS Lambda` + `EFS` approach for small queries. I then deployed the **30B** model on an **Inference Scheduler** with auto‑scaling across **us-east-1**, ensuring high availability via multi‑AZ endpoints.

**Result**  
The new system cut per‑request cost from $0.0008 to $0.0004 (50 % savings) and reduced average latency by 35 %. We handled peak traffic without manual intervention, satisfying the *Customer Obsession* principle.  

**Learnings**  
I realized that model size trade‑offs aren’t just about accuracy—they impact cloud spend and latency. Future iterations will explore **parameter‑efficient fine‑tuning** (e.g., LoRA) to keep performance while shaving compute costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
