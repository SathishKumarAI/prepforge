---
qid: ing_3884380929__star__local
question: 'Explain: 4.6 Backpressure, Timeouts, and Circuit Breakers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 318
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:30-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a micro‑services pipeline that processed real‑time analytics for a financial app. During peak trading hours the downstream “Risk” service started lagging, causing our API latency to spike from 120 ms to over 1 s, and some requests were timing out.

**Task:**  
I needed to stabilize throughput, protect downstream services, and keep SLA‑guaranteed response times under 200 ms while still allowing legitimate traffic during bursts.

**Action:**  
First, I added a **backpressure** mechanism using Project Reactor’s `onBackpressureDrop` to drop the least critical events when the queue hit 10k items. Then I set per‑service timeouts of 250 ms with `timeout()` and wired them to fallback logic that returned cached risk scores. Finally, I implemented a **circuit breaker** via Resilience4j: after three consecutive failures, the breaker opened for 30 s, short‑circuited calls to “Risk” and routed requests through a lightweight in‑memory policy until health checks passed again.

**Result:**  
Latency dropped back to an average of 140 ms; the system handled 3× the peak load without service degradation. I learned that combining flow control, graceful timeouts, and circuit breaking is essential for resilient real‑time APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
