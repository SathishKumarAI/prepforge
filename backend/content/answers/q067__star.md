---
qid: q067
question: "What is skewness, and how do you deal with skewed features?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was modeling customer lifetime value, and the target plus several inputs like transaction amount and session count were sharply right-skewed, with a long tail of whales. My linear baseline was badly biased on the high end.

**Task** I needed to deal with the skew so the model wasn't dominated by extreme values and the residuals behaved.

**Action** I first quantified skewness numerically, several features had skew above 2, and I visualized with histograms and Q-Q plots. For the strongly positive-skewed monetary features I applied a log1p transform, which pulled the tail in and made the distributions roughly symmetric. For a couple that included zeros and negatives I used a Yeo-Johnson power transform instead. I was careful to fit the transform on training data only and invert predictions back to the original scale for reporting.

**Result** After transformation, R-squared on the holdout improved from 0.52 to 0.68 and the residual plots straightened out. The habit I kept: always check skewness before assuming linear-model assumptions hold, and pick the transform based on whether zeros or negatives are present.
