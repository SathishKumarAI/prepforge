---
qid: ing_984bfb4dce__think__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 399
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:10:21-05:00'
sources: []
---

**Metacognitive Checklist for “What is a health check?”**

1. **Clarify the context & assumptions**  
   - *Assumption*: The question refers to system‑design concepts (e.g., load balancers, microservices).  
   - *Clarify*: Is it about application health checks, server probes, or infrastructure monitoring?  

2. **Choose a mental model**  
   - Think of a “health check” as a **probe** that reports an instance’s readiness/availability status to a higher‑level component (load balancer, orchestrator).  
   - Map the probe types: *liveness* vs *readiness*; *synthetic* vs *real‑time* checks.

3. **Step‑by‑step reasoning**  
   1. Identify the purpose: detect failures early, avoid routing traffic to unhealthy nodes.  
   2. Define what constitutes “healthy” for the target (HTTP 200, service ping, resource usage thresholds).  
   4. Decide on frequency and timeout settings—balance responsiveness vs overhead.  
   5. Consider failure handling: retry policies, exponential backoff, circuit breaker integration.

4. **Common pitfalls to avoid**  
   - Mixing liveness and readiness logic in the same endpoint.  
   - Over‑polling or under‑polling, leading to false positives/negatives.  
   - Ignoring side effects of a health probe (e.g., database connections created just for the check).

5. **Sanity‑check & verbalize**  
   - Verify that the probe’s response is deterministic and idempotent.  
   - Explain how the probe integrates with load balancer routing rules or orchestrator scheduling decisions, ensuring the answer ties back to overall system reliability.

Use this structured approach whenever you’re asked about health checks in a design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
