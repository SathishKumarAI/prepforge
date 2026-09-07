---
qid: ing_dd9bc4ae9b__faang__local
question: 'Q: What metrics would you track for a production LLM system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 560
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:54-05:00'
sources: []
---

**Clarify**  
The question asks which *performance* and *operational* metrics to monitor in a live large‑language‑model (LLM) service. I’ll assume we’re serving user queries over an API, with constraints on latency, cost, and safety.

**Approach**  
1. **Latency & Throughput** – core SLAs.  
2. **Resource Utilization** – GPU/CPU/memory to gauge efficiency.  
3. **Cost per Token** – for cloud‑based inference.  
4. **Accuracy / Quality** – measured by task‑specific benchmarks and user feedback.  
5. **Safety & Bias** – content‑filter hit rates, hallucination frequency.  
6. **Availability & Reliability** – uptime, error rates.  
7. **Model Drift** – changes in output distribution over time.

**Depth**  

| Metric | Why it matters | Typical target |
|--------|----------------|---------------|
| **Mean/95th percentile latency (ms)** | Guarantees user experience | < 200 ms for most queries |
| **Requests/sec / tokens/sec** | Capacity planning | Meet forecasted traffic |
| **GPU memory & compute utilization (%)** | Cost‑efficiency | 70–80% peak usage |
| **Cost/token ($/10k tokens)** | Budget control | ≤ $0.02 per token (depends on model) |
| **BLEU / ROUGE / task accuracy** | Functional correctness | ≥ X for each domain |
| **Hallucination rate (% of outputs flagged)** | Trust & safety | < 5% |
| **Content‑filter hit rate** | Regulatory compliance | Track trend, not absolute value |
| **Error rate (HTTP 5xx)** | Reliability | ≤ 0.1% |
| **Model drift score (KL divergence vs baseline)** | Detect degradation | Keep within 0.05 |

**Edge cases**  
- Sudden traffic spikes → latency spikes; test auto‑scaling thresholds.  
- Model updates → drift may increase; monitor immediately post‑rollout.  
- Adversarial inputs → safety metrics spike; trigger alerts.

**Optimize & communicate**  
Start with a minimal viable set (latency, cost, uptime), then layer in quality and safety metrics as the service matures. Use dashboards (Grafana/Prometheus) and alerting rules tied to SLAs. Explain trade‑offs: tighter latency budgets increase GPU usage; aggressive filtering may hurt throughput. This structured, data‑driven approach demonstrates clear communication, depth, and an understanding of operational priorities—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
