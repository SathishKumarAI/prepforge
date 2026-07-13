---
qid: q071
question: "Explain Bayes' theorem and give an intuitive example."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Signal you will do two things: state the formula precisely and then make it concrete with an example. Assume the classic medical-test framing unless the interviewer supplies their own scenario.
2. **Mental model.** Read Bayes as belief-updating: posterior ∝ likelihood × prior, normalized by total evidence. P(A|B) = P(B|A)·P(A) / P(B). The prior is your starting belief; the data reweights it.
3. **Reason step by step.** Plug in the disease example: prior P(sick)=0.01, sensitivity P(+|sick)=0.99, false-positive rate 0.05. Compute P(sick|+) = (0.99·0.01) / (0.99·0.01 + 0.05·0.99) ≈ 0.167. Narrate why: false positives from the huge healthy majority swamp the few true positives.
4. **Traps to dodge.** Do not drop the prior or assume P(sick|+) ≈ sensitivity — that ignores the base rate. Do not multiply P(A)·P(B) as if independent. Remember the denominator sums over all ways the evidence arises.
5. **Sanity-check and communicate.** Gut-check the ~17% against intuition: a rare disease makes even an accurate test mostly wrong on positives — the base-rate effect. Deliver the formula, the worked number, and that one-line insight about why priors dominate.
