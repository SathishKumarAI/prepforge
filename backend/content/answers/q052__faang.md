---
qid: q052
question: "What is the difference between mean, median, and mode, and when is each useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume these are the three measures of central tendency and that the interviewer wants definitions plus judgment about when each is the right summary.

**Approach** — Define each, then contrast their behavior on skewed data and different data types.

**Depth** — The mean is the arithmetic average, sum divided by count. The median is the middle value when data is sorted (average of the two middles for even counts). The mode is the most frequent value. Their key difference is sensitivity to skew and outliers: the mean uses every value, so extreme values pull it strongly. The median is robust, a few outliers barely move it. Use the mean for roughly symmetric data (e.g., heights) where you want a summary that reflects all values. Use the median for skewed distributions like income or house prices, where a few large values would distort the mean, the median better reflects the "typical" case. Use the mode for categorical data (most common product) or to find the peak of a distribution, and it's the only measure that works for nominal data.

**Edge cases** — Multimodal data has several modes; the mode may not exist or be unique; mean is undefined for categories.

**Optimize & communicate** — I'd report median alongside mean and flag when they diverge, since that gap itself signals skew, a small insight that shows statistical literacy.
