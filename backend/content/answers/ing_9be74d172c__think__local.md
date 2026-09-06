---
qid: ing_9be74d172c__think__local
question: What's on your dashboard for an LLM serving platform, and what do you alert
  on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 608
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:48-05:00'
sources: []
---

We must provide numbered thoughts.**1️⃣ Clarify the scope & assumptions**  
- *Scope*: “dashboard” refers to a real‑time monitoring UI for an LLM‑based inference service (e.g., model latency, queue depth).  
- *Assumptions*: We’re dealing with production‑grade traffic, multiple endpoints, and SLAs that include latency, availability, and cost.  
- *Audience*: Ops/DevOps and ML engineers who will act on alerts.

**2️⃣ Mental model / framework**  
Use the **Observability triad** (metrics, logs, traces) + a **SLO/SLA lens**.  
- Metrics → visual dashboards.  
- Logs/traces → drill‑down when an alert fires.  
- SLOs → set thresholds that map to alerts.

**3️⃣ Step‑by‑step reasoning toward the answer**  

| Category | What to display on dashboard | Why it matters |
|----------|------------------------------|----------------|
| **Latency** | Avg/95th/99th percentile per endpoint, request size distribution | Detect slowdowns, SLA violations |
| **Throughput / Queue depth** | Requests/sec, active workers, pending queue length | Spot capacity issues or resource contention |
| **Error rates** | 4xx/5xx counts, classification of errors (validation vs inference) | Rapid identification of bugs or upstream problems |
| **Resource utilization** | GPU/CPU memory usage, temperature, power draw | Prevent hardware throttling or overheating |
| **Cost metrics** | Per‑token compute cost, daily spend | Keep budgets in check; detect runaway usage |
| **Health checks** | Service liveness, health of dependencies (DB, storage) | Ensure overall system integrity |
| **Model drift / predictions** | Distribution of prediction scores, confidence histograms | Catch changes that might affect business logic |

For each metric, add a *trend* view (last 24h/7d) and an *alert threshold* overlay.

**4️⃣ Common traps to avoid**  
- *Too many alerts*: Focus on actionable signals; use silence windows.  
- *Static thresholds*: Use percentile‑based or rolling averages that adapt to traffic patterns.  
- *Missing context*: Pair metrics with log links or trace IDs in the alert payload.  
- *Ignoring cost*: Neglecting compute cost can blow budgets—include it early.

**5️⃣ Sanity‑check & communicate**  
- Review each metric against an SLO: “Latency ≤ 200 ms 95% of time.”  
- Ask: Does every alert have a clear remediation path?  
- Present the dashboard layout to stakeholders, explaining why each panel matters and how alerts map to operational actions.  

By following this structured thought process, you’ll build a focused, actionable monitoring stack for any LLM serving platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
