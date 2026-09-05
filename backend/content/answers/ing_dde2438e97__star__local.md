---
qid: ing_dde2438e97__star__local
question: 'Explain: TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 353
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:13-05:00'
sources: []
---

**Situation** – While leading the backend redesign for a real‑time multiplayer game, we noticed that our latency to players spiked during peak hours. The analytics team flagged that packet loss on the transport layer was causing frame drops and user churn.

**Task** – I had to decide whether to switch from TCP (our current reliable stream) to UDP with custom reliability or keep using TCP and tune it, ensuring minimal lag without sacrificing data integrity for critical game state updates.

**Action** – I started by profiling traffic: 70 % of packets were small control messages (<200 B), but TCP’s congestion window caused head‑of‑line blocking. I benchmarked a lightweight UDP wrapper that added sequence numbers and selective ACKs, then compared it to a tuned TCP (using `TCP_NODELAY` and lower `snd_cwnd`). I ran A/B tests on 10,000 concurrent users, measuring round‑trip time, packet loss, and error rates. The UDP layer cut average RTT from 120 ms to 45 ms while keeping packet loss below 0.1%. We also added a fallback path: if the client detected high packet loss, it would temporarily switch back to TCP for critical state sync.

**Result** – Switching to the custom UDP protocol reduced latency by 63% and dropped user‑reported lag incidents from 8 % to 1.2%. The exercise taught me that transport choice must be driven by traffic patterns and that a hybrid approach can combine low latency with reliability when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
