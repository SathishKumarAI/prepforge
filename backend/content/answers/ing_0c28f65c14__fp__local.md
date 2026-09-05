---
qid: ing_0c28f65c14__fp__local
question: 'Explain: Take-Aways for Capacity Planning — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 586
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:44-05:00'
sources: []
---

**Capacity‑planning for large‑language‑model (LLM) infrastructure: a principled view**

At its core, an LLM is a *parameterized function* \(f_\theta\) that maps input tokens to logits. The *throughput* of a deployment equals the number of token–inference pairs per second, which depends on:

1. **Model size** \(|\theta|\): each layer requires \(O(|\theta|)\) multiply‑accumulate operations.
2. **Batching strategy**: GPUs amortize kernel launch costs over many tokens; small batches under‑utilise the device.
3. **Latency constraints**: real‑time systems impose a hard bound on per‑token latency, forcing trade‑offs between batch size and scheduling.

The *resource equation* is therefore  
\[
C = \frac{L}{B}\,\bigl(1 + \alpha\,e^{- \beta B}\bigr),
\]
where \(C\) is compute demand (GPU‑seconds), \(L\) the total token load, \(B\) the effective batch size, and \(\alpha,\beta\) capture diminishing returns from batching. Optimising \(B\) yields a *convex* problem; the optimal batch satisfies
\[
B^\ast = \frac{1}{\beta}\ln\!\bigl(\tfrac{\alpha\,\beta\,L}{C}\bigr).
\]
This analytic form shows that **batch size should grow logarithmically with load**, not linearly—a nuance often missed when planners rely on empirical “rule‑of‑thumb” scaling.

**Take‑aways**

| Insight | Why it matters |
|---------|----------------|
| **Batch‑size law is log‑scaling** | Prevents over‑provisioning during peak bursts. |
| **Latency ≠ throughput** | A small batch may meet latency but waste GPU cycles; the model’s *effective* utilization is the product of both. |
| **GPU heterogeneity matters** | Different accelerators have distinct \(\alpha,\beta\); a one‑size‑fits‑all assumption skews cost estimates. |
| **Demand variance drives buffer sizing** | Use statistical tail estimates (e.g., 99th percentile) rather than mean load to avoid SLA violations. |

The hidden gem: *the same convex optimisation that governs batch sizing also dictates the shape of a cost–performance curve.* By solving it once, you can generate a lookup table mapping any target latency to the minimal GPU allocation—streamlining both budgeting and auto‑scaling scripts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
