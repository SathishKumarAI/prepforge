---
qid: ing_08a43ea623__faang__local
question: 'Explain: Staff and principal engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:39-05:00'
sources: []
---

**Clarify**

The interview probes how a senior engineer would architect a mobile‑side ML system that can ingest data, train or fine‑tune models, and serve predictions on-device while respecting battery, memory, and privacy constraints.  
Assumptions: (1) we target iOS/Android; (2) latency < 200 ms for inference; (3) data stays local unless user opts in.

**Approach**

1. *Data pipeline* – use a background worker that logs sensor/user events into a SQLite/Realm DB, then shards by time window.  
2. *Model training* – run on-device federated learning: aggregate gradients locally, encrypt, and send to the cloud for aggregation.  
3. *Inference* – convert models to TensorFlow Lite / Core ML; quantize to 8‑bit or use sparsity to reduce size.  
4. *Deployment & update* – OTA delta updates via App Store mechanisms; version guard and fallbacks.

**Depth**

- **Storage**: Use memory-mapped files for fast read/write, keep an LRU cache of the last N samples.  
- **Training**: Apply stochastic gradient descent with differential privacy noise; use GPU/Neural Engine where available.  
- **Inference**: Warm‑start interpreter, batch predictions when idle to amortize cost. Complexity: O(1) inference latency after warm‑up; training is O(n·d).  
- **Security**: End‑to‑end encryption of logs; model weights signed by a key hierarchy.

**Edge Cases**

- Device with no GPU → fallback to CPU and lower batch size.  
- Battery low → pause training, throttle logging frequency.  
- New OS version changes API → feature flag rollouts.

**Optimize & Communicate**

I’d propose a modular SDK exposing *DataCollector*, *Trainer*, and *Predictor* APIs, so product teams can plug in custom models. I’ll illustrate trade‑offs: larger models give higher accuracy but increase memory footprint; quantization reduces size at the cost of ~1–2 % accuracy loss. By narrating each layer’s responsibility and how they interact under resource constraints, I demonstrate end‑to‑end system thinking expected from a staff/principal engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
