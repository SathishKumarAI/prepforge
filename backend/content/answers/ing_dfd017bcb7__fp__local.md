---
qid: ing_dfd017bcb7__fp__local
question: 'Explain: Self-host an open-weights model or call a provider API - walk
  me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 514
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:55:45-05:00'
sources: []
---

**Deciding between self‑hosting an open‑weights model and calling a provider API**

1. **Problem scope**  
   *You need inference for X tasks (e.g., translation, summarisation). What matters?*  
   - **Latency**: Real‑time chat → sub‑200 ms per request.  
   - **Scale**: 10⁶ requests/day → compute budget, bandwidth.  
   - **Privacy**: Sensitive data must stay on premises.  

2. **Compute & cost trade‑off**  
   *Self‑host*: you pay for GPUs/TPUs once and run continuously.  
   *API*: pay per token; no upfront hardware cost but recurring fees grow with usage.  
   For 10⁶ requests/day, a single A100 (~$3 k/month) can handle ~1 M inferences if batching is efficient—often cheaper than API (~$0.0004/token).

3. **Model freshness**  
   Open‑weights models are static unless you fine‑tune; provider APIs get daily updates. If the task evolves (e.g., new slang), API gives immediate benefit.

4. **Operational complexity**  
   Self‑hosting requires DevOps, scaling logic, patching; API abstracts all that.

5. **Regulatory constraints**  
   Data residency laws may forbid sending data out of country → self‑host is mandatory.

---

### One non‑obvious insight
**Batch size matters more than GPU count**. A single high‑capacity GPU can process a 32× batch in ~20 ms, whereas two GPUs each running 8‑batch jobs hit the same latency but cost twice as much. Thus, before buying hardware, profile the optimal batch size for your traffic pattern; it may eliminate the need for expensive multi‑GPU clusters.

---

**Rule of thumb**

| Criterion | Self‑host | API |
|-----------|----------|-----|
| Low latency + high volume | ✔ | ✖ (unless edge provider) |
| Tight budget, no DevOps | ✖ | ✔ |
| Regulatory/Privacy constraints | ✔ | ✖ |
| Need latest model updates | ✖ | ✔ |

Choose the side that satisfies the *tightest* constraint first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
