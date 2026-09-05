---
qid: vq_b5c7356da0__star__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 316
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:48-05:00'
sources: []
---

**Situation** – While refactoring the micro‑service that handles order processing, I discovered a classic deadlock between the inventory service and the payment gateway. Two threads were acquiring locks on `InventoryLock` then `PaymentLock`, while another thread did it in reverse, causing a 30 % slowdown during peak hours.

**Task** – My goal was to eliminate the deadlock without sacrificing throughput or adding external coordination services.

**Action** – I introduced a global lock ordering policy: all threads must acquire locks in alphabetical order (`InventoryLock` → `PaymentLock`). I refactored the code to use a single re‑entrant `ReadWriteLock` per resource and wrapped critical sections with try‑lock timeouts. If a timeout occurred, the transaction rolled back immediately and retried after an exponential backoff. Additionally, I added instrumentation in Prometheus to monitor lock wait times, which helped identify hotspots.

**Result** – The deadlock was eliminated; average order latency dropped from 420 ms to 210 ms during peak load, a 50 % improvement. The system also gained resilience: when transient contention spikes happened, retries completed within 200 ms without manual intervention. I learned that disciplined lock ordering combined with timeout handling and observability is the most effective way to prevent deadlocks in distributed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
