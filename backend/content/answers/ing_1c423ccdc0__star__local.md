---
qid: ing_1c423ccdc0__star__local
question: 'Explain: Self-Correction & Backtracking — Tree Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 307
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:53-05:00'
sources: []
---

**Situation** – In a recent project we were building an AI assistant that could generate legal contract drafts. Early tests showed the model often produced clauses with contradictory obligations, which caused a spike in manual review time from 30 % to 70 %.  

**Task** – I needed to add a mechanism so the LLM could self‑correct and backtrack when it detected internal inconsistencies, reducing rework by at least 50 %.

**Action** – I implemented a Tree‑of‑Thought (ToT) workflow: after each clause generation step, the model produced a “thought” list—possible next clauses plus a confidence score. A lightweight rule engine scanned these thoughts for conflicts against an ontology of legal constraints. If a conflict was detected, the system backtracked to the last non‑conflicting node and sampled alternative thoughts, effectively pruning the tree. I wrapped this in a PyTorch pipeline using `torch.distributed` so each branch ran on a separate GPU core, keeping latency under 1 s per clause.

**Result** – The rework rate dropped from 70 % to 32 %, cutting review time by 45 %. We also saw a 12 % increase in user satisfaction scores. I learned that combining probabilistic reasoning with rule‑based pruning can dramatically improve reliability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
