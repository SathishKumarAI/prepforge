---
qid: ing_852747ccfd__faang__local
question: 'Explain: Senior engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 474
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:12-05:00'
sources: []
---

**Clarify**  
You’re asking how a senior mobile engineer would approach the *system design* portion of an ML‑focused interview—specifically for a mobile platform (Android/iOS). I’ll assume we need to sketch a feature that pulls a model from a server, runs inference locally, and feeds results back, while handling offline mode, battery, and privacy.

**Approach**  
1. **Requirements & constraints** – latency < 200 ms, data size ≤ 50 MB, 10 % battery drain, GDPR compliance.  
2. **High‑level components** – client SDK, model store (local cache), inference engine, network sync, privacy layer.  
3. **Data flow diagram** – request → fetch model → run inference → return UI.  
4. **Failure modes** – no connectivity, corrupted cache, model drift.

**Depth**  
- *Model delivery*: use HTTP/2 with resumable downloads; store in `FileManager` (iOS) or `Context.getFilesDir()` (Android). Cache‑eviction policy: LRU + size cap.  
- *Inference engine*: integrate Core ML / TensorFlow Lite; batch inputs to amortize GPU launch overhead. Use background threads and priority queues to keep UI responsive.  
- *Offline fallback*: ship a lightweight “default” model with the app; fall back when network is down.  
- *Privacy*: encrypt cached models (AES‑256) and never log raw data; use differential privacy on server side for updates.  
- *Metrics*: expose Prometheus‑style counters for latency, cache hit rate, battery impact.

**Edge Cases**  
- Model file corruption → checksum validation + retry logic.  
- Rapid network oscillation → exponential backoff.  
- Device low‑memory → purge cache and pause inference.

**Optimize & Communicate**  
Explain trade‑offs: larger models = better accuracy but higher bandwidth; GPU acceleration vs CPU saves battery on newer devices. Show how to iterate: start with a simple sync, then add background prefetching, then profiling for battery impact. Conclude with a concise summary of design choices and their alignment with the constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
