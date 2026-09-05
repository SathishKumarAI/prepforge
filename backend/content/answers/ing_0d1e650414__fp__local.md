---
qid: ing_0d1e650414__fp__local
question: How much does Claude / GPT / Gemini / DeepSeek cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 347
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:39-05:00'
sources: []
---

**Why the price tag on Claude, GPT‑4, Gemini, or DeepSeek is what it is**

At its core, an LLM is a gigantic neural network that must be *trained* on terabytes of text and then *served* to users in milliseconds.  
1. **Training cost ≈ compute × data** – Training GPT‑4 required ~300 000 GPU‑hours on 8‑bit precision; at $0.10/GP‑hour this alone is ~$30 M, plus data acquisition (~$5–10 M).  
2. **Inference cost ≈ latency × traffic** – Each token generation costs a few milliseconds of GPU time; for high‑volume services (thousands of requests per second) that can reach $0.02–$0.05/token.  
3. **Infrastructure & ops** – Redundancy, security, compliance, and support add ~30% on top of raw compute.

These components explain the tiered pricing: a *free* API tier (few thousand tokens/month) subsidizes research; paid tiers scale linearly with usage, often with discounts for committed spend.  

**Non‑obvious insight:** The real lever is **model sparsity**—pruning and quantization reduce inference cost without retraining from scratch. Vendors that master this trade‑off can slash per‑token prices while keeping accuracy, which explains why Gemini’s pricing curve is steeper than GPT‑4’s.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
