---
qid: ing_854370b0ec__faang__local
question: 'Explain: Monitoring and SLOs — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 473
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:29-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to explain how a *multi‑tenant fine‑tuning platform* can monitor performance and enforce **Service Level Objectives (SLOs)** for each tenant. Assume:  
- Tenants submit models/ data, get isolated compute resources.  
- Platform tracks latency, throughput, cost, and error rates per tenant.  
- SLOs are expressed as percentiles or SLA metrics.

**2️⃣ Approach**  
1. Instrument every request with a tenant ID and timestamps.  
2. Aggregate metrics in a time‑series store (e.g., Prometheus + Cortex).  
3. Define alerting rules per tenant; use Alertmanager to surface incidents.  
4. Use policy engine (OPA) or Kubernetes admission controllers to enforce quotas.  
5. Provide dashboards & API for tenants to query their own SLO status.

**3️⃣ Depth**  
- **Latency**: compute 95th percentile over sliding windows, compare against target `L_target`.  
- **Throughput**: requests per second; if below `T_min`, trigger scaling.  
- **Cost**: track GPU‑hour usage, map to monetary cost, enforce budget caps.  
- **Error rate**: percentage of failed fine‑tune jobs > threshold → auto‑rollback or pause tenant.  
Complexity: O(N) per metric where N = number of requests in window; storage linear in tenants × metrics. Trade‑offs: higher resolution → more storage vs. coarse aggregates.

**4️⃣ Edge Cases**  
- *Burst traffic*: windowing may mask spikes—use sliding windows + alert on sudden jumps.  
- *Data skew*: a tenant with many small jobs can inflate latency stats; weight by job size.  
- *Multi‑region*: ensure consistent clock sync (NTP/Chrony) to avoid timestamp drift.

**5️⃣ Optimize & Communicate**  
- Cache computed percentiles to reduce CPU.  
- Use vectorized queries in PromQL for bulk tenant checks.  
- Explain to interviewers: “We instrument, aggregate, alert, and enforce—each step scales linearly with tenants, ensuring isolation while keeping ops overhead low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
