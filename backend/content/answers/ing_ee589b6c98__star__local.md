---
qid: ing_ee589b6c98__star__local
question: 'Explain: Definition parameters — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:15-05:00'
sources: []
---

**Situation:**  
In my last role, we exposed a real‑time fraud detection model through an HTTP endpoint used by dozens of partner apps. During peak holiday traffic the backend crashed because thousands of requests were sent in milliseconds.

**Task:**  
I had to design and deploy a rate‑limiting strategy that would protect the inference service while keeping latency acceptable for legitimate users.

**Action:**  
First, I defined three key parameters: **limit (requests per second)**, **burst size**, and **timeout**. Using Redis as a shared counter, I set a limit of 200 RPS per client API key with a burst buffer of 50 to absorb short spikes. The timeout was capped at 100 ms; any request exceeding this threshold was queued in a Kafka topic for later processing. I also implemented exponential back‑off for repeated offenders and exposed an admin dashboard that visualized current counts against the configured limits.

**Result:**  
After rollout, our service uptime improved from 92% to 99.8%, while average latency stayed below 150 ms. The rate‑limiting framework reduced CPU spikes by 35 % during traffic surges, and I learned how careful parameter tuning balances protection with user experience in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
