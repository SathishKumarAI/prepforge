---
qid: ing_7b29fd4d8b__fp__local
question: 'Explain: PACLEC Theorem — Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 618
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:40-05:00'
sources: []
---

**PACLEC Theorem – Learning Database Relations**

*Fundamental problem.*  
In a relational database we often have a *target relation* \(R\) (e.g., “orders that shipped on time”) and only a limited set of tuples \(S\subseteq R\cup \overline{R}\).  We want to **learn** a predicate \(h\) that approximates \(R\) with small error, using as few samples as possible.  The PACLEC theorem gives the precise sample‑size guarantee for this task.

*Why it must work this way.*  
PAC learning bounds hinge on the *combinatorial dimension* of the hypothesis class.  For database predicates expressed in a fixed query language \(\mathcal{L}\) (conjunctive, union–of–conjunctions, etc.), that dimension is not the raw number of attributes but the **VC‑dimension of \(\mathcal{L}\)**—the largest set of tuples that can be shattered by queries in \(\mathcal{L}\).  The theorem states:

\[
m = O\!\left(\frac{d_{\mathcal L} + \log(1/\delta)}{\epsilon^2}\right)
\]

samples suffice to guarantee with probability \(1-\delta\) that the empirical error of any hypothesis in \(\mathcal{L}\) is within \(\epsilon\) of its true error.  The proof follows exactly the same steps as classic PAC theory: bound the growth function by Sauer’s lemma, then apply a union‑bound over all hypotheses.

*Deep insight.*  
Most practitioners equate “complexity” with the number of columns or the size of the database.  The non‑obvious lesson is that **query expressiveness**—how many distinct Boolean combinations of tuples a language can produce—is what truly governs learnability.  A highly expressive language (large \(d_{\mathcal L}\)) may need exponentially more samples, even if the underlying data are tiny.  Thus, when designing learning pipelines over databases, one should first compute or bound \(d_{\mathcal L}\) rather than guessing from schema size alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
