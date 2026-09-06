---
qid: ing_0aca1ca36b__think__local
question: Your primary model provider goes down. What does your incident response
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 424
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:25:38-05:00'
sources: []
---

**Metacognitive Blueprint for “Primary Model Provider Down” Incident Response**

1. **Clarify the Problem & Assumptions**  
   * Confirm that the provider’s API/endpoint is truly unreachable (network vs internal bug).  
   * Assume no immediate backup is in place and the incident could impact latency, accuracy or availability.

2. **Choose a Framework**  
   * Use the classic “Identify‑Assess‑Mitigate‑Recover” cycle: detect → triage → containment → resolution → post‑mortem.  
   * Map each step to concrete actions (alerting, failover, fallback).

3. **Step‑by‑Step Reasoning**  
   - **Detect:** Monitor health checks, error rates; auto‑raise alerts if thresholds breach.  
   - **Triage:** Verify scope—single endpoint? all models? Impacted services?  
   - **Containment/Mitigation:** Route traffic to a local cached model or a secondary provider’s endpoint. If none exist, temporarily serve stale predictions from a local cache or use a fallback rule‑based system.  
   - **Recovery:** Once the primary is back, synchronize weights/updates, validate drift, and switch back over.  
   - **Post‑mortem:** Root cause analysis, update runbooks, and strengthen monitoring.

4. **Avoid Common Traps**  
   * Don’t assume “fallback will be perfect”; always monitor drift.  
   * Avoid “re‑enable immediately” without validating consistency.  
   * Do not ignore the human‑in‑the‑loop for critical decisions during a model outage.

5. **Sanity‑Check & Communicate**  
   * Run through a quick dry‑run mentally: “If provider fails, what’s my first alert? What does the traffic look like?”  
   * Speak the plan aloud to a teammate—this forces you to expose hidden assumptions and ensures clarity before execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
