---
qid: q054
question: "Why does correlation not imply causation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the crux immediately: correlation measures co-movement, causation requires that changing one *produces* a change in the other. Assume the interviewer wants both the *why* and *how you would establish causation*.

2. **Mental model.** For any observed correlation, run through a checklist of alternative explanations before accepting causation. That checklist is your framework.

3. **Reason step by step.** Enumerate the non-causal sources: a confounder driving both (hot weather drives ice cream *and* drownings), reverse causation, coincidence/spurious correlation (worse with many variables or small samples), and selection bias. Then pivot to what *does* establish causation: randomized controlled experiments (A/B tests), or causal-inference methods (instrumental variables, difference-in-differences, propensity matching) when experiments are infeasible.

4. **Traps to avoid.** Do not claim correlation is always negative or that the two are identical. Do not stop at 'they are different', an interviewer wants the *mechanisms* (confounding especially) and the remedy.

5. **Sanity-check and communicate.** Make sure you named at least the confounder and gave a memorable example. End with the practical stakes: acting on correlation as if causal leads to costly wrong decisions, which shows you think about consequences, not just theory.
