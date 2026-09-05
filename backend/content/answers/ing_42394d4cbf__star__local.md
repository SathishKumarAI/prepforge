---
qid: ing_42394d4cbf__star__local
question: 'Explain: Laptops — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 378
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:12-05:00'
sources: []
---

**Situation**  
While working at a fintech startup, we needed to run real‑time fraud detection models on users’ laptops instead of the cloud because customers were wary of sending sensitive transaction data over the internet.

**Task**  
Design a lightweight, data‑intensive application that could ingest up to 200 k events per day, preprocess them locally, and score each transaction with an ensemble model—all within 500 MB RAM and under 2 s latency on average consumer laptops.

**Action**  
I chose Apache Arrow for columnar in‑memory storage to speed up feature extraction. Using PyArrow we streamed raw logs into a shared memory buffer, then applied a custom Spark‑like API written in Rust to batch‑process features with zero-copy. For the ML model I distilled a gradient‑boosted tree ensemble into a quantized decision forest using ONNX Runtime with CPU‑only optimizations. To keep the bundle small, I used pip‑freeze and containerised the runtime with Docker‑Slim, reducing the final image from 1.2 GB to 300 MB. I also added an adaptive cache that persisted the last 5 k scored transactions in LMDB for quick re‑scoring when offline.

**Result**  
The laptop application processed all events within the target latency (average 1.4 s) and used only 350 MB RAM, meeting our SLA. We saw a 30% reduction in false positives compared to the cloud model due to richer local context. I learned that careful data layout, language‑level optimizations, and thoughtful model compression can bring high‑performance ML to edge devices without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
