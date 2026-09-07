---
qid: ing_60d7be9eb4__faang__local
question: 'Explain: On-call playbook — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 449
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain the *On‑Call Playbook* for a “Computer Use Agent” in production.  
Assumptions:  
1. The agent runs on end‑user machines and is responsible for resource monitoring, policy enforcement, or remote support.  
2. It has an autonomous watchdog that must be maintained while the user is active.  
3. On‑call refers to a team of engineers who handle incidents when the agent misbehaves.

**Approach**  
1. **Define key metrics** (CPU, memory, latency).  
2. **Set up health checks** (heartbeat + sanity scripts).  
3. **Automate alerts** via PagerDuty/Slack with severity levels.  
4. **Create runbooks**: steps for “agent not responding”, “policy violation detected”, and “high resource spike”.  
5. **Rollback & hot‑fix strategy**: package a safe version, use silent update channel.  

**Depth**  
- The watchdog sends an HTTP ping every 30 s; if missed >3 times, it triggers an alert.  
- On‑call engineers run `agent‑diagnose.sh` to collect logs and core dumps.  
- For a “high CPU spike” we instruct: (a) verify user process, (b) throttle agent, (c) schedule a safe restart.  
- All actions are logged in Splunk with correlation IDs for audit.

**Edge Cases**  
- Network partitions cause false positives → use local cache of last good state.  
- Users running the agent on non‑Windows OS → provide platform‑specific scripts.  
- Simultaneous incidents → escalation policy limits to one engineer per 5 min window.

**Optimize & Communicate**  
- Introduce a “self‑heal” mode: if CPU >80% for 2 min, auto‑restart agent in background.  
- Use A/B testing on rollout to minimize impact.  
- Document the playbook in Confluence and run quarterly tabletop drills; this demonstrates ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
