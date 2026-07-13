---
qid: q061
question: "What is a p-value and how do you interpret it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the interviewer wants the precise definition, not a hand-wave. State your assumption out loud: we have a null hypothesis H₀ and a chosen significance level α (say 0.05) fixed before the test.
2. **Mental model.** Anchor on one sentence: "probability of data at least as extreme as observed, *given H₀ is true*." Everything else hangs off that conditional. Think of it as a surprise meter under the null.
3. **Reason step by step.** Small p → data is surprising under H₀ → evidence to reject H₀. Large p → data is compatible with H₀ → fail to reject (not "accept"). Tie the number back to α as the pre-set threshold.
4. **Traps to dodge.** Do not say the p-value is P(H₀ true) — it is not. Do not equate statistical with practical significance, and flag p-hacking (testing until something is < 0.05).
5. **Sanity-check and communicate.** Restate what a small p does and does not prove, and mention pairing it with effect size and a confidence interval. Say plainly: "It measures surprise under the null, not the truth of the null."
