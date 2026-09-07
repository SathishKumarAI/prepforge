---
qid: ing_cdd13ed1d3__faang__local
question: 'Explain: F4: Permission escalation through aggregation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:05-05:00'
sources: []
---

**Clarify**  
The question asks how an attacker can *escalate privileges* by combining (aggregating) multiple low‑privilege permissions. I’ll assume a role‑based system where permissions are granular and a user may hold several “micro” rights that individually seem harmless.

**Approach**  
1. Map the permission graph: each node = capability, edges = prerequisite relationships.  
2. Identify *combinatorial chains*—sets of nodes whose union satisfies a higher‑level operation.  
3. Use constraint solving or SAT to find minimal sets that trigger escalation.  
4. Validate by simulating policy evaluation.

**Depth**  
Permission aggregation occurs when an attacker obtains several “small” rights (e.g., read on table A, write on table B) and uses them in a workflow that the system permits only if *both* are present. For example, a data‑exfiltration script may first create a temporary view (needs SELECT on A), then dump it to S3 (needs WRITE on B). The system’s policy engine treats the two actions as independent, so the attacker never needs a single “export” privilege. Complexity is O(n + m) for graph traversal; SAT solving can be exponential but practical with small n.

**Edge Cases**  
- *Implicit permissions*: inherited rights that aren’t listed explicitly may hide escalation paths.  
- *Temporal constraints*: some policies only allow actions in a narrow window, breaking the aggregation.  
- *Policy updates*: dynamic changes could invalidate precomputed chains.

**Optimize & Communicate**  
Recommend automated policy auditing tools that enumerate minimal permission sets and flag “composition‑based” escalations. Explain to stakeholders how this reduces attack surface by enforcing principle of least privilege at the composition level, not just per‑permission. This structured analysis satisfies FAANG interviewers’ focus on clear problem framing, systematic solution design, technical depth, edge‑case awareness, and actionable recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
