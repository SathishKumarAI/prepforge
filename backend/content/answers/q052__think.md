---
qid: q052
question: "What is the difference between mean, median, and mode, and when is each useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note that all three are measures of *central tendency* and the real question is *when* to use each. State the assumption that the interviewer wants outlier-sensitivity and data-type reasoning, not just definitions.

2. **Mental model.** Match each measure to a data situation via one property: mean uses every value (so outliers sway it), median uses only order (so it is robust), mode uses frequency (so it works on categories).

3. **Reason step by step.** Define: mean is the average, median is the middle sorted value, mode is the most frequent value. Then map to use cases: mean for symmetric, outlier-free numeric data; median for skewed data or when outliers exist (income, house prices); mode for categorical or multi-modal data.

4. **Traps to avoid.** Do not call the median the outlier-sensitive one, that is the mean. Do not restrict the mode to continuous data, it is for categories. Do not claim they are always equal (they only coincide for symmetric unimodal distributions).

5. **Sanity-check and communicate.** Add the bonus insight that separates strong answers: comparing mean vs median *diagnoses skew*, mean above median suggests right-skew, mean below median left-skew. Deliver the property-to-use-case mapping so it is immediately actionable.
