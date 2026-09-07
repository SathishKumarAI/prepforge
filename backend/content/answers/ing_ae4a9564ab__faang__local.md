---
qid: ing_ae4a9564ab__faang__local
question: 'Explain: Three-Way Decision: Approve / Escalate / Reject'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 431
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:51-05:00'
sources: []
---

**Clarify**  
We’re asked to describe a *Three‑Way Decision* flow for an AI system that must decide whether to **Approve**, **Escalate**, or **Reject** a user’s request (e.g., loan, content moderation).  
Assumptions:  
1. We have a trained classifier producing a confidence score.  
2. Business policy defines two thresholds, *t₁* and *t₂* (0 < t₁ ≤ t₂ ≤ 1).  
3. Escalation triggers human review; we want minimal false positives for approvals and minimal false negatives for rejections.

**Approach**  
1. Compute the model’s probability `p`.  
2. If `p ≥ t₂` → **Approve**.  
3. Else if `p ≤ t₁` → **Reject**.  
4. Otherwise → **Escalate** to human.  
We also log each decision for audit and retraining.

**Depth**  
- *Complexity*: O(1) per request (just threshold comparison).  
- *Trade‑offs*: Setting `t₂` too high reduces approvals, increasing load on humans; setting it low risks downstream fraud or policy violations.  
- *Retrain loop*: Use escalation outcomes to refine the model (active learning).

**Edge Cases**  
- Scores exactly equal to thresholds → define tie‑break rule (e.g., favor Escalate).  
- Missing or corrupted score → default to Escalate for safety.  
- Sudden distribution shift → trigger alert and retraining.

**Optimize & Communicate**  
We can adapt thresholds per user segment (age, location) using a simple lookup table, improving precision without adding latency. In interviews I’d narrate: “Start with the cleanest rule set, then iterate thresholds based on business KPIs, always keeping auditability and human‑in‑the‑loop safety as top priorities.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
