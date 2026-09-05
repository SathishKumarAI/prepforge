---
qid: vq_28aa5735fe__fp__local
question: What does the five-number summary mean in Statistics?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 451
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:51-05:00'
sources: []
---

The **five‑number summary** is a compact geometric snapshot of a univariate data set that preserves its *order statistics*.  
To build it we ask: *how can we describe the distribution using only the smallest and largest observations, and two central quantiles?*  

1. **Minimum (min)** – the left boundary of the support.  
2. **First quartile \(Q_1\)** – the 25 % point; half of the remaining data lie below it.  
3. **Median \(Q_2\)** – the 50 % point, bisecting the sample.  
4. **Third quartile \(Q_3\)** – the 75 % point; half of the remaining data lie above it.  
5. **Maximum (max)** – the right boundary.

These five values are simply the order statistics at indices \(\{1,\lfloor n/4\rfloor+1,\lfloor n/2\rfloor+1,\lceil 3n/4\rceil+1,n\}\).  
By construction they satisfy the **interquartile range (IQR) = \(Q_3-Q_1\)**, a robust scale measure that is insensitive to outliers because it ignores the extreme min and max.  

The deeper principle: the five‑number summary is an *order‑statistic estimator* of the underlying distribution’s shape. It provides a non‑parametric approximation of the empirical cumulative distribution function (ECDF) at key percentiles, thus enabling robust inference without assuming normality.

**Non‑obvious insight:**  
The median and quartiles are not merely “central” values; they form a *minimal sufficient statistic* for location under the symmetry class of distributions. In other words, if we know these three order statistics, any symmetric density that fits them is indistinguishable in terms of its central tendency—this explains why the box‑plot’s whiskers often look the same across different underlying shapes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
