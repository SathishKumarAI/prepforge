---
qid: ing_539bcdae35__fp__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 399
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:46-05:00'
sources: []
---

**Why a κ < 0.60 is deemed “poor”**

Kappa (κ) measures *observed* agreement between two raters relative to the agreement expected by chance alone.  
Let \(p_o\) be the proportion of cases where both raters agree, and \(p_e\) the probability that they would agree if their ratings were independent (computed from each rater’s marginal totals).  

The formula
\[
\kappa = \frac{p_o - p_e}{1-p_e}
\]
normalises the excess agreement to a scale where 0 means “chance‑level” and 1 means perfect concordance.  
Because \(p_e\) can be large when categories are imbalanced, κ is sensitive to prevalence; even a high raw accuracy can yield a low κ if most cases fall into one category.  

**Why the threshold of 0.60?**  
Cohen’s original guidelines (1977) were empirically derived from psychometric studies: values above 0.60 typically corresponded to at least *moderate* agreement, while below that, raters’ judgments are largely independent of each other. The 0.60 cut‑off is a pragmatic compromise—lower than the “fair” (≈ 0.40) yet still allowing for meaningful reliability in many applied settings.

**Non‑obvious insight:**  
κ is *invariant* under simultaneous relabelling of categories: if you permute the labels of one rater, κ remains unchanged. This property means that κ captures agreement on *structure*, not on specific category names—useful when categories are arbitrary but the pattern of concordance matters (e.g., in clustering validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
