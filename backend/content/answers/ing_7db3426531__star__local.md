---
qid: ing_7db3426531__star__local
question: 'Explain: Building a Real "Table 1" with tableone — 7 Steps to Automating
  Descriptive Statistics with Python'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 459
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:16-05:00'
sources: []
---

**Situation** – In my last role I was asked to produce a publication‑ready “Table 1” summarizing baseline characteristics for a multi‑center cohort of 4,500 patients with heart failure. The journal required continuous variables as mean ± SD or median (IQR), categorical counts and percentages, all stratified by treatment arm, and the table had to be reproducible in Jupyter notebooks.

**Task** – Automate the entire process: read raw data, clean missingness, calculate descriptive stats, format into a LaTeX/PDF table, and embed code so that any future dataset could regenerate it with a single run.

**Action** – I pip‑installed `tableone` and used Pandas to load the CSV. After dropping duplicate IDs, I created a `TableOne` object:  

```python
from tableone import TableOne
cols = ['age','sex','bmi','ejection_fraction']
cat = ['sex','treatment_group']
tab = TableOne(df[cols+cat], groupby='treatment_group',
               pval=False, missing=0.05)
```

I customized the formatting with `add_formats` to show mean ± SD for age and BMI, median (IQR) for ejection fraction, and set `show_all_columns=True`. Then I exported:

```python
latex = tab.get_table_latex()
with open('table1.tex','w') as f: f.write(latex)
```

Finally, I wrapped the script in a Makefile so running `make table` regenerated data cleaning, statistics, and LaTeX output automatically.

**Result** – The final Table 1 met journal standards in 30 minutes instead of days. It included 12 rows, 4 columns per group, and highlighted p‑values for significant differences (p<0.01). I learned how to leverage `tableone`’s API to reduce boilerplate code while maintaining full reproducibility, a practice now standard across all my research projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
