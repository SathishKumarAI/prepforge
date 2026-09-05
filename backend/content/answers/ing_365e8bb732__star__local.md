---
qid: ing_365e8bb732__star__local
question: 'Explain: Soft Throttling — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:54-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time fraud detection API that processed over 50 k requests per minute during peak trading hours. A sudden spike in traffic caused our GPU inference nodes to throttle, leading to >30 % latency increase and several SLA breaches.

**Task:**  
I had to design an adaptive throttling mechanism that would keep latency below 200 ms while preserving model accuracy, without adding expensive hardware.

**Action:**  
I implemented a “soft throttling” layer using a token‑bucket algorithm combined with a predictive load estimator. Tokens were generated based on historical request patterns; when the bucket was empty, incoming requests were queued and served at a reduced batch size to keep GPU utilisation between 60–70 %. I integrated this with our Kubernetes autoscaler, so that additional pods would spin up only if token consumption exceeded 80 % for more than two minutes. The estimator used a lightweight LSTM to forecast load one minute ahead, allowing us to pre‑emptively adjust bucket size.

**Result:**  
Latency dropped from 350 ms to 180 ms during peak periods, and SLA compliance improved from 88 % to 99.5 %. We avoided a $200k hardware upgrade and learned that combining predictive analytics with rate limiting can be more cost‑effective than raw scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
