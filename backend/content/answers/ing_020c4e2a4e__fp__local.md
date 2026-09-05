---
qid: ing_020c4e2a4e__fp__local
question: 'Explain: Regrade Requests — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 322
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:26-05:00'
sources: []
---

**Re‑grading in CS 231n – a principled view**

The core problem is *trust*: students must believe that their grades reflect true mastery, while instructors must maintain consistency and workload limits. The re‑grade policy is the algorithm that balances these competing goals.

1. **Fairness constraint** – any claim of error must be substantiated: a student cannot simply ask for a higher grade; they must identify a *specific* grading decision (e.g., a missing point, a misapplied rubric).  
2. **Efficiency objective** – instructors have finite time. The policy penalizes frivolous requests by requiring the original submission and a concise explanation. This turns re‑grading into a *sparse* optimization problem: only the most likely error candidates are examined.  
3. **Transparency requirement** – once an instructor changes a grade, they must record the rationale in the LMS. This creates a log that can be audited, ensuring that the system remains *monotonic*: grades never regress without a documented cause.

A non‑obvious insight: the policy implicitly enforces *graded‑trust calibration*. By making students prove their point of contention, instructors are nudged to write clearer rubrics; ambiguous language becomes a self‑limiting factor because it increases re‑grade volume. Thus, the policy not only resolves disputes but also drives rubric refinement—an emergent property that many courses overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
