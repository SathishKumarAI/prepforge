---
qid: ing_3556cde2e4__aws__local
question: 'Explain: Overview — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 612
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:10-05:00'
sources: []
---

**Scenario (S):**  
I led a migration of our micro‑service platform from Spring Cloud Zuul to Spring Cloud Gateway for a global e‑commerce site that handled ~3 M requests/day. The goal was to reduce latency, improve observability, and align with AWS best practices.

**Task (T):**  
Design a routing layer that supports dynamic service discovery, request throttling, and fine‑grained security while keeping the system highly available across three AZs.

**Action (A):**  
1. **Architecture:**  
   * Deployed **Spring Cloud Gateway** behind an **AWS Application Load Balancer (ALB)** with cross‑zone load balancing to ensure 99.999% availability.  
   * Integrated **Eureka** for service discovery, but added **Spring Cloud Discovery Client** + **Consul** cache to reduce Eureka round‑trips.  
   * Implemented **rate limiting** via Spring Cloud Gateway’s `RateLimiterGatewayFilter` backed by **Redis (Elasticache)** for distributed counters.  
   * Added **JWT authentication** with AWS Cognito as the identity provider, offloading token validation to a Lambda authorizer.  
2. **Observability:**  
   * Instrumented routes with Micrometer and exported metrics to **Amazon CloudWatch**; set alarms on latency > 200 ms.  
3. **Cost/Trade‑off:**  
   * Replaced Zuul’s single JVM instance (≈$0.05/hr) with a stateless Gateway cluster (≈$0.02/hr per pod), saving ~30% annually.

**Result (R):**  
* Latency dropped from 180 ms to 85 ms (53% improvement).  
* Throughput increased by 25% without additional hardware.  
* Incident rate decreased from 4/month to <1/month due to better circuit‑breaker coverage.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Faster, more reliable routing directly improved checkout speed for millions of users.  
- **Ownership & Dive Deep** – I owned the end‑to‑end migration, dissected performance bottlenecks, and iterated on the design until metrics met SLA.

---

### What a Bar‑Raiser Looks For
1. **Quantified Impact:** Clear latency/throughput numbers show real business value.  
2. **Depth (Dive Deep):** Explanation of trade‑offs between ALB vs NLB, Eureka cache, Redis for rate limiting.  
3. **Learning from Failure:** Mentioned fallback to Zuul during pilot, capturing telemetry that guided the final design.

> *“I’m proud that this migration not only met our performance targets but also gave us a robust, observable routing layer that scales with traffic spikes.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
