---
qid: ing_f739b89e80__star__local
question: 'Explain: Retry Pattern — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 334
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:10-05:00'
sources: []
---

**Situation**  
During a production deployment of an image‑classification model at a retail client, the inference API started returning HTTP 503 errors during peak traffic hours because the GPU pool was throttling requests.

**Task**  
I needed to design a fault‑tolerant system that could automatically retry failed inferences without causing back‑pressure or exposing users to long delays, while keeping latency under 200 ms for 95% of requests.

**Action**  
I implemented an exponential‑backoff retry pattern using Python’s `tenacity` library. Each request was wrapped with a retry decorator configured for up to five attempts and a maximum wait of 150 ms. I added circuit‑breaker logic via `pybreaker` to pause retries if the error rate exceeded 10% over a minute, routing traffic to a fallback CPU inference pool. I logged each retry attempt in Prometheus to monitor retry rates and adjusted the backoff multiplier after observing that a 1.5× factor kept latency within SLA while reducing GPU load by ~30%.

**Result**  
The system reduced 503 errors from 12% of requests to <0.2%, restored overall request latency to 180 ms average, and lowered GPU utilization during peak by 28%. I learned that combining exponential backoff with circuit‑breaking gives a robust, self‑healing pattern for ML inference services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
