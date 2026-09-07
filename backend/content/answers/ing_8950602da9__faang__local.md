---
qid: ing_8950602da9__faang__local
question: 'Explain: Pattern 4: Circuit Breaker — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 472
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:51-05:00'
sources: []
---

**Pattern 4: Circuit Breaker – Availability**

---

### Clarify  
You’re asked to explain how a circuit‑breaker pattern protects system availability in distributed AI services (e.g., model inference or data pipelines). Confirm assumptions: we’re talking about microservices, network latency, and fault tolerance—no external monitoring required.

### Approach  
1. **Define the failure** – remote call fails or stalls.  
2. **Open state** – stop routing traffic to that service until it recovers.  
3. **Half‑open** – allow a limited number of probes to gauge recovery.  
4. **Close** – resume normal traffic when probes succeed.

### Depth  
- **Implementation**: Keep a counter for consecutive failures, a timestamp for the last failure, and a threshold (`N`). If `failures ≥ N`, transition to *open*.  
- **Timeout**: After a cooldown period (`T`), move to *half‑open*; send one request. Success → *closed*, failure → back to *open*.  
- **Concurrency control**: Use atomic primitives or a lightweight lock to avoid race conditions when multiple threads change state.  
- **Metrics**: Expose `failure_rate`, `latency_distribution`, and `state` for observability.

Complexity is O(1) per request; memory overhead is negligible (a few integers per circuit). Trade‑off: you trade a small amount of staleness in routing decisions for higher overall throughput and reduced cascading failures.

### Edge Cases  
- **Burst traffic** can trigger false positives; use exponential backoff.  
- **Partial failures** (e.g., high latency but eventual success) may misclassify state—use a rolling window.  
- **State persistence**: restart loses state; consider external storage if needed.

### Optimize & Communicate  
Explain that the pattern decouples *availability* from *latency*: even if an AI model is slow, the circuit breaker prevents client requests from piling up and exhausting resources. In a FAANG interview, emphasize how this preserves SLA guarantees while keeping costs predictable. Use concise diagrams or pseudocode in follow‑ups to show state transitions and thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
