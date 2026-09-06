---
qid: ing_1058f77611__think__local
question: 'Explain: Hardware Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 420
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:46:40-05:00'
sources: []
---

**Metacognitive Road‑Map for “Hardware Failures – Availability” in System Design**

1. **Clarify the scope & assumptions**  
   - *Scope*: Are we talking about data center racks, edge nodes, or single servers?  
   - *Assumptions*: Typical failure modes (disk, power, network), expected MTBF, and SLAs for uptime.

2. **Choose a mental model**  
   - Use the classic *Availability = MTBF / (MTBF + MTTR)* formula as the backbone.  
   - Layer it with redundancy patterns: active‑active, active‑passive, hot standby, cold standby, or N+1.

3. **Reason step‑by‑step**  
   a. Identify critical components and their individual failure rates.  
   b. Compute MTBF for each.  
   c. Estimate MTTR (repair time) considering automation vs manual intervention.  
   d. Combine using the availability formula to get per‑component availability.  
   e. Propagate through the system: overall availability ≈ product of component availabilities if independent.

4. **Watch out for common traps**  
   - *Double counting*: Treating a single fault that affects multiple components as separate failures.  
   - *Ignoring correlated failures*: Power supply outages or rack‑wide issues that break several nodes simultaneously.  
   - *Over‑optimistic MTTR*: Assuming instant failover when manual reboot is needed.

5. **Sanity‑check & verbalize**  
   - Verify the numbers against known industry benchmarks (e.g., 99.999% availability ≈ 5 minutes downtime/year).  
   - Explain each step aloud: “We start with a disk MTBF of X, MTTR of Y… using the formula gives Z% availability; adding N+1 redundancy raises it to …” This reinforces understanding and exposes hidden assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
