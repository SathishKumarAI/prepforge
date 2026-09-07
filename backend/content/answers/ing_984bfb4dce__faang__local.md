---
qid: ing_984bfb4dce__faang__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 410
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:53-05:00'
sources: []
---

**1️⃣ Clarify**  
A *health check* is a lightweight probe that verifies whether a service or component is operational before routing traffic to it.  
Assumptions:  
- We’re designing a load‑balanced microservice architecture (e.g., HTTP/HTTPS).  
- Services expose an endpoint (e.g., `/health`) that returns status, latency, and optional metrics.  

**2️⃣ Approach**  
1. Define the health‑check contract (JSON payload, HTTP status codes).  
2. Expose two levels: *liveness* (service can start) and *readiness* (ready to serve requests).  
3. Configure each load balancer node to query these endpoints at a configurable interval.  
4. On failure, mark the instance as unhealthy, remove it from rotation, and optionally trigger alerts or auto‑scaling.  

**3️⃣ Depth**  
- **Liveness**: `200 OK` if the process is alive; otherwise `5xx`.  
- **Readiness**: `200 OK` only after dependencies (DB, cache) are reachable.  
- Load balancer uses a *health‑check timeout* and *failure threshold* to avoid flapping.  
- Complexity: O(1) per probe; network overhead minimal.  

**4️⃣ Edge Cases**  
- Slow probes causing false negatives → tune timeouts.  
- Dependencies that recover slowly → exponential backoff for readiness checks.  
- Security: restrict health‑check endpoints to internal networks or use mutual TLS.  

**5️⃣ Optimize & Communicate**  
Improve observability by aggregating probe metrics into a dashboard (latency, error rates). Use canary deployments to validate new instances before full promotion. Explain trade‑offs between frequent checks (more accurate) vs. added traffic. This structured answer demonstrates clear problem framing, systematic design, and practical depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
