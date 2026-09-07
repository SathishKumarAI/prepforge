---
qid: ing_6e8f85b80c__faang__local
question: 'Explain: Evaluation, cost, observability — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 491
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:50-05:00'
sources: []
---

**Clarify**  
You’re asking how we evaluate an autonomous agent that can invoke external tools, the monetary impact of its compute/usage, and how we monitor it in production. Key assumptions: *What metrics matter (accuracy, latency)?* *Which cloud provider / pricing model?* *Observability stack already in place?*

**Approach**  
1. **Define success criteria** for each agent run (task completion rate, hallucination frequency).  
2. **Cost modeling** – break down compute (CPU/GPU), storage, and API call charges per tool.  
3. **Instrumentation** – emit structured logs, metrics, and traces at every step: prompt → inference → tool call → response.

**Depth**  

| Dimension | Implementation |
|-----------|----------------|
| **Evaluation** | Use a mix of *offline* (golden dataset) and *online A/B* tests. Compute *precision/recall* for correct tool usage, *F1* for overall task success, and *latency* per step. |
| **Cost** | Instrument the agent to record `num_tokens`, `tool_calls`, and `duration`. Convert to dollars using provider pricing tables (e.g., OpenAI GPT‑4: $0.03/1k tokens). Store per‑run cost in a time‑series DB for trend analysis. |
| **Observability** | Leverage OpenTelemetry: trace each agent invocation, annotate spans with tool name and payload size. Emit metrics (`agent_latency`, `tool_call_count`) to Prometheus; visualize via Grafana dashboards. Log anomalies (timeouts, errors) to Sentry or CloudWatch Logs. |

**Edge Cases**  
- *Unbounded loops* → set a maximum step counter and timeouts.  
- *Tool failure* → retry logic with exponential backoff.  
- *Cost spikes* from malformed prompts → cap per‑run token budget.

**Optimize & Communicate**  
After baseline, introduce **cost-aware prompting** (shorter context) and **tool caching** to reduce repeated calls. Present findings in a concise slide deck: KPI heatmaps, cost breakdown charts, and an alerting matrix. This shows you can tie technical design directly to business impact—a key FAANG metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
