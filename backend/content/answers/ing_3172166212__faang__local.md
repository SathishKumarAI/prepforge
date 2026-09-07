---
qid: ing_3172166212__faang__local
question: 'Explain: Cost Metrics — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 555
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:13-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Cost Metrics* in the context of *Observability* for an AI system—i.e., how we quantify the expense of collecting, storing, and processing telemetry (logs, traces, metrics) while maintaining adequate visibility.

Assumptions:  
- The platform runs distributed inference services.  
- Observability data is ingested into a central analytics stack (e.g., Loki/Prometheus + Grafana).  
- Budget constraints are tight; we need to balance granularity vs cost.

**Approach**  
1. Identify the three pillars of observability cost: *infrastructure*, *data volume*, and *processing* overhead.  
2. Define metrics for each pillar (e.g., storage GB, CPU‑seconds).  
3. Build a cost model that aggregates these to give a single “Observability Spend” metric.  
4. Instrument services to emit tags so we can drill down.

**Depth**  
| Pillar | Metric | Formula |
|--------|--------|---------|
| **Infrastructure** | Storage Cost | `GB_stored × price_per_GB` |
| **Data Volume** | Ingest Rate | `Sum(bytes_sent) / time_window` → impacts storage & egress |
| **Processing** | CPU/Memory Load | `(CPU_sec + Mem_sec)/time_window` × unit cost |

The *Observability Spend* = Σ Infrastructure + Σ Volume + Σ Processing.  
We can normalize per request or per inference to compare across services.

**Edge Cases**  
- Bursty traffic spikes: short‑term overshoot may inflate volume cost; use sliding windows with decay.  
- Log suppression thresholds: too aggressive filtering reduces cost but harms debugging.  
- Retention policy changes: longer retention dramatically increases storage cost.

**Optimize & Communicate**  
1. **Sampling**: Apply probabilistic trace sampling to reduce volume without losing trend signals.  
2. **Compression**: Use LZ4 or Brotli on logs before storage; trade‑off CPU vs I/O savings.  
3. **Retention tiers**: Hot tier (short term, fast queries) + cold tier (long term archival).  
4. **Cost alerts**: Trigger when spend exceeds 10 % of budget.

When presenting to stakeholders, start with the high‑level cost model, show a live dashboard of current spend vs forecast, and outline the sampling/compression trade‑offs in plain terms. This demonstrates structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
