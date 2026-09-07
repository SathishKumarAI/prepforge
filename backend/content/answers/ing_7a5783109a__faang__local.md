---
qid: ing_7a5783109a__faang__local
question: 'Explain: SLA Metrics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 615
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:28:34-05:00'
sources: []
---

**SLA Metrics for AI Services**

| Metric | Definition | Typical Target |
|--------|------------|----------------|
| **Availability (Uptime)** | % of time the model endpoint responds successfully. | ≥ 99.9 % |
| **Latency** | Time from request to first token / full inference. | < 200 ms for real‑time, ≤ 1 s batch |
| **Throughput** | Inferences per second (IPS) sustained under load. | 10–100 k IPS depending on tier |
| **Accuracy/Quality** | Domain‑specific KPI (e.g., BLEU, F1). | ≥ desired baseline (e.g., BLEU > 0.4 for translation) |
| **Error Rate** | % of requests that return HTTP 5xx or model failure. | ≤ 0.1 % |
| **Data Privacy & Compliance** | Adherence to GDPR, HIPAA, etc. | 100 % audit‑ready |

---

### Clarify
The question asks for *how* we measure and guarantee service levels for AI offerings—both performance (latency, throughput) and correctness (accuracy). Confirm whether the focus is on **model inference** or end‑to‑end pipelines, and what SLAs clients expect.

### Approach
1. Identify core dimensions: availability, latency, accuracy, error rate.
2. Map each to measurable KPIs.
3. Set realistic thresholds based on use‑case (real‑time chat vs batch analytics).
4. Design monitoring & alerting pipelines that feed back into auto‑scaling or model retraining.

### Depth
- **Availability**: Use health checks + circuit breaker patterns; compute uptime as `(total_time - downtime)/total_time`.
- **Latency**: Instrument request traces (e.g., OpenTelemetry); report 95th/99th percentiles.
- **Throughput**: Measure IPS over sliding windows; ensure horizontal scaling with autoscaling groups.
- **Accuracy**: Deploy validation datasets, run A/B tests; update thresholds dynamically when drift is detected.
- **Error Rate**: Aggregate HTTP 5xx and internal exception logs; trigger rollback if > 0.1 %.

Complexity: O(1) per request for metrics capture; storage cost linear in traffic.

### Edge Cases
- Sudden spike → throttling or graceful degradation.
- Model drift → accuracy metric drops below threshold; retraining pipeline kicks in.
- Data privacy violations → immediate SLA breach; must log & audit.

### Optimize & Communicate
Explain that SLAs are *service guarantees* backed by observability and automation. Highlight trade‑offs: tighter latency may require more replicas, increasing cost. Emphasize continuous monitoring and feedback loops to keep SLAs realistic yet ambitious—key for a FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
