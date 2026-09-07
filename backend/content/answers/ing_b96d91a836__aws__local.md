---
qid: ing_b96d91a836__aws__local
question: 'Explain: Edge Servers — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:23-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked to expose a Spring‑Boot ML inference service to millions of IoT devices in real time. **Task (T)** – Build an edge routing layer that would keep latency < 50 ms while scaling to 200k concurrent connections.

**Action (A)** –  
1. Adopted **Spring Cloud Gateway** as the edge entry point because it is stateless, supports reactive streams, and integrates natively with Spring Security for token validation.  
2. Implemented a **Zuul‑like custom filter** that performs header enrichment (`deviceId`, `tenant`) and rate limiting (5 req/s per device) using Redis‑backed counters.  
3. Deployed the gateway behind an **AWS Global Accelerator + ALB** to route traffic globally with 0.1 ms latency variance.  
4. Leveraged **Amazon CloudWatch Logs Insights** for real‑time monitoring and auto‑scaling based on request latency thresholds.  
5. Added a fallback circuit breaker (Hystrix‑style) that redirects failed calls to a cached “offline” model stored in **S3**.

**Result (R)** – Achieved < 45 ms average latency under peak load, 99.9% uptime, and cut operational cost by 30 % compared to the legacy Zuul‑only stack. The system handled 250k concurrent connections without degradation.

---

### Leadership Principles  
- **Customer Obsession** – ensured low latency for end devices.  
- **Ownership & Dive Deep** – built custom filters after profiling traffic patterns, and tuned Redis counters for precise rate limiting.  

*Bar‑raiser cues*: clear ownership of the edge layer, deep dive into latency bottlenecks, quantified impact (latency, cost), and iterative learning from failed scaling tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
