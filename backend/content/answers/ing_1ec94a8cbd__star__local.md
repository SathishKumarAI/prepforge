---
qid: ing_1ec94a8cbd__star__local
question: 'Explain: Next Steps — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:02-05:00'
sources: []
---

**Situation** – While working on a flagship legal analytics platform at BigLawBench, we launched a new NLP model that predicted case outcomes from briefs. Within two weeks of deployment, the QA team flagged dozens of “hallucinated” facts—claims about statutes or precedent that didn’t exist in the source documents. The product manager warned that any hallucination could erode client trust and risk regulatory fines.

**Task** – I was tasked with designing a rapid mitigation plan: reduce hallucinations below 2 % while keeping inference latency under 150 ms for our real‑time dashboard, and build an audit trail to satisfy compliance audits.

**Action** – First, I added a lightweight “fact‑checking” submodule that cross‑references model outputs against a curated knowledge graph of statutes (Neo4j) using a cosine similarity filter. Next, I implemented reinforcement learning from human feedback (RLHF): senior paralegals annotated 5 k hallucination samples; we fine‑tuned the language head with Proximal Policy Optimization to penalize unverified claims. Finally, I exposed an “explainability” API that logs attention weights for every prediction so auditors can trace how a conclusion was reached.

**Result** – After two sprints, hallucinations dropped from 12 % to 1.3 %, latency increased by only 18 ms, and the audit report praised our transparent evidence‑chain feature. I learned that combining lightweight knowledge graphs with RLHF can tame generative models in high‑stakes domains without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
