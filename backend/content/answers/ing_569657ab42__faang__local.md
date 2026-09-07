---
qid: ing_569657ab42__faang__local
question: Do You Need a Gateway Yet? — Ai Gateways And Model Routing
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:37-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether an “AI gateway” – a front‑end that routes incoming requests to the most appropriate model (e.g., vision, language, multimodal) – is necessary before building large‑scale AI services. I’d confirm: *What constraints do we have?* (latency ≤ 50 ms, throughput ≥ 10k RPS, fault tolerance). Also ask if all models share the same deployment stack or are heterogeneous.

**Approach**  
1. Identify use‑cases that benefit from routing (model specialization, A/B testing, cost optimization).  
2. Sketch a lightweight gateway: API layer → routing table → model proxy → response aggregation.  
3. Evaluate trade‑offs against monolithic deployment.

**Depth**  
- **Routing logic** can be rule‑based (e.g., `/image` → vision) or learned (confidence thresholds).  
- **Latency impact**: adding a hop (~1–2 ms) is negligible vs. 50 ms budget; but serialization/deserialization costs must be measured.  
- **Fault tolerance**: gateway can implement circuit breakers and retries, isolating failures to individual models.  
- **Observability**: central logs/metrics per route simplify debugging.  
- **Scalability**: horizontal scaling of the gateway itself (stateless) keeps the system elastic.

If all workloads are identical and low‑latency is paramount, a monolith may be simpler; otherwise, a gateway yields modularity and future extensibility.

**Edge Cases**  
- *Model drift*: gateway must re‑route if a model’s accuracy falls below threshold.  
- *Cold starts*: ensure the gateway can trigger warm‑up of target models.  
- *Security*: enforce per‑model access control; test for injection via route parameters.

**Optimize & Communicate**  
I’d prototype a minimal gateway in Go or Node, instrument latency with OpenTelemetry, and run A/B tests comparing monolith vs. routed traffic. In the interview, I’d emphasize that gateways become indispensable once we need to mix heterogeneous models, maintain observability, and support continuous deployment – all key FAANG principles of modularity, resilience, and data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
