---
qid: ing_7b29c80aa7__faang__local
question: 'Explain: Endpoint: GET /backends/{backend_id}/health'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 489
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:37-05:00'
sources: []
---

**Clarify**  
You’re asked to describe the **GET /backends/{backend_id}/health** API that monitors a machine‑learning inference backend. I’ll assume:  
* `backend_id` uniquely identifies a deployed model instance (Docker, Kubernetes pod, or serverless function).  
* The endpoint should return a JSON payload indicating operational status and key metrics.  

**Approach**  
1. Define the health schema (ready/healthy flags, latency, CPU/memory usage).  
2. Implement lightweight probes: a “readiness” check that sends a minimal inference request; a “liveness” probe that polls system stats.  
3. Use async I/O to avoid blocking the main inference loop.  
4. Return HTTP 200 for healthy, 503 otherwise, with diagnostic details in JSON.

**Depth**  
```json
{
  "backend_id": "model-123",
  "status": "healthy",          // or "unhealthy"
  "latency_ms": 12,
  "cpu_percent": 42,
  "memory_mb": 256,
  "last_check": "2026‑09‑06T10:22Z",
  "details": null                // optional error message
}
```
*Latency* is measured over the last minute; *CPU/memory* come from OS metrics.  
Complexity: O(1) per request, constant memory. The probe runs in a separate thread/process to avoid contention with inference traffic.

**Edge Cases**  
* Backend not yet started → return 503 with `details="Initializing"`.  
* Model out of memory → 503 and log stack trace.  
* Network partition → timeout → 504 or 503.  
Test against rapid scaling, sudden load spikes, and graceful shutdown.

**Optimize & Communicate**  
- Cache recent metrics to reduce system calls.  
- Expose a `GET /backends/{id}/health?detail=full` for deeper diagnostics.  
- Document the JSON contract in OpenAPI; add unit tests covering each status code.  

By structuring the health endpoint this way, we give ops and autoscaling systems a reliable, low‑overhead signal of model availability while keeping latency negligible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
