---
qid: q074
question: "What is the multiple comparisons problem and how do you correct for it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** An analyst on my team ran 40 metrics through significance tests after an experiment and triumphantly reported three "significant" wins at p < 0.05. I was skeptical because that's roughly what you'd expect by pure chance.

**Task** I had to explain the multiple comparisons problem and put a proper correction in place before anyone acted on false positives.

**Action** I showed the math: with 40 independent tests at alpha 0.05, the probability of at least one false positive is about 87%, so finding a few "significant" results means nothing without correction. I applied a Bonferroni correction for strict family-wise error control on our primary metrics, dividing alpha by the number of tests, which is conservative. For the larger exploratory batch where Bonferroni was too harsh, I switched to Benjamini-Hochberg to control the false discovery rate instead, which keeps more power.

**Result** After correction, only one of the three "wins" survived, and it replicated in a follow-up test. We avoided shipping two phantom effects. The habit I enforce now: decide the correction method before running a battery of tests, and separate confirmatory from exploratory analyses.
