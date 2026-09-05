---
qid: ing_c9ecece580__star__local
question: 'Explain: Thank you, Malle. Um, so welcome. Uh — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 377
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:02-05:00'
sources: []
---

**Situation:** I joined the Ads Optimization team at Google where we were tasked with scaling a real‑time bidding system that processed over 50 million ad requests per second. The existing monolith couldn’t handle peak traffic and had latency spikes of up to 200 ms, hurting revenue.

**Task:** My goal was to refactor the architecture into a microservice pipeline using gRPC and Kubernetes, reduce end‑to‑end latency below 80 ms, and increase throughput by at least 30% while keeping costs under budget.

**Action:** I led a squad of five engineers. First, we performed a dependency graph analysis with OpenTelemetry to identify bottlenecks. Then we split the pipeline into stateless services: an intake service, a feature‑engineering microservice, and a ranking engine. We containerized each with Docker, deployed them on GKE, and used Istio for traffic shaping. To maintain consistency across versions, we introduced canary releases via Flagger and automated rollback on latency > 100 ms. For cost control, we implemented autoscaling policies based on CPU/memory thresholds and switched to preemptible VMs where safe.

**Result:** Latency dropped from 200 ms to 65 ms, throughput increased by 35%, and the system handled a 2× traffic surge during a major campaign without any outages. We saved roughly $120k annually in compute costs. I learned that observability, disciplined versioning, and treating performance as an engineering metric are essential for building reliable large‑scale systems at Google.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
