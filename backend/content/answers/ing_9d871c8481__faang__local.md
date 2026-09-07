---
qid: ing_9d871c8481__faang__local
question: 'Explain: Q87: Your production agent enters a runaway loop, calling a broken
  tool 400 times in five minutes. Walk through the architectural patterns that prevent
  this - at the orchestrator, the tool layer, and the cost-guard layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 592
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:50:23-05:00'
sources: []
---

**Clarify**  
You have an orchestration engine that repeatedly invokes a faulty micro‑service (the “tool”) 400× in 5 min (~80 Hz). The goal is to stop the runaway, keep downstream services healthy and avoid wasted spend.

Assumptions:  
- The orchestrator can enforce timeouts & retries.  
- The tool exposes a REST/GRPC endpoint with its own health checks.  
- Billing is per‑invocation or per‑second of compute.

---

**Approach**  
1. **Orchestrator level** – rate‑limit, circuit breaker, and back‑pressure.  
2. **Tool layer** – self‑diagnostics, graceful degradation, and local throttling.  
3. **Cost‑guard layer** – budget alerts, quota enforcement, and auto‑shutdown hooks.

---

**Depth**

| Layer | Pattern | Implementation |
|-------|---------|----------------|
| Orchestrator | *Rate limiter* (token bucket) + *circuit breaker* (Hystrix/Resilience4j) | Cap to 50 req/min; open circuit after 5 consecutive failures, returning cached “unavailable” payload. |
| Tool | *Health‑check endpoint* + *self‑throttling* | Expose `/health` that returns status & latency; if latency > threshold, self‑reject new calls with HTTP 429 and log. |
| Cost‑guard | *Quota service* + *budget alarm* | Cloud provider’s billing API monitors per‑service spend; trigger auto‑scale down or terminate the tool when >$X in 5 min. |

Complexity:  
- Orchestrator: O(1) per request for token bucket, O(n) for circuit breaker state.  
- Tool: O(1) latency checks; negligible overhead.  
- Cost guard: periodic O(1) API calls.

Trade‑offs: stricter limits mean higher latency but protect overall system cost and availability.

---

**Edge cases**

* Tool becomes partially healthy → circuit stays open unnecessarily. * Mitigate with dynamic thresholds.  
* Orchestrator misconfigures token bucket → backpressure fails, causing downstream deadlock. * Add watchdog health checks.  
* Billing API delay → cost guard may not fire in time. * Cache recent usage locally.

---

**Optimize & communicate**

- Use exponential back‑off on retries to reduce load spikes.  
- Log failure reasons (timeout, 429) for root‑cause analysis.  
- Present the three‑layer diagram to stakeholders: “If any layer flags an anomaly, the entire flow is halted before costs accrue.”  

By layering rate limits, self‑diagnostics, and cost quotas, you create a resilient architecture that stops runaway loops early while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
