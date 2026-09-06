---
qid: ing_f7fa19ef95__fp__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 386
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:04-05:00'
sources: []
---

**Leaky‑bucket as a stochastic buffer**

The core problem is *controlling the flow of events* (API calls, packets) so that downstream resources are never overwhelmed.  
Think of an ideal bucket that leaks at a constant rate \(R\) events/second. When a request arrives it is “poured” into the bucket; if the bucket’s capacity \(C\) would be exceeded, the request is dropped or delayed.  

Mathematically we maintain two variables:

1. `level` – current number of events stored (≤ C).  
2. `lastTick` – timestamp of the last update.

When a new event arrives at time \(t\):

```
elapsed = t - lastTick
level  -= elapsed * R          // natural leak
if level < 0: level = 0
if level + 1 <= C:
    level += 1                  // accept
else:
    reject                      // bucket full
lastTick = t
```

The algorithm guarantees that the average accepted rate never exceeds \(R\), because every event consumes exactly one unit of bucket capacity and the bucket empties at rate \(R\).  
It is *deterministic* (no random delays) yet *stateless* aside from `level`, so it scales horizontally.

**Non‑obvious insight:** The leaky‑bucket algorithm can be seen as a *discrete‑time approximation of a continuous‑time convolution* between the request stream and an exponential decay kernel. This perspective explains why leaky‑bucket smooths bursty traffic: it effectively applies a low‑pass filter to the event rate, keeping only the long‑term average while discarding short‑term spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
