---
qid: ing_a02549d863__star__local
question: 'Explain: On-call playbook — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 410
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:38-05:00'
sources: []
---

**Situation:**  
At my last company we launched the MCP (Multi‑Channel Platform) Knowledge Agent—a chatbot that pulls data from our internal knowledge base and external APIs to answer support tickets. Two weeks after release, a sudden spike in ticket volume from the mobile app caused the agent’s response latency to jump from 0.8 s to over 3 s, and error rates rose to 12%.  

**Task:**  
I was tasked with creating an on‑call playbook that would let any engineer triage, diagnose, and resolve performance regressions within 30 minutes, ensuring SLA compliance and minimal downtime.

**Action:**  
1. **Baseline Monitoring** – I set up Prometheus metrics for request latency, error counts, and backend queue lengths; Grafana dashboards were annotated with alert thresholds.  
2. **Root‑Cause Workflow** – The playbook outlined a step‑by‑step process: check the load balancer health, inspect the recent code merge (feature flag toggles), run `curl` against the knowledge API to confirm response times, and replay a sample ticket through the agent using Postman.  
3. **Hotfix Protocol** – If the issue was traced to a third‑party NLP model overload, we temporarily downgraded the model version via Docker Compose override, then re‑enabled the newer version once traffic normalized.  
4. **Post‑mortem Cadence** – Every incident triggered an automatic Jira ticket and a mandatory 1‑hour retrospective with the devops and data science teams.

**Result:**  
The playbook cut mean time to recovery from ~90 min to under 20 min for subsequent incidents, keeping SLA breaches below 0.5%. I learned that a living, versioned playbook is as critical as automated monitoring when scaling AI services in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
