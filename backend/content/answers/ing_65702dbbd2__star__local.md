---
qid: ing_65702dbbd2__star__local
question: 'Explain: Getting the Baseline with df.describe() — 7 Steps to Automating
  Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 467
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:42-05:00'
sources: []
---

**Situation:**  
In a recent churn‑prediction project for a telecom client, the data science team was juggling 45 feature columns and over 1 M rows. The senior analyst asked me to set up a quick baseline of descriptive statistics so we could spot outliers, missingness, and scaling issues before feeding everything into a gradient‑boosted model.

**Task:**  
I needed to build an automated script that would run `df.describe()` on any incoming dataset, capture the key metrics (mean, std, min, 25th, median, 75th, max), flag columns with >10 % missing or skewness >2, and output a tidy markdown report for stakeholders.

**Action:**  
1. Created a `stats_pipeline.py` that reads a CSV via `pandas.read_csv`.  
2. Wrapped `df.describe().T` in a function that adds a “missing %” column (`df.isna().mean()*100`).  
3. Calculated skewness with `scipy.stats.skew` and flagged high‑skew columns.  
4. Used `jinja2` templates to generate an HTML report, embedding the stats table and quick plots (histograms via `seaborn`).  
5. Integrated the script into a CI/CD pipeline using GitHub Actions; on each PR it runs the pipeline and posts the markdown in the PR comment.  
6. Configured alerts: if any metric deviates from the baseline by >3 σ, an email is sent to the data‑ops team.  
7. Documented the process in Confluence so new analysts could run `python stats_pipeline.py --input path/to/data.csv`.

**Result:**  
The automated report reduced manual exploratory time from 4 hours per dataset to under 5 minutes. We caught a column with 32 % missing data and an extreme skew before model training, saving the team $3k in wasted GPU hours. I learned how to blend pandas, SciPy, and CI tools into a reusable analytics workflow that scales across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
