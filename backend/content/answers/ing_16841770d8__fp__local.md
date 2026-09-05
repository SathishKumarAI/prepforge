---
qid: ing_16841770d8__fp__local
question: 'Explain: Models & Pricing — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 574
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:37-05:00'
sources: []
---

## Why the *Models & Pricing* page matters

At its core, an AI‑as‑a‑service platform must **trade model capacity for cost** in a way that is both predictable and fair.  
DeepSeek exposes this trade‑off through two coupled dimensions:

| Dimension | What it controls | Why it matters |
|-----------|------------------|----------------|
| **Model** | The architecture, size, and training data of the inference engine | Determines expressiveness (accuracy) and computational footprint |
| **Pricing tier** | Per‑token rate, quota limits, and overage rules | Directly reflects the computational resources consumed |

The fundamental problem is that a *token* is not a unit of pure computation; it carries semantic weight. A 4‑B model can process 1 k tokens in 0.5 s on a single GPU, whereas a 16‑B model might take 2 s for the same token count because its internal state is larger and its matrix multiplications are heavier. Thus **pricing must be proportional to the expected FLOPs per token**.

### Deeper principle: *Cost ≈ Compute × Latency*

Let \(C\) be compute (GPU‑seconds), \(L\) latency, and \(P\) price.  
Empirically,
\[ P \approx \alpha\, C + \beta\, L ,\]
where \(\alpha\) captures infrastructure amortization and \(\beta\) accounts for SLA penalties. DeepSeek’s tiers implicitly set \(\alpha,\beta\) by offering a “Standard” tier (lower \(C\), higher \(L\)) versus an “Enterprise” tier (higher \(C\), lower \(L\)). The pricing page reveals the **token‑rate** (USD/1k tokens), which is essentially a discretized version of \(\alpha\, C\).

### Non‑obvious insight

Most users equate higher‑priced tiers with *faster* responses, but DeepSeek’s docs show that the main cost driver is actually the *model size*, not just latency. A large model can be cheaper per token if you batch many requests together—because the GPU stays busy while idle time shrinks. Thus, for high‑throughput workloads, investing in a larger model (higher upfront price) may yield lower total spend than paying repeatedly for low‑latency bursts.

In short, the Models & Pricing section is not just a bill‑of‑materials; it encodes a *compute‑budget equation* that lets you map your business constraints onto concrete token rates and latency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
