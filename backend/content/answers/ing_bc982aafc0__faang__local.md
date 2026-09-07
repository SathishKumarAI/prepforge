---
qid: ing_bc982aafc0__faang__local
question: 'Explain: Circuit Breakers — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:29-05:00'
sources: []
---

**Circuit Breakers – Reliability in ML Systems**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | We need a fault‑tolerant pattern that protects downstream ML services (model inference, feature store) from cascading failures while maintaining high availability. Assumptions: 1) Services are microservices; 2) Latency budgets < 100 ms; 3) Failures can be transient or persistent. |
| **Approach** | 1️⃣ Wrap each external call in a circuit‑breaker library (e.g., Resilience4j). 2️⃣ Configure thresholds: *failure ratio* and *request volume*. 3️⃣ Use *half‑open* state to probe recovery. 4️⃣ Expose metrics to Prometheus; alert on frequent tripping. |
| **Depth** | *Open*: stop requests, return cached predictions or default response (fallback). *Closed*: normal operation. *Half‑Open*: allow a limited burst of traffic; if successful, close again; else reopen. Complexity: O(1) per request; memory for counters is negligible. Trade‑off: aggressive thresholds reduce latency but may hide real issues; conservative thresholds increase safety but risk more false positives. |
| **Edge Cases** | • Long‑running inference jobs that hang → timeout triggers breaker. <br>• Rapidly flapping services → use exponential back‑off before reopening. <br>• Cold starts of model servers → pre‑warm and keep circuit closed until health check passes. |
| **Optimize & Communicate** | *Optimizations*: batch requests to reduce overhead, leverage shared breaker state across replicas, tune timeouts per service SLA. *Narrative*: “By treating each ML inference call as a protected resource, we isolate failures, maintain user experience, and provide observable metrics for rapid triage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
