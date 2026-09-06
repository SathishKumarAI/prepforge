---
qid: ing_c3c4de9a25__fp__local
question: 'Explain: Pricing for agents — Gemini Developer API pricing \u00a0|\u00a0
  Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 640
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:27-05:00'
sources: []
---

**Why the Gemini APIs are priced “per‑token” rather than “per‑minute”**

The core problem a language model solves is *information transformation*: it maps an input string to an output string by sampling from a probability distribution over tokens.  
Each token consumes compute (GPU/TPU cycles) and memory, regardless of how fast the user’s code runs or how many users share the same instance. Therefore the natural unit of cost is **tokens processed**, not wall‑clock time.

**Derivation of the price**

1. **Cost per token** – Google estimates the amortised GPU cost of generating a single token (including model training, inference, and infrastructure).  
2. **Tiered discounting** – Volume discounts are applied to encourage large‑scale use: the first 10 B tokens/month are billed at the base rate; every additional 1 B tokens receive a 5 % price drop, etc.  
3. **Optional features** – “Fine‑tuning” or “prompt engineering” add extra tokens (e.g., prompt length + response). These are charged at the same per‑token rate but can be offset by higher‑quality outputs that reduce overall token usage.

**Non‑obvious insight**

Most developers think of pricing as a function of *time* because API calls feel like “requests”. In reality, **the variance in token count dominates cost**: a single 1 k‑token request can cost more than ten 100‑token requests. Optimising prompts to be concise (≤ 512 tokens) is often cheaper than scaling the number of calls.

---

### Gemini Developer API pricing

| Tier | Monthly usage | Price per 1 M tokens |
|------|---------------|---------------------|
| 0–10 B | $0.02 |
| 10–20 B | $0.019 |
| 20–30 B | $0.018 |
| >30 B | Custom |

*Example*: A model that returns a 200‑token response to a 50‑token prompt consumes 250 tokens per call. At $0.02/1M, one call costs **$5 × 10⁻⁶**.

### Gemini API (non‑developer)

- *Pay‑as‑you‑go*: 1 M tokens = $0.01
- *Subscription*: Unlimited usage for a flat fee (ideal for high‑volume SaaS).

### Google AI for Developers

- **Standard tier**: 1 M tokens/month free; thereafter $0.015/1M.
- **Enterprise tier**: Custom SLAs, dedicated GPU instances, and higher per‑token rates but with volume discounts.

---

**Bottom line:** Treat token count as the “currency” of AI cost. A concise prompt not only speeds up inference but also cuts your bill—an insight that many overlook when optimizing for latency alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
