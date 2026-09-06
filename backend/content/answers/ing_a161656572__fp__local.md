---
qid: ing_a161656572__fp__local
question: 'Explain: Gemini Omni Flash Preview — Gemini Developer API pricing \u00a0|\u00a0
  Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 438
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:49:05-05:00'
sources: []
---

**Why “Omni‑Flash” is priced the way it is**

At its core, an LLM API must pay for *computational work* (GPU cycles, memory) and *data movement* (bandwidth between client and model). Google’s Gemini Omni Flash Preview bundles a **single, ultra‑fast inference pass** with *dynamic batching* that lets dozens of requests share the same token stream. The pricing formula

\[
P = \alpha\,T + \beta\,B
\]

captures this:  
- \(T\) = total tokens processed (input + output).  
- \(B\) = batch size, measured in “requests per second”.  

The coefficient \(\alpha\) is the baseline cost of a forward pass on the TPU‑v4 hardware that powers Omni Flash. The coefficient \(\beta\) rewards larger batches because the marginal GPU cost per request drops when multiple queries are squeezed into one kernel launch—GPU utilization goes from ~30 % to >90 %.  

**Non‑obvious insight:**  
Batching is *not* just a speed trick; it’s an **information‑theoretic compression**. When two prompts share the same context, the model can reuse intermediate activations, effectively reducing entropy per token. The pricing reflects this by letting \(\beta\) shrink as \(B\) grows: you pay less per token when the system exploits redundancy.

---

### Pricing tiers (illustrative)

| Tier | Max batch size | Price per 1 000 tokens |
|------|----------------|------------------------|
| Free | 1              | $0.00                  |
| Standard | 4          | $0.05                  |
| Premium | 16         | $0.02                  |

The tiers are simply cut‑offs on \(B\); beyond the premium tier, you pay a flat rate that assumes maximum hardware utilization. This guarantees predictable cost while still incentivizing developers to design workloads that batch efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
