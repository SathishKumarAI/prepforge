---
qid: ing_ebc8388ce8__aws__local
question: 'Explain: Exponential Backoff — Exponentialbackoff'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a real‑time inference pipeline that pulled feature data from an external SaaS platform (e.g., Salesforce). The service throttled us at 10 req/s; if exceeded we received HTTP 429s and had to retry. My goal was to keep latency < 200 ms while keeping costs low.

**Action**  
I implemented **exponential back‑off with jitter** in the request layer:

```python
import time, random

def call_api():
    delay = 0.1   # initial 100 ms
    for attempt in range(5):
        try:
            return api.request()
        except TooManyRequests:
            sleep_time = delay * (2 ** attempt) + random.uniform(0, 0.05)
            time.sleep(sleep_time)
```

- **Why exponential?** Doubling the wait quickly reduces load on the downstream service while still retrying within SLA.
- **Jitter** prevents thundering‑herd spikes that could overwhelm both sides.

I added metrics to CloudWatch: *retry_attempts*, *total_latency*, and *error_rate*. Using AWS Lambda + API Gateway, I scaled the pool of workers by 2x when *retry_attempts* > 3 for any request.  

**Result**  
- **Latency dropped** from an average of 350 ms to 180 ms (‑48%).  
- **API errors** fell from 12% to < 0.5%.  
- **Cost savings**: Lambda invocations decreased by ~30 k/month, saving ~$1.2K.

**Reflection**  
The experience taught me that a small algorithmic tweak—exponential back‑off with jitter—can dramatically improve reliability and cost efficiency. I now routinely audit retry strategies for any external dependency, ensuring we own the end‑to‑end customer experience.  

> **Leadership Principles:** *Customer Obsession* (reduce user latency), *Ownership* (own retry logic end‑to‑end).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
