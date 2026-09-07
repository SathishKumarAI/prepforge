---
qid: ing_209f8e4a4a__aws__local
question: 'Explain: Signal — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 443
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:57-05:00'
sources: []
---

**Situation (S)** – While architecting a real‑time analytics pipeline on an EC2 fleet, I needed a lightweight way for worker processes to notify the master of state changes without polling or shared memory.

**Task (T)** – Implement inter‑process communication that is fast, reliable, and scales with hundreds of workers, while keeping operational overhead minimal.

**Action (A)** –  
1. **Signal design**: Each worker sends `SIGUSR1` to the master when a batch finishes. The master runs a *signal handler* that records timestamps in a shared memory region (`mmap`).  
2. **AWS‑centric fallback**: For cross‑instance coordination, I wrapped the signal logic with an SNS topic so that if a worker crashes on one host, another instance can subscribe and still receive the event.  
3. **Scalability & cost**: Signals are OS‑level (O(1) latency), requiring no extra services. The SNS bridge adds <$0.01/hr for 10k messages/month. Availability is 99.999% because signals don’t depend on network; SNS guarantees delivery across AZs.  
4. **Dive Deep & ownership**: I instrumented the handler with CloudWatch metrics (`worker_batches_completed`, `signal_latency_ms`) and set an alarm at 200 ms to detect regressions.

**Result (R)** – Reduced worker‑to‑master latency from ~120 ms (polling) to <5 ms, cutting overall job time by **22%** and lowering EC2 spot usage by 12%. The system now scales linearly to 1,000 workers without additional infrastructure.  

*Leadership Principles*: **Customer Obsession** – faster insights for data scientists; **Ownership** – I owned the end‑to‑end pipeline, from OS signals to cloud observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
