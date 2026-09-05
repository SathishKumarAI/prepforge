---
qid: ing_abf7ad2c85__star__local
question: 'Explain: Keep reading — What is Distributed tracing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 302
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:22-05:00'
sources: []
---

**Situation:**  
At my previous startup we were deploying a real‑time recommendation engine across three microservices (user profile, catalog lookup, and scoring) on Kubernetes. After a surge in traffic, our APM dashboards showed high latency but no obvious culprit.

**Task:**  
I had to pinpoint which service or external API was causing the delays so we could reduce response times below 200 ms for 95% of requests.

**Action:**  
I introduced OpenTelemetry‑based distributed tracing. First, I instrumented each microservice with a context propagator and added span tags (e.g., `db.statement`, `cache.hit`). We shipped the traces to Jaeger via an in‑cluster collector. Then I wrote a custom aggregation query that grouped spans by operation name and calculated average latency per request path. By visualizing the trace graphs, I discovered that the catalog lookup service was waiting on a slow external inventory API.

**Result:**  
We added retry logic with exponential backoff to the catalog service and cached inventory responses for 30 seconds. Latency dropped from an average of 350 ms to 145 ms, and our SLA hit 98% success at sub‑200 ms latency. I learned that distributed tracing turns invisible call chains into actionable data, enabling precise performance tuning in complex systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
