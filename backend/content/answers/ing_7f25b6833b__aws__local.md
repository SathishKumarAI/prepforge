---
qid: ing_7f25b6833b__aws__local
question: 'Explain: Packaged Training (Packing) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 486
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that needed to deploy a language model for legal‑document summarization across 10 regions. The baseline GPT‑4 model was too large (12 B parameters) and the fine‑tuning dataset (~2 M examples) risked overfitting while staying within our $5 k/month budget.

**Action – Packaged Training (Packing)**  
I introduced **“packing”**: we grouped related training examples into *knowledge packs* (e.g., contracts, court rulings, statutes). Each pack was a small, self‑contained dataset (≈50 K samples) and we trained a lightweight adapter module per pack using **AWS SageMaker Clarify + S3 for data versioning**.  
- **Architecture:** Base model in ECR + Lambda inference; adapters stored as layer artifacts on S3, loaded on demand via AWS Lambda@Edge.  
- **Scalability:** Parallel training jobs (10 packs) on Spot instances (p3.2xlarge), auto‑scaling by batch size.  
- **Availability & Cost:** Spot usage dropped GPU cost from $1.20/hr to $0.45/hr, keeping total fine‑tune spend <$4 k/month while achieving 15 % higher ROUGE scores than monolithic fine‑tuning.  

**Result**  
Rollout in Q3 led to a **25 % reduction in legal review time** and a **30 % lift in user satisfaction**, meeting our KPI of 95 % accuracy. I documented the process, enabling two other teams to replicate the strategy.

**Leadership Principles**  
- *Customer Obsession* – focused on faster, accurate summaries for end‑users.  
- *Ownership* – drove the entire pipeline from data prep to deployment, iterating on failures (e.g., adapter drift) and publishing lessons learned.  

Bar‑raiser cues: deep dive into adapter math, quantified cost/accuracy trade‑offs, and clear evidence of learning from initial overfitting attempts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
