---
qid: ing_43d934f6f2__star__local
question: 'Explain: Server error responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 321
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:47-05:00'
sources: []
---

**Situation:**  
At my last role, we deployed a real‑time recommendation model behind an API gateway on AWS Lambda. Within the first week of traffic, our monitoring dashboard began flagging a spike in 5xx errors—mostly 502 Bad Gateway and 504 Gateway Timeout.

**Task:**  
I had to pinpoint why the inference endpoint was failing under load, reduce the error rate below 1%, and ensure graceful degradation for downstream services.

**Action:**  
First, I examined CloudWatch logs and saw that the Lambda container exceeded its 3 s timeout during peak traffic. I refactored the model loading: moved the heavy `torch.load` from each invocation to a warm‑start function using Lambda’s “Provisioned Concurrency” so the GPU model was cached in memory. Next, I introduced a circuit breaker in API Gateway that returned a custom 503 with a retry-after header when Lambda latency exceeded 2 s. Finally, I added Prometheus metrics for inference latency and error rates, feeding them into Grafana dashboards.

**Result:**  
The 5xx rate dropped from 12% to <0.8% within 48 h, and average response time improved from 4.3 s to 1.2 s. I learned that proactive timeout handling and caching can dramatically improve ML API reliability—and that a good monitoring stack turns raw errors into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
