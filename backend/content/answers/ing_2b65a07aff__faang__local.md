---
qid: ing_2b65a07aff__faang__local
question: 'Explain: Design For Failure — 9 Best Practices for Building Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 659
total_tokens: 896
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:48-05:00'
sources: []
---

**Design For Failure – 9 ML‑Ready Microservice Practices**  
*Structured FAANG style (clarify → approach → depth → edge cases → optimize)*  

| # | Practice | Why it matters for ML microservices |
|---|----------|--------------------------------------|
|1|**Idempotent APIs**|Repeated inference or training calls (e.g., after a retry) don’t corrupt state. |
|2|**Circuit Breaker + Bulkhead**|Isolate a failing model or data store so one bad component doesn’t cascade to all services. |
|3|**Graceful degradation**|If a feature‑flagged model is down, fall back to a cached or simpler baseline model instead of 500s. |
|4|**Health & readiness probes**|Expose `/healthz` that checks connectivity to data stores and GPU availability; orchestrators can restart only unhealthy pods. |
|5|**Versioned endpoints**|Keep older inference APIs live while deploying new models, avoiding breaking downstream consumers. |
|6|**Timeouts & retries with back‑off**|Avoid blocking threads on slow inference engines; exponential back‑off reduces load during spikes. |
|7|**Observability stack (metrics + logs + tracing)**|Track latency per model version, error rates, and feature usage to spot drifts early. |
|8|**Statelessness & externalized state**|Store model weights in object storage or a shared KV; services can be replaced without data loss. |
|9|**Automated rollback pipeline**|CI/CD gates that automatically revert to the last stable model if new predictions exceed an error budget. |

---

### Clarify
We’re designing ML microservices that must stay available even when components (GPU nodes, storage, downstream consumers) fail.

### Approach
1. Enumerate failure modes (service crash, data unavailability, model corruption).  
2. Map each to a mitigation pattern above.  

### Depth
- **Idempotency**: Use request IDs; store results in a cache keyed by ID.  
- **Circuit breaker**: Open after N consecutive failures, close after cooldown.  
- **Bulkhead**: Separate thread pools per service.  
- **Health checks**: Simple DB ping + model warm‑up check.  
- **Versioned APIs**: `/v1/predict`, `/v2/predict`.  

### Edge Cases
- Clock skew causing request ID collisions.  
- Partial GPU failure leading to inconsistent predictions.  
- Rolling updates that drop traffic before new version stabilizes.

### Optimize & Communicate
- Use lightweight in‑memory caches for idempotency; persist to Redis for durability.  
- Expose metrics (`predict_latency`, `model_error_rate`) to Prometheus; alert on >5% error surge.  
- Document rollback thresholds (e.g., 2 s latency spike or 10 % error increase triggers revert).  

*This structured approach satisfies FAANG interviewers: clear assumptions, systematic plan, deep technical detail, edge‑case awareness, and a concise communication of trade‑offs.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
