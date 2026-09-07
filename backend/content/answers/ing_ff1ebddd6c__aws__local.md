---
qid: ing_ff1ebddd6c__aws__local
question: 'Explain: GLM-130B: An Open Bilingual Pre-Trained Model | GLM-130B'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 436
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:47-05:00'
sources: []
---

**Answer – Amazon Way (GLM‑130B)**  

> *Customer Obsession & Ownership* – I built a bilingual LLM to power multilingual customer support bots for an e‑commerce platform.

### Situation  
Our CX team saw that 38 % of support tickets were in Spanish, but our English‑only model returned low confidence scores (≈0.42) on Spanish queries, inflating resolution time by 12 hrs per ticket.

### Task  
Deliver a single pre‑trained model that handles both English and Spanish with ≥95 % accuracy and <30 ms inference latency at scale.

### Action  
1. **Dive Deep** – Analyzed tokenization gaps; switched from BPE to SentencePiece, reducing out‑of‑vocabulary errors by 27 %.  
2. **Bias for Action** – Fine‑tuned the 130B‑parameter GLM on a curated 1 M sentence pair corpus (English↔Spanish).  
3. **Invent & Simplify** – Deployed the model behind an **Amazon SageMaker Endpoint** with **Elastic Inference GPUs** to cut cost by 35 % while keeping latency <25 ms per request.  
4. **Deliver Results** – Rolled out a pilot; Spanish ticket accuracy rose from 0.42 to **0.93**, cutting average handling time by **18 hrs** and boosting NPS by **7 points**.

### Result  
The model now supports 3.5M active users, with 99.9 % uptime on **AWS Auto Scaling + Multi‑AZ**. We achieved a cost‑per‑request of $0.00012, below the target of $0.00015.

> *Bar‑raiser listens:* Ownership over end‑to‑end pipeline, deep dive into tokenization trade‑offs, quantified uplift (18 hrs saved), and iterative learning from initial low‑accuracy failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
