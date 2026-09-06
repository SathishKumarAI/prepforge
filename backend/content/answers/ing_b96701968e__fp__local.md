---
qid: ing_b96701968e__fp__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 337
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:38:19-05:00'
sources: []
---

**Why a two‑tier pipeline matters**

At the heart of any AI service is *information filtering*. A cheap large language model (LLM) at Tier 1 acts as a **pre‑selector**: it scans millions of user prompts, scoring each for relevance, safety, and expected downstream cost. The only thing it needs to do well is rank; it can afford a modest accuracy budget because its output will be discarded if the score falls below a threshold.  

When Tier 1 flags a trace as “worthy,” we hand it to a **high‑fidelity LLM** (Tier 2). This model has larger context windows, richer embeddings, and more compute per token—exactly what’s needed for nuanced reasoning or creative generation. By restricting this expensive step to a small fraction of traces, the system achieves *amortized efficiency*: most tokens are processed by the cheap tier, while only high‑value requests trigger the costly one.

**Deeper principle:**  
This mirrors **branch‑and‐bound** in combinatorial optimization—prune early with inexpensive bounds, then explore promising branches thoroughly. The non‑obvious insight is that the *quality of the pre‑selector* can be deliberately lowered; even a noisy Tier 1 can save huge compute if its false‑negative rate remains below the cost of a full run. Thus, the system’s overall throughput scales linearly with the cheap tier while preserving accuracy where it truly matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
