---
qid: ing_d82df3e1eb__think__local
question: 'Explain: Cons — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 442
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:12:51-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

- *“Cons”* refers to drawbacks, not pros.
- The phrase “Availability | System Design” implies we’re evaluating how availability requirements influence system‑design decisions and where trade‑offs arise.

**2. Mental model / framework**

Use a classic *availability vs. cost/complexity* decision matrix:
  - **Availability goals** (e.g., 99.999% uptime)
  - **Design levers** (replication, redundancy, failover, monitoring)
  - **Trade‑offs** (infrastructure cost, operational overhead, latency)

**3. Step‑by‑step reasoning**

1. **List availability requirements** for the AI service (e.g., real‑time inference vs batch).
2. **Identify design options** that achieve those levels (multi‑region clusters, active‑active replication, graceful degradation).
3. **Assess each option’s cons**: extra servers → higher CAPEX/OPEX; complex failover logic → more bugs; cross‑region traffic → latency & data‑consistency issues.
4. **Quantify impact** where possible (e.g., cost per added replica, mean time to recovery vs. downtime).
5. **Rank trade‑offs**: is the marginal uptime gain worth the extra complexity?

**4. Common traps to avoid**

- Assuming “more replicas = better” without considering network partitions or CAP theorem limits.
- Ignoring that higher availability often increases latency for reads/writes.
- Overlooking operational skills needed to maintain sophisticated failover schemes.

**5. Sanity‑check & communicate**

- Re‑explain the trade‑off in plain language: “To get 99.999% uptime we need X, but that adds Y cost and Z complexity.”
- Verify numbers against known benchmarks (e.g., AWS RDS multi‑AZ vs single‑AZ).
- End with a clear recommendation or decision matrix so stakeholders can see where the balance lies.

This structured approach ensures you capture all relevant cons while linking them directly to availability goals in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
