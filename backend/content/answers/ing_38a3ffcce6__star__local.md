---
qid: ing_38a3ffcce6__star__local
question: 'Explain: See also — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 426
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:52-05:00'
sources: []
---

**Situation:**  
At my last role I was responsible for deploying a real‑time recommendation engine as a REST service on Kubernetes. Two weeks before the quarterly launch our load tests revealed that around 12 % of client requests were timing out and returning 5xx errors during peak traffic.

**Task:**  
I had to identify why the service was failing, fix it so the error rate dropped below 1 %, and make sure the API remained stable under sudden traffic spikes.

**Action:**  
First I examined the HTTP response logs. The majority were **503 Service Unavailable** and a smaller slice were **429 Too Many Requests**, indicating resource exhaustion. I instrumented the container metrics, discovered that the inference pods were hitting CPU limits during bursty loads, and the request queue was growing beyond 200 items. I re‑configured the Horizontal Pod Autoscaler to trigger on CPU > 70 % and added a rate limiter at the ingress level (using NGINX’s limit_req). I also tweaked the Flask app to use asynchronous workers with Gunicorn’s `uvicorn` worker class, reducing per‑request latency by ~30 %. Finally, I updated the health check endpoint to return **200 OK** only when all model shards were ready.

**Result:**  
After redeployment, the 5xx error rate fell from 12 % to < 0.5 %, and the average response time dropped from 850 ms to 450 ms under peak load. The API now scales smoothly during traffic surges, and we passed the launch metrics with a safety margin. I learned that understanding HTTP status semantics (e.g., 429 vs 503) is essential for diagnosing and tuning production ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
