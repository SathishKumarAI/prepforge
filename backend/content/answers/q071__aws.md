---
qid: q071
question: "Explain Bayes' theorem and give an intuitive example."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Dive Deep**: Bayes' theorem is how I reason about evidence and it exposes base-rate traps. It states P(A|B) = P(B|A)*P(A) / P(B), updating a prior belief P(A) into a posterior P(A|B) after seeing evidence B. The intuitive example I use is the classic disease test: a disease affects 1 in 1,000, and a test is 99% accurate. If you test positive, the intuitive guess is 99%, but Bayes gives roughly 9%, because with such a low base rate the false positives from the 999 healthy people vastly outnumber the one true case.

That base-rate lesson is the whole point, and it maps to real work. I'd give a concrete example I owned: our fraud classifier looked great at 99% accuracy, but with fraud at 0.1% prevalence, most positive alerts were false, so I reframed the target around precision at the operating point and the cost of investigating each alert, which reshaped the threshold. On AWS I'd validate these rates against labeled data in Redshift. A bar-raiser listens for whether you internalize base rates and can translate Bayesian updating into a real precision-versus-workload decision, not just recite the formula.
