---
qid: ing_32097798d3__fp__local
question: 'Explain: Async API — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails is
  an open-source toolkit for easily adding programmable guardrails to LLM-based conversational
  systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 312
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:13-05:00'
sources: []
---

**Why “async” matters in NeMo Guardrails**

At its core, a conversational LLM is a *streaming* inference engine: tokens arrive one by one, and downstream components must react immediately to keep the dialogue fluid. A synchronous API forces the caller to wait for an entire response before any guardrail can inspect or modify it—this serializes everything and stalls the user interface.

The asynchronous design solves this by treating **each token as an event** in a producer‑consumer pipeline. The inference model produces tokens, the guardrail consumer subscribes to the stream, applies policy checks (e.g., toxicity filters, domain constraints), and can emit *corrections* or *interruptions* on the fly. This is essentially a real‑time optimization problem: minimize latency while maximizing safety. By decoupling production and consumption, the system can scale horizontally—multiple guardrails run in parallel, each with its own priority queue, without bottlenecking the LLM.

**Non‑obvious insight:**  
Because tokens are processed incrementally, guardrails can *predict* downstream risk before the full answer is generated. A small prefix that already violates policy allows early termination or partial redaction, saving compute and improving user experience—something a batch API cannot achieve. Thus, async APIs aren’t just about speed; they enable proactive safety in generative AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
