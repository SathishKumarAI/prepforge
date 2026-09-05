---
qid: ing_66b2149841__eli5__local
question: 'Explain: Supported LLMs — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 175
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:58-05:00'
sources: []
---

Imagine you’re building a smart robot bartender that can chat and serve drinks. The bartender’s “brain” is an LLM (large language model) that knows how to talk, but it could also accidentally spill the wrong drink or give a recipe that isn’t safe. NeMo Guardrails is like a set of invisible safety rails you install around the bar. Each rail is a simple rule—“never mention alcohol to minors,” “do not suggest self‑harm”—that runs in parallel with the bartender’s brain. When the LLM tries to answer, the guardrail checks the reply first; if it violates a rule, the system blocks or rewrites it before it reaches you. Thus, the bartender can still be friendly and helpful, but always stays within safe boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
