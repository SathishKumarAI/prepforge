---
qid: ing_f2443e5b69__star__local
question: 'Explain: Examples — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 310
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:37-05:00'
sources: []
---

**Situation**  
In my last role I was building a recommendation engine that had to pull user data from multiple micro‑services (user profile, purchase history, browsing logs). The services were constantly scaling up and down on Kubernetes, so hard‑coding endpoints caused outages whenever a pod restarted.

**Task**  
I needed a reliable way for the inference service to locate the correct endpoint for each micro‑service at runtime without manual intervention, while keeping latency under 50 ms.

**Action**  
I implemented a server‑side service discovery layer using Consul. Each micro‑service registers itself with a health check on startup and deregisters on shutdown. The recommendation engine queries Consul’s REST API to resolve the current IP/port before each request, caching results for 30 seconds to reduce overhead. I also added circuit breaker logic (using Hystrix) so that if a service is unhealthy the engine falls back to a read‑only cache and logs an alert. We wrapped all calls in gRPC with protobuf definitions to keep payloads compact.

**Result**  
Service availability improved from 93 % to 99.8 %, and request latency dropped by 18 %. The team gained confidence that scaling or redeploying services would no longer break the recommendation pipeline, and I learned how to blend discovery, health checks, and resiliency patterns into a production ML workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
