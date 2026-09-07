---
qid: ing_2aac26561b__faang__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 463
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:30-05:00'
sources: []
---

**Clarify**

*Problem:* The monthly cost for running a large language model (LLM) has increased two‑fold while user traffic remains constant.  
*Assumptions to confirm:*  
1. Billing is from the same cloud provider and uses identical instance types each month.  
2. No new features or models were deployed that could raise compute demands.  
3. The usage logs (API calls, token counts) are intact and unchanged.

**Approach**

1. **Audit billing data** – break down costs by resource: compute, storage, network, and any paid services (e.g., GPU licensing).  
2. **Correlate with usage metrics** – compare compute hours, number of inference requests, and average tokens per request month‑over‑month.  
3. **Inspect configuration changes** – check for auto‑scaling policies, spot instance bidding thresholds, or new monitoring alerts that may trigger extra instances.  
4. **Validate pricing contracts** – ensure no rate changes in the provider’s tiered pricing or hidden fees (e.g., data egress).

**Depth**

- If compute cost spikes: verify that autoscaling isn’t launching more instances due to a mis‑configured CPU/memory threshold or an increase in background jobs.  
- If storage/network costs rise: look for increased snapshot frequency, larger cache sizes, or higher egress from edge locations.  
- A sudden price hike could be due to the provider shifting GPU pricing or moving to a different region with higher rates.

**Edge Cases**

- Hidden costs from third‑party services (e.g., monitoring, logging).  
- Unexpected spikes in background training jobs or model fine‑tuning that weren’t logged as traffic.  
- Billing errors or mis‑applied discounts.

**Optimize & Communicate**

After pinpointing the culprit, adjust scaling policies, reduce idle instance time, negotiate better spot rates, or move workloads to a lower‑cost region. Present findings with clear charts linking cost components to usage metrics, and propose a monitoring dashboard that alerts on anomalous spend growth in real time. This demonstrates structured problem solving, depth of analysis, and proactive communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
