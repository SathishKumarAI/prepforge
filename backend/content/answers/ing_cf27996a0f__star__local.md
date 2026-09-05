---
qid: ing_cf27996a0f__star__local
question: 'Explain: The Three-Tiered Hierarchy — Memory Architectures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 337
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:31-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine that had to process millions of user interactions per day. Our initial prototype ran on a single GPU and was slow: latency hit 250 ms, far above the 80 ms SLA for serving personalized ads.

**Task:**  
I needed to redesign the memory architecture so we could keep the model in fast memory while still handling terabytes of historical data, all without breaking the latency constraint.

**Action:**  
I applied a three‑tiered hierarchy: (1) **CPU RAM** as the hot tier for the inference graph and frequently accessed embeddings; (2) an **NVMe SSD cache** for medium‑frequency items, using RocksDB to stream batches of embeddings on demand; and (3) a distributed **object store** (S3‑compatible) holding cold training data. I leveraged NVIDIA’s Unified Memory API to allow the GPU to transparently pull from RAM, while a background service prefetches from SSD into RAM based on access patterns. We also introduced an LRU eviction policy tuned via profiling.

**Result:**  
Latency dropped from 250 ms to 75 ms, meeting our SLA and boosting click‑through rate by 12%. The architecture also cut GPU memory usage by 35%, allowing us to run larger models. I learned that careful tiering and smart prefetching can unlock performance without costly hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
