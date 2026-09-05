---
qid: ing_ebf7280ec2__star__local
question: 'Explain: How it provides high availability: — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:53-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine for an e‑commerce platform that had to stay online 24/7 during peak holiday sales. The traffic spike was expected to be 3× the normal load, and any downtime would cost us millions in lost revenue.

**Task:**  
I needed to design the AI inference layer so it could deliver predictions with sub‑200 ms latency while guaranteeing >99.9% uptime across a global user base.

**Action:**  
First, I containerized the TensorFlow model using Docker and orchestrated it on Kubernetes, leveraging horizontal pod autoscaling based on CPU utilization. To avoid single points of failure, I deployed the pods in multiple availability zones with an internal load balancer that performed health checks every 5 s. I also added a local caching layer (Redis) for the most frequent user profiles to reduce inference calls by ~40%. For fault tolerance, I set up a read‑replica database cluster and used a circuit breaker pattern in the service gateway so that if one zone failed the traffic would automatically reroute to healthy zones. Finally, I automated rollback pipelines with Helm and performed chaos engineering tests using Gremlin to validate resilience.

**Result:**  
During the holiday period we handled 12 M requests per hour with average latency of 145 ms and experienced zero downtime; our SLA hit 99.98%. The system also reduced inference costs by 30% due to caching. I learned that combining container orchestration, multi‑zone deployment, health checks, and chaos testing is key to building AI services that are both highly available and cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
