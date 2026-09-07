---
qid: ing_a3df59a52b__faang__local
question: How do you instrument cost and latency for an agentic feature, and what
  actually drives cost creep?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 536
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:23-05:00'
sources: []
---

**Clarify**

> *What is the “agentic feature” we’re measuring?*  
> Is it a model inference, an API call, or a multi‑step workflow (e.g., prompt → LLM → post‑processing)?  
> *Which cost sources do you care about?* Compute time, data transfer, storage, and third‑party credits.  
> *Latency targets:* real‑time (<200 ms) vs batch (>1 s).  

**Approach**

1. Instrument every boundary: request entry → model call → post‑processing → response.  
2. Tag each span with resource identifiers (model name, instance type, region).  
3. Aggregate per‑span cost = `compute_seconds × rate + data_gb × transfer_rate`.  
4. Store metrics in a time‑series DB; surface alerts when latency > SLA or cost > budget.

**Depth**

- Use OpenTelemetry for distributed tracing; export to Prometheus/Datadog.  
- Compute cost per request:  
  ```python
  compute_cost = duration_sec * instance_rate_per_sec
  data_cost   = transfer_gb * transfer_rate_per_gb
  total_cost  = compute_cost + data_cost
  ```
- Latency is the sum of all spans; use percentile metrics (p95, p99).  
- Complexity: O(1) per request for cost calc; tracing overhead <5 % if sampling 10–20 %.  
- Trade‑offs: higher sampling → better fidelity but more storage.

**Edge Cases**

- Cold starts inflate latency & compute; capture `cold_start` flag.  
- Multi‑model pipelines: ensure each sub‑step’s cost is disaggregated.  
- Third‑party services (e.g., embeddings) may use separate billing—track via API key tags.  
- Network spikes causing outliers; test with synthetic load.

**Optimize & Communicate**

- Introduce a “cost‑budget guardrail” that rejects requests exceeding a threshold.  
- Use the data to iterate on model size or caching layers, reducing compute and transfer.  
- Present findings in dashboards: per‑feature cost vs latency heatmap, trend over time.  
- Explain trade‑offs clearly: higher fidelity tracing → more storage; aggressive sampling → potential bias.

This structured pipeline gives real‑time visibility into what drives cost creep—compute spikes, data egress, or cold starts—and lets teams act proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
