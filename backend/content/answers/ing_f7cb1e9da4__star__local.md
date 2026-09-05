---
qid: ing_f7cb1e9da4__star__local
question: 'Q: An agent works fine for short tasks but degrades on long-running ones.
  How do you fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 357
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:25-05:00'
sources: []
---

**Situation** – I was leading the upgrade of a conversational AI assistant for a financial services client. The bot handled quick queries (balance checks, account status) flawlessly, but when customers asked multi-step questions—like “Help me set up automatic savings, check my credit score, and schedule an appointment”—the response time spiked to 12 seconds and accuracy dropped by 18%.

**Task** – Reduce latency on long-running interactions below 4 seconds while keeping the answer quality above 90% F1.

**Action** – I re‑architected the agent’s workflow into micro‑tasks: each intent was isolated, cached, and executed in parallel using a lightweight actor system (Akka). I added an incremental state store in Redis to persist partial results, so the model didn’t recompute earlier steps. For natural language generation I swapped the single large transformer for a retrieval‑augmented small LLM that fetches relevant policy snippets, cutting inference time by 65%. Finally, I introduced a timeout guard: if any micro‑task exceeded 1 second, it was retried with a fallback rule.

**Result** – End‑to‑end latency dropped from 12 seconds to 3.2 seconds, accuracy improved from 82% to 94%, and the client reported a 25% increase in user satisfaction scores on multi-step queries. I learned that decomposing tasks and persisting intermediate state can turn a brittle long‑running agent into a robust service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
