---
qid: ing_9be74d172c__fp__local
question: What's on your dashboard for an LLM serving platform, and what do you alert
  on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 465
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:50-05:00'
sources: []
---

### What a production LLM‑serving dashboard should expose

| **Metric** | **Why it matters** | **Typical threshold/alert** |
|------------|--------------------|-----------------------------|
| **Request latency (99th %ile)** | End‑users perceive speed; tail latencies hurt UX. | > 200 ms → alert; > 400 ms → critical. |
| **Error rate (per endpoint)** | Indicates model or infrastructure faults. | > 1 % → alert; > 5 % → investigate. |
| **Token‑rate per second** | Capacity planning; high throughput may saturate GPU/CPU. | Exceeds allocated quota by 10 % → warn. |
| **GPU utilization / memory usage** | Prevents out‑of‑memory crashes and under‑utilization. | > 90 % → alert; > 95 % → auto‑scale or throttle. |
| **Throughput drift** | Detects sudden drops due to model degradation or data shift. | < 70 % of baseline for > 5 min → alert. |
| **Temperature / confidence distribution** | Flags when the model is “confident” but wrong (hallucinations). | Skew toward extreme values (> 0.9) triggers review. |

### What to alert on

1. **Latency tail spikes** – usually caused by queue back‑pressure or GPU stalls; surface the *specific* request pattern.
2. **Memory pressure** – a single long context can exhaust RAM; trigger autoscaling before eviction.
3. **Model drift** – compare current token‑rate and error patterns to historical baselines; use statistical tests (e.g., KS test) to flag shifts.
4. **Confidence anomaly** – when the model outputs unusually high confidence on low‑entropy inputs, hinting at overfitting or data leakage.

#### Non‑obvious insight  
A *confidence* alert can preempt many downstream issues: a sudden rise in predicted probabilities often precedes an uptick in hallucinations and, consequently, user complaints. Monitoring this subtle signal gives you a head start on maintaining quality without inspecting every output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
