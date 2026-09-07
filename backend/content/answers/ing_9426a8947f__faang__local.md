---
qid: ing_9426a8947f__faang__local
question: 'Explain: Reliability Targets — Reliability Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 540
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:56-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of *Reliability Targets* and *Reliability Patterns* as used in large‑scale AI services (e.g., ML model serving). I’ll assume the context is cloud‑native deployments where uptime, latency, and data consistency are critical.

**Approach**  
1. Define each term.  
2. Show how they interrelate.  
3. Illustrate with an example from a real‑world AI platform.  
4. Mention trade‑offs (cost vs. reliability).

**Depth**  

| Concept | Meaning | Typical Targets | Patterns Used |
|---------|---------|-----------------|---------------|
| **Reliability Target** | A quantitative SLA that guarantees system behavior, e.g., 99.999 % uptime or < 50 ms inference latency. | Availability (MTTR), latency percentiles, error‑rate caps. | *Multi‑region failover*, *canary releases*, *retry with exponential backoff*. |
| **Reliability Pattern** | Reusable design template that achieves a target by handling failure modes explicitly. | – | • Circuit Breaker – stops traffic when downstream model degrades.<br>• Bulkhead – isolates critical inference pipelines.<br>• Graceful degradation – fall back to cached predictions.<br>• Observability‑driven rollouts – monitor health before full rollout. |

**Example**  
An AI recommendation service promises 99.95 % availability. It deploys models across three AZs (multi‑region failover). Each request goes through a *circuit breaker* that trips after 5 consecutive failures, redirecting traffic to a fallback model stored locally (graceful degradation). Bulkheads isolate the inference microservice from other workloads. MTTR is limited to 10 min by automated self‑healing scripts.

**Edge Cases**  
- Sudden data drift → circuit breaker may misfire; need adaptive thresholds.<br>- Network partitions can cause split‑brain; use consensus protocols for state sync.<br>- Model retraining updates could violate latency SLA if not staged.

**Optimize & Communicate**  
To improve, integrate *synthetic monitoring* that simulates real traffic and triggers alerts before SLA breaches. Communicate trade‑offs by showing how adding bulkheads increases resource usage but reduces cascading failures. Always tie patterns back to the target metric: “We chose circuit breaker because it directly bounds error‑rate, keeping us within the 0.05 % failure window.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
