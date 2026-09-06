---
qid: ing_a7825776a6__fp__local
question: 'Explain: Choosing a pattern — Multi-agent patterns in LlamaIndex | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 384
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:18-05:00'
sources: []
---

**Why a “multi‑agent” pattern is needed**

A single large language model (LLM) can answer queries but it mixes *knowledge* and *reasoning*.  
When the user wants to combine structured data (e.g., a database or graph), unstructured text, and domain‑specific rules, the LLM alone cannot guarantee correctness: it may hallucinate facts or ignore constraints.  

**Principle of modular optimisation**

Treat each knowledge source as an **agent** that optimises its own objective:
* *Data agent* retrieves relevant rows under strict schema guarantees.  
* *Text agent* summarises free‑text passages with fidelity to the source.  
* *Logic agent* applies domain rules or external APIs.

The overall system is a **joint optimisation problem**: maximise user satisfaction subject to consistency constraints from each agent. By delegating, we reduce the search space for the LLM—its only job becomes *coordinating* and *integrating*, not generating everything from scratch.

**Non‑obvious insight**

If agents are trained or tuned on *their own loss functions*, the final response can be improved by **cross‑agent loss weighting**. By measuring inter‑agent disagreement (e.g., KL divergence between their outputs), we dynamically re‑weight each agent’s contribution, steering the system toward consensus rather than blindly trusting a single source. This adaptive weighting is rarely mentioned but yields substantial gains in factual accuracy and robustness.

Thus, LlamaIndex’s multi‑agent pattern emerges naturally from optimisation theory: partition the problem into specialized agents, let them optimise locally, and fuse their outputs with a principled coordination layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
