---
qid: ing_9c11a4ad05__star__local
question: 'Explain: Anduril — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 356
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:08-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an automated fraud detection model for credit card transactions. Our real‑time processing pipeline was hitting latency limits; the current system could only handle about 1,000 requests per second before response times spiked beyond our SLA of 200 ms.

**Task** – I needed to redesign the inference architecture so that we could process 10,000 TPS while keeping latency under 150 ms and maintaining a false‑positive rate below 0.5%.

**Action** – First, I profiled the existing model with TensorRT on our GPU cluster; I discovered that the feature extraction layer was a bottleneck due to redundant tensor copies. I refactored it into a single fused kernel and replaced the softmax activation with a custom quantized sigmoid to reduce memory traffic. Next, I introduced a multi‑stage inference pipeline: a lightweight 4‑layer CNN prefilter ran on edge CPUs to discard obvious non‑fraud cases, followed by the full model on GPUs only for the remaining 5% of transactions. Finally, I set up a Kubernetes autoscaler that spun up additional GPU pods during peak hours.

**Result** – The new pipeline achieved 12,500 TPS with an average latency of 120 ms and kept false positives at 0.4%. Our fraud detection accuracy improved from 93.2% to 96.7%, reducing chargeback costs by $1.8M annually. I learned that thoughtful kernel fusion combined with a tiered inference strategy can dramatically boost throughput without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
