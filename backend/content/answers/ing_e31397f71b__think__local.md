---
qid: ing_e31397f71b__think__local
question: 'Explain: Q118: Your agent platform runs 40-step tasks on a single frontier
  provider. That provider just logged four outages in four days. Design for provider
  failure.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 491
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:59:21-05:00'
sources: []
---

**1. Clarify the problem & assumptions**

- *What* is a “frontier provider” and why is it critical?  
  Assume it supplies the core state‑transition engine; all 40‑step tasks depend on it.  
- *Why four outages in four days?* Treat this as evidence of high failure probability (≈ 1 outage per day).  
- *What does “design for provider failure” entail?* Aim to keep tasks running or recover gracefully when the provider goes down.

**2. Adopt a fault‑tolerance framework**

Use the classic **reliability triad**: redundancy, graceful degradation, and recovery.  
Map it onto the agent platform:  
- *Redundancy*: backup providers / local caching.  
- *Graceful degradation*: allow tasks to pause or switch modes.  
- *Recovery*: replay or roll‑back state.

**3. Step‑by‑step reasoning**

1. **Model failure probability** (p ≈ 0.25 per day).  
2. **Determine required redundancy**: use the binomial tail to keep system uptime > 99 %.  
   Compute how many parallel providers are needed or whether a single standby suffices.  
3. **Add state persistence**: after each step, write the agent’s state to durable storage (e.g., distributed KV).  
4. **Implement health checks & failover logic**: if heartbeat misses > N cycles, route tasks to backup.  
5. **Design rollback / replay**: keep a log of inputs so that on recovery you can replay from last successful step.

**4. Common pitfalls**

- *Assuming perfect backup*: a standby provider may also share the same bug. Use diverse implementations or vendor.  
- *Ignoring state consistency*: naive roll‑back can corrupt partial results. Ensure idempotent steps.  
- *Over‑engineering latency*: too many hops for failover can slow down critical tasks.

**5. Sanity check & communication**

- Run a quick Monte Carlo simulation: simulate 10 000 days with the chosen redundancy; verify uptime > 99 %.  
- Explain to stakeholders: “We’ll keep every step’s output on durable storage and switch to a standby provider when the primary fails, ensuring tasks finish within their SLA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
