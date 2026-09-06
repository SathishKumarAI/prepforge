---
qid: vq_7fbd355299__faang__local
question: How do you determine if a dataset is normal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:22-05:00'
sources: []
---

**Clarify**  
We’re asked whether *a given data set follows a normal (Gaussian) distribution*. I’d confirm:  
- Are we talking about univariate or multivariate data?  
- Do we need to test for normality only, or also estimate parameters (µ, σ)?  
- Is the goal statistical inference, model selection, or just exploratory analysis?

**Approach**  
1. Visual checks → histogram, Q‑Q plot, boxplot.  
2. Summary statistics → mean ≈ median, skewness ≈ 0, kurtosis ≈ 3.  
3. Formal tests → Shapiro–Wilk (small n), Anderson–Darling or Lilliefors (larger n).  
4. For multivariate data → Mardia’s skewness/kurtosis, Henze–Zirkler test.

**Depth**  
- *Shapiro–Wilk*: \(W = \frac{(\sum a_i x_{(i)})^2}{\sum(x_i-\bar{x})^2}\); powerful for n<2000.  
- *Anderson–Darling*: emphasizes tails; statistic \(A^2 = -n - \frac{1}{n}\sum (2i-1)[\ln F(x_{(i)}) + \ln(1-F(x_{(n+1-i)}))]\).  
- Report p‑value: reject normality if p < α (commonly 0.05).  
- For large samples, even trivial deviations yield small p; consider effect size or visual inspection.

**Edge Cases**  
- Small n → tests lack power; rely on plots.  
- Tied values or discrete data → normality assumption meaningless.  
- Multimodal distributions → tests may pass if overall shape fits Gaussian but are misleading.

**Optimize & Communicate**  
Explain that no single test is definitive; combine visual, descriptive, and statistical evidence. If the dataset fails normality, suggest transformations (log, Box–Cox) or non‑parametric alternatives. Highlight trade‑offs: more powerful tests vs. sensitivity to sample size, and how I’d document findings for downstream modeling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
