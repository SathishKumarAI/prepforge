---
qid: ing_f46f49145c__faang__local
question: 'Explain: Layer 6: Observability and Evaluation — The AI Agent Tech Stack
  Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 529
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:08:06-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Layer 6* of an AI agent stack—Observability & Evaluation—and why it matters for production agents. Assume the audience knows lower layers (data ingestion, model serving) but not how we measure success and health at runtime.

**Approach**  
1. Define observability vs evaluation.  
2. List key metrics/telemetry sources.  
3. Explain feedback loops into training.  
4. Highlight tooling patterns (instrumentation, dashboards).  

**Depth**  
Observability captures *what* the agent is doing; Evaluation measures *how well* it’s doing that job. Together they form a continuous loop:

| Component | What it does | Typical tech |
|-----------|--------------|--------------|
| **Instrumentation** | Injects lightweight probes (request/response, latency, confidence) into every policy decision. | OpenTelemetry, custom SDKs |
| **Logging & Tracing** | Correlates actions across distributed services for root‑cause analysis. | Jaeger, Zipkin |
| **Metrics** | Aggregated KPI like success rate, SLA compliance, drift in reward signals. | Prometheus + Grafana |
| **Evaluation Engine** | Periodically runs *offline* rollouts or *online A/B tests*, comparing new policies against baselines using predefined metrics (accuracy, cost, safety). | RLHF feedback loops, policy‑evaluation pipelines |
| **Alerting & Ops** | Thresholds on latency or error bursts trigger incident tickets. | PagerDuty, Slack integrations |

The evaluation engine feeds back into the training pipeline: detected performance drops trigger *re‑training* with fresh data (human‑in‑the‑loop reviews, new reward signals). This is how agents stay aligned and compliant.

**Edge Cases**  
- **Cold start**: metrics may be sparse; use synthetic benchmarks.  
- **Non‑stationary environments**: drift detection must be robust to concept shifts.  
- **Privacy**: telemetry must mask PII; enforce differential privacy where required.  

**Optimize & Communicate**  
To improve, adopt *predictive monitoring* (ML models that forecast SLA violations) and *self‑healing* (auto‑rollback of policies). When presenting this architecture, emphasize the tight feedback loop: observability informs evaluation, which drives continuous learning—critical for high‑stakes AI systems. This structure demonstrates clear thinking, technical depth, and operational awareness expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
