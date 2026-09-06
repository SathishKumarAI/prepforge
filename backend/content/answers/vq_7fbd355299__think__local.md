---
qid: vq_7fbd355299__think__local
question: How do you determine if a dataset is normal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 465
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:55:58-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   - *Goal:* Decide whether the data “looks” normally distributed (Gaussian).  
   - *Assumptions:* Data are univariate, independent observations; you have enough samples to estimate moments; outliers may be present.

**2️⃣ Adopt a multi‑step mental model**  
   1. **Visual inspection** – histogram, Q–Q plot.  
   2. **Quantitative checks** – skewness/kurtosis, goodness‑of‑fit tests (Shapiro–Wilk, Kolmogorov–Smirnov).  
   3. **Robustness to sample size** – use visual for large samples; rely more on tests for small ones.

**3️⃣ Step‑by‑step reasoning**  
   - Plot a histogram and overlay a normal density curve; look for bell shape, symmetry.  
   - Create a Q–Q plot: points should lie roughly along the 45° line.  
   - Compute sample mean, variance, skewness, kurtosis; compare to theoretical values (0,3).  
   - Perform Shapiro–Wilk (good for n<2000); if *p* > α (e.g., 0.05), fail to reject normality.  
   - Cross‑check with a Kolmogorov–Smirnov test using the estimated mean/variance.

**4️⃣ Common pitfalls**  
   - Relying solely on p‑values: small samples give low power; large samples yield tiny p‑values even for negligible deviations.  
   - Ignoring outliers that distort skewness/kurtosis.  
   - Assuming normality when data are multimodal or heavy‑tailed.

**5️⃣ Sanity‑check & communicate**  
   - Summarize: “Histogram + Q–Q suggest symmetry; skewness ≈ 0, kurtosis ≈ 3; Shapiro–Wilk p=0.12 ⇒ no evidence against normality.”  
   - Mention limitations (sample size, potential outliers).  
   - Provide visual plots and test results in a concise report.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
