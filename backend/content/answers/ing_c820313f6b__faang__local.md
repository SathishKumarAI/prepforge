---
qid: ing_c820313f6b__faang__local
question: 'Explain: F9: Vendor model deprecation mid-cycle — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:39-05:00'
sources: []
---

**Clarify**  
You’re asking how a *Computer‑Use Agent* (a self‑service AI assistant) should handle the mid‑cycle deprecation of its underlying vendor model—e.g., when the cloud provider stops supporting an older LLM version while you’re still running production workloads. I’ll assume:  

- The agent is deployed on‑prem or in a hybrid cloud, with a “model registry” that tracks available versions.  
- Deprecation means no more updates/patches; existing instances may still run but will become vulnerable or non‑compliant after the deprecation window.  

**Approach**  
1. Detect deprecation via vendor API or webhook.  
2. Gracefully migrate in‑flight requests to a newer model (or fallback).  
3. Maintain a rollback path if the new model fails.  
4. Notify stakeholders and log the change for audit.

**Depth**  
- **Detection:** Poll the registry every *N* minutes; cache results locally with TTL = 5 min to reduce latency.  
- **Migration:** Use a weighted round‑robin scheduler that gradually shifts traffic (e.g., 10% per minute) from old → new model until all requests hit the new one.  
- **Rollback:** If latency or error rate spikes > 2× baseline, revert weight back to old.  
- **Stateful sessions:** Persist user context in a shared store so session continuity is preserved across model switches.  

**Edge Cases**  
- Vendor fails to publish deprecation notice → fallback to “latest stable” policy.  
- New model incompatible with existing prompts → provide a compatibility shim or prompt rewrite service.  
- Sudden traffic spike during migration → throttle and queue.

**Optimize & Communicate**  
- Cache deprecation status in Redis for sub‑second reads; reduce vendor calls by 90 %.  
- Expose an API endpoint `/deprecation-status` for ops dashboards.  
- Document the migration workflow in Confluence and include a runbook for incident response.  

This strategy keeps uptime > 99.9 %, ensures compliance, and gives operators clear observability—all key metrics in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
