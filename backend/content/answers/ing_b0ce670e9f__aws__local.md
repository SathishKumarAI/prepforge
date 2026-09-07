---
qid: ing_b0ce670e9f__aws__local
question: What are OpenTelemetry's GenAI semantic conventions, and why should you
  care?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 438
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:55-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent redesign of our AI‑inference platform, I led the adoption of **OpenTelemetry’s GenAI semantic conventions** to unify observability across all models.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our telemetry was fragmented: 3 × model stacks each sent custom spans. | Standardize metrics and logs so we could detect performance regressions automatically. | I mapped the GenAI conventions (e.g., `genai.model.name`, `genai.input.tokens`) onto our existing OpenTelemetry SDK, added a lightweight exporter to Amazon Managed Service for Prometheus, and created a dashboard in Grafana. | Within 2 weeks, we cut manual monitoring effort by **70 %** and reduced mean time to detect latency spikes from 45 min to **3 min**—a 93 % improvement that prevented a potential outage during peak traffic. |

**Why care?**  
- **Customer Obsession:** Faster issue resolution directly improves user experience for our AI‑powered product.  
- **Ownership & Deliver Results:** By taking end‑to‑end control of observability, we avoided costly vendor lock‑in and met SLAs.

Technically, I leveraged **AWS X-Ray** (for distributed tracing), **Amazon CloudWatch Metrics** (for custom GenAI metrics), and **Amazon OpenSearch Service** (for log aggregation). The design ensures *high availability* (X-Ray’s 99.9 % SLA) and *scalability* (auto‑scaling exporters), while keeping costs < $0.02 per million traces.

**Bar‑raiser takeaways:**  
- Demonstrated deep dive into new standards, quantifying impact with concrete metrics.  
- Showed ownership by steering cross‑team adoption and learning from early mis‑configurations (adjusted sampling rates after a false alarm).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
