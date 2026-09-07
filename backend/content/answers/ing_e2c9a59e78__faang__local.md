---
qid: ing_e2c9a59e78__faang__local
question: Your agent platform's bill jumped from $8k to $40k in a month. Nobody knows
  why. How do you find out, and how do you make sure this never happens blind again?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 466
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:26:23-05:00'
sources: []
---

**Clarify**  
The bill surged from $8K to $40K in one month with no obvious driver.  
Assumptions to confirm:  
1. Billing is per‑usage (API calls, compute time).  
2. No new customers or features were deployed during that period.  
3. Logs and metrics are available at the granularity needed.

**Approach**  
1. **Reconstruct usage** – pull the platform’s cost allocation report for the month.  
2. **Identify spikes** – isolate dates/periods where spend jumped > ×5.  
3. **Map to events** – cross‑reference with deployment, monitoring alerts, and user activity logs.  
4. **Root cause analysis** – determine whether it was an automated job, a runaway inference loop, or misconfigured pricing tiers.

**Depth**  
- Use the cloud provider’s cost explorer + custom tags to break down by service (compute, storage, network).  
- Correlate with CloudWatch/Datadog metrics: CPU, GPU utilization, request latency.  
- If an inference job doubled its batch size or frequency, the cost will jump linearly; if a model version leaked memory, it could grow exponentially.  
Complexity is O(n) over logs; acceptable for one‑off investigation.

**Edge Cases**  
- Hidden third‑party API calls (e.g., external embeddings).  
- Billing errors or mis‑applied discounts.  
- Overnight data‑driven experiments that ran on a production cluster.

**Optimize & Communicate**  
1. **Automated anomaly detection** – feed cost metrics into an alerting pipeline (threshold + percent change).  
2. **Cost‑guardrails** – enforce hard caps per user/model and throttle jobs when approaching limits.  
3. **Visibility dashboard** – real‑time spend vs. budget with drill‑down to the job level.  
4. **Post‑mortem process** – document root cause, mitigation steps, and review policy in a run‑book.

By turning the mystery into a repeatable monitoring & guardrail system, we eliminate blind spikes and give stakeholders confidence that future budgets stay predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
