---
qid: q074
question: "What is the multiple comparisons problem and how do you correct for it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Insist on the Highest Standards**: testing many hypotheses without correction manufactures false discoveries, and catching that is a rigor habit I own. If I run 20 independent tests at alpha=0.05, I expect about one false positive by chance alone; with dashboards testing hundreds of metrics or a big feature sweep, significant-looking results appear that are pure noise. That's the multiple comparisons problem.

Corrections I use, matched to the cost of a false positive. **Bonferroni** divides alpha by the number of tests, simple but conservative, good when any false positive is costly. **Benjamini-Hochberg** controls the false discovery rate, keeping the *expected proportion* of false positives among discoveries low, which I prefer for exploratory screens where I can tolerate some. I'd give a concrete example I owned: an A/B test measuring 15 secondary metrics flagged two as significant, but after BH correction only one survived, and reporting that honestly stopped the team from chasing a noise result. I'd also note pre-registering the primary metric sidesteps much of the problem. On AWS I'd run these sweeps over Redshift data. A bar-raiser listens for whether you *proactively* recognize the inflation, pick Bonferroni versus FDR by context, and resist cherry-picking the winners.
