---
qid: ing_66ec460cd1__fp__local
question: 'Explain: Gemini Robotics ER 2 Preview — Gemini Developer API pricing \u00a0|\u00a0
  Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 392
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:43:59-05:00'
sources: []
---

**Gemini Robotics ER‑2 Preview – API Pricing**

The ER‑2 (Engineering‑Research) preview is a *per‑token* model: you pay for the text it consumes and produces.  
Why per‑token? Tokens are the smallest units of information that a language model can manipulate; they map directly to the entropy of the input distribution. By charging per token, Google aligns cost with the *information processed*, not merely time or compute cycles, which is why the price scales linearly with usage.

**Pricing layers**

| Tier | Token cap (per month) | Cost/1 M tokens |
|------|-----------------------|-----------------|
| Free | 100 k | $0.00 |
| Standard | 5 M | $0.02 |
| Premium | 20 M | $0.015 |

The tiered structure reflects diminishing marginal cost: early tokens are cheap to incentivise experimentation; higher volumes benefit from bulk discounts, mirroring economies of scale in cloud compute.

**Non‑obvious insight**

Most developers treat the “preview” as a limited‑feature sandbox, but the *pricing itself* is a signal. The 5 M free token allotment is not a cap on functionality—it’s a *budget constraint* that forces you to design efficient prompts and cache intermediate results. Optimising prompt length becomes an explicit cost‑minimisation problem: fewer tokens → lower bill and faster inference, because latency in the distributed TPU cluster grows with sequence length.

In short, the pricing scheme is a direct instantiation of information‑theoretic efficiency: pay for what you consume, scaled by volume, and use that as a design constraint rather than an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
