---
qid: q057
question: "What do variance and standard deviation measure?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Dive Deep**: dispersion is often more decision-relevant than the average. Variance measures the average squared deviation from the mean, quantifying spread; standard deviation is its square root, back in the original units, so it's the interpretable one. A larger value means more variability and less predictability.

The interview move is showing why spread drives real decisions. I'd give a concrete example: two model-serving configs had the same mean latency of 200ms, but one had a standard deviation of 30ms and the other 150ms; the high-variance config was blowing our p99 SLA even though the means matched, so we shipped the tight one. That's the story that shows I don't stop at the mean. I'd also mention practical caveats: standard deviation is sensitive to outliers and assumes a meaningful mean, so for heavy-tailed data I complement it with IQR or percentiles, computed easily in Athena or QuickSight. A bar-raiser listens for whether you instinctively pair any average with a measure of spread and reason about the tails, because that's where SLA breaches, risk, and customer pain actually live.
