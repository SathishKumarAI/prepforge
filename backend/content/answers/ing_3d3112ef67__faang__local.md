---
qid: ing_3d3112ef67__faang__local
question: 'Explain: 3.1 Start With Critical User Flows — Single Point of Failure (SPOF)
  | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 397
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:03-05:00'
sources: []
---

**Clarify**  
You’re asking how a system designer should begin by mapping *critical user flows* and identifying *single‑point‑of‑failure (SPOF)*s in the architecture. I’ll assume we’re talking about a high‑traffic web service (e.g., a social media feed) where downtime hurts engagement.

**Approach**  
1. List all end‑to‑end user journeys that must remain available.  
2. For each flow, diagram every component it touches (load balancer → API gateway → auth service → database).  
3. Highlight any component that, if down, would halt the entire flow—those are SPOFs.

**Depth**  
- **Identify SPOFs:** Auth server, DB master node, message broker, CDN edge.  
- **Mitigate:** Add redundancy (multi‑AZ databases, read replicas), failover routing (canary LB rules), circuit breakers, and graceful degradation (fallback feeds).  
- **Metrics:** Use health checks, latency SLAs, and automated rollback scripts. Complexity rises linearly with the number of redundant paths; trade‑offs involve cost vs. reliability.

**Edge Cases**  
- Network partitions: ensure split‑brain detection.  
- Simultaneous failures: test cascading failover scenarios.  
- Data consistency: use eventual consistency where acceptable, or two‑phase commit for critical ops.

**Optimize & Communicate**  
Explain that starting with critical flows surfaces hidden dependencies early, allowing you to prioritize CAPEX on the most impactful components. Narrate how you’d present this diagram to stakeholders, emphasizing ROI (e.g., 99.999% uptime translates to X revenue retention). This structured, data‑driven plan demonstrates both deep technical grasp and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
