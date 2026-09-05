---
qid: ing_0379d15a79__star__local
question: 'Explain: Netflix Zuul — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 388
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:35:14-05:00'
sources: []
---

**Situation:**  
At my previous company we had a micro‑service architecture for our media recommendation platform. Our API gateway was built on Spring Cloud Gateway, but legacy services still used Netflix Zuul. During a quarterly audit the team discovered that requests to the “recommendation” service were hitting an outdated route in Zuul, causing a 15 % latency spike during peak hours.

**Task:**  
I had to migrate the Zuul‑based routing for the recommendation endpoint to Spring Cloud Gateway while ensuring zero downtime and keeping request tracing intact. The goal was to reduce latency by at least 10 % and preserve distributed‑tracing headers (X‑B3‑TraceId, etc.) for our observability stack.

**Action:**  
1. Created a new Zuul route configuration in `application.yml` pointing `/rec/**` to the correct service instance, adding a custom filter that copied tracing headers into the `ZuulRequestHeaders`.  
2. Added a `GatewayFilter` in Spring Cloud Gateway to replicate the same routing logic and header propagation, using `RouteLocatorBuilder`.  
3. Deployed both configurations side‑by‑side in a blue/green rollout; used Istio traffic mirroring to monitor latency and error rates on each route.  
4. Switched traffic from Zuul to Gateway once metrics stabilized, then removed the old Zuul route.

**Result:**  
Latency dropped from 350 ms to 280 ms (≈20 % improvement). Error rate fell below 0.1 %. The migration also unified our tracing pipeline, simplifying observability and reducing configuration drift. I learned that careful header management and incremental rollout are key when moving legacy routing components in a micro‑service ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
