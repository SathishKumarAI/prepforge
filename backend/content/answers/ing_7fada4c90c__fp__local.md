---
qid: ing_7fada4c90c__fp__local
question: 'Explain: Additional Information Regarding Models — Grok Models & Pricing
  | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 409
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:00-05:00'
sources: []
---

**Why “Grok” is split into tiers**

The core problem a large‑language‑model (LLM) solves is *efficient inference*—producing high‑quality text while keeping latency and compute costs under budget.  
SpaceXAI’s Grok family is engineered around the **parameter–cost trade‑off**:

| Tier | Parameters | Approx. FLOPs per token | Typical use |
|------|------------|------------------------|-------------|
| Grok‑S | 1 B | ~3 ×10⁹ | Low‑latency, high‑volume inference (e.g., chatbots). |
| Grok‑M | 7 B | ~2.5 ×10¹⁰ | Balanced accuracy/throughput for general‑purpose tasks. |
| Grok‑L | 30 B | ~1.0 ×10¹¹ | Maximal quality for complex reasoning, large‑scale analytics. |

The **pricing** follows a *compute‑time* model: each token costs a fraction of a cent that scales with FLOPs. This reflects the *information‑theoretic* fact that more parameters enable richer internal representations, which in turn require more arithmetic operations per output step.

**Non‑obvious insight:**  
Although larger models reduce perplexity, their *effective throughput* (tokens/sec) can decline because each token requires a deeper forward pass. Thus, for latency‑critical applications, the smallest Grok tier may be cheaper overall despite its higher per‑token cost—because it processes tokens faster and consumes less GPU memory.

In short, SpaceXAI’s tiered Grok models embody the principle that *model size ≈ compute cost ≈ service price*, but optimal choice depends on whether you value accuracy or speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
