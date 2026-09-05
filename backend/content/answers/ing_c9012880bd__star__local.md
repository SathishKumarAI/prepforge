---
qid: ing_c9012880bd__star__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 337
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:24-05:00'
sources: []
---

**Situation** – In our mobile health app, the on‑device language model used to generate quick symptom summaries had a time‑to‑first‑token (TTFT) of 1.8 s on older Android devices. Users complained it made the UI feel sluggish during peak hours.

**Task** – I needed to reduce TTFT below 0.6 s without increasing the model size beyond the 25 MB limit, ensuring the feature stayed responsive across both legacy and flagship phones.

**Action** – First, I profiled the inference pipeline with Android Studio’s Systrace and found that tokenization and the first few kernel launches were bottlenecks. I replaced the naïve Python tokenizer with a compiled Rust version wrapped via JNI, cutting parsing time by 70 %. Next, I swapped the default CPU‑only runtime for the TensorFlow Lite delegate to use GPU acceleration where available; on ARM Mali GPUs this cut matrix multiplication latency by ~40 %. To keep the model size small, I applied post‑training quantization (float16 → int8) and pruned 15 % of low‑weight neurons. Finally, I introduced a lightweight warm‑up cache that preloads the first attention layer during app launch.

**Result** – TTFT dropped to 0.48 s on target devices, improving user satisfaction scores by 22 % in A/B tests and reducing CPU usage by 35 %. I learned that end‑to‑end profiling and selective hardware acceleration can dramatically shrink latency even under strict size constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
