---
qid: ing_93e73e9c62__star__local
question: 'Explain: What Information to Capture — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 286
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:41-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our LLM‑powered fraud detection model was hitting a 12 % false‑positive rate on live transactions, hurting customer satisfaction and inflating manual review costs.

**Task**  
I had to design an evaluation pipeline that captured the right signals—accuracy, latency, bias, and user impact—to pinpoint where the model broke down and guide safe deployment.

**Action**  
I built a LangWatch dashboard that logged every inference with metadata: request ID, timestamp, user segment, input length, and predicted fraud score. Then I integrated LangFUSE to orchestrate nightly batch evals against a curated test set of 50k labeled transactions. The pipeline produced per‑segment precision/recall curves, latency histograms, and drift alerts (e.g., sudden spike in false positives for “high‑risk” users). We also captured human review outcomes as feedback loops, feeding them back into the model training cycle.

**Result**  
The enriched telemetry cut the false‑positive rate by 4 % over two months and reduced manual reviews by $35k/month. I learned that capturing contextual metadata and coupling it with automated drift detection is key to continuous AI reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
