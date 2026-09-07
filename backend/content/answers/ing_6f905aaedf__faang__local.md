---
qid: ing_6f905aaedf__faang__local
question: 'Explain: Tier 2 - LLM judge with policy-as-prompt'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 480
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:37-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Tier 2 – an LLM judge that uses “policy‑as‑prompt”*. I’ll assume the context is a system where large language models (LLMs) evaluate content or decisions, and Tier 2 refers to a higher‑confidence layer that applies policy rules encoded directly in the prompt. The goal is to convey what it does, why it matters, and how it differs from simpler rule engines.

**Approach**  
1. Define “policy‑as‑prompt” and its role in LLM judging.  
2. Contrast Tier 1 (simple heuristic checks) vs Tier 2 (contextual policy reasoning).  
3. Highlight key benefits: flexibility, up‑to‑date policy, minimal retraining.  
4. Note implementation considerations: prompt design, safety mitigations, auditability.

**Depth**  
A *Tier 2 LLM judge* receives a content snippet and a specially crafted prompt that embeds the current policy (e.g., “Do not allow harassment; must be factual”). The model processes both inputs jointly, generating an outcome (“Accept”, “Reject”) plus rationale. Because the policy lives in the prompt, updating rules is as simple as editing text—no model retraining needed. This layer sits above Tier 1, which may flag obvious violations via regex or static checks, and below a human‑reviewer fallback for edge cases.

**Edge Cases**  
- Prompt drift: poorly worded policies can mislead the LLM.  
- Ambiguous content: the model may produce uncertain answers; we must set confidence thresholds.  
- Adversarial prompts that try to override policy clauses.

**Optimize & Communicate**  
Iteratively refine prompt templates using few‑shot examples, monitor false‑positive/negative rates, and log decisions for audit. When explaining this system to stakeholders, emphasize its agility (policy updates in minutes), its human‑readable rationale (helps compliance teams), and its scalability (no per‑rule code). Conclude with a quick demo of the prompt pipeline and key metrics—accuracy, latency, cost per inference—to demonstrate production readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
