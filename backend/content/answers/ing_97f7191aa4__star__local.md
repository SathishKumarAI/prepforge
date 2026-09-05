---
qid: ing_97f7191aa4__star__local
question: 'Explain: Sliding Window (6 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 382
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:36-05:00'
sources: []
---

**Situation**  
In my last role I was building a real‑time anomaly detector for sensor streams from an IoT fleet. The incoming data rate was 10 kHz, but the dashboard only allowed us to compute statistics over the most recent second of readings.

**Task**  
I had to calculate moving averages and detect spikes on the fly without storing all past samples—so the algorithm had to be O(1) memory per sensor and update in constant time as each new reading arrived.

**Action**  
I implemented a classic sliding‑window buffer using a circular queue (Python `collections.deque` with maxlen=10 000). Each new sample pushed into the deque, automatically discarding the oldest value. I maintained two running sums: one for the raw values and one for their squares to compute variance on demand. When a new point arrived, I updated the sums by subtracting the dropped value and adding the incoming one—no recomputation over the entire window. For spike detection I compared the current value against the mean plus 3×σ; if it exceeded this threshold I flagged an anomaly.

**Result**  
The detector processed every sample in < 0.1 µs, keeping latency below 5 ms even under peak load. Memory usage stayed constant at ~80 bytes per sensor, enabling us to scale from 100 to 10 000 devices without extra hardware. I learned that a well‑chosen data structure (deque) and incremental statistics are the heart of efficient sliding‑window ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
