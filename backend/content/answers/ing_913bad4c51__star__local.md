---
qid: ing_913bad4c51__star__local
question: 'Explain: Cleaning Text Columns — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 382
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:15-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, the data science team was pulling customer feedback from a legacy CRM export. The CSV had over 12 k rows, but 30% of the “comments” column was garbled: mixed encodings, stray HTML tags, and duplicate entries that skewed sentiment analysis.

**Task**  
I needed to produce a clean text dataset in under two days so the ML pipeline could train an accurate churn‑prediction model. The goal was < 1% residual noise and a 95% retention of original comments.

**Action**  
First I loaded the file with `pandas.read_csv`, specifying `encoding='utf-8'` but wrapped it in a try/except to catch decoding errors. Using `chardet` I detected that 5% were actually ISO‑8859‑1, so I reloaded those rows separately and concatenated them back. Next, I stripped HTML with BeautifulSoup’s `.get_text()` and removed non‑ASCII characters via regex (`re.sub(r'[^\x00-\x7F]+', '', text)`). Duplicate comments were dropped with `drop_duplicates(subset='comments')`. Finally, I applied a simple tokenizer from NLTK to standardize casing and strip stopwords, storing the cleaned text in a new column.

**Result**  
The cleaned dataset had 9 800 unique, well‑formatted comments. Sentiment scores for the churn model improved by 12% AUC, and preprocessing time dropped from an estimated 6 hours to under 45 minutes. I learned that early encoding checks and lightweight HTML stripping can save massive downstream effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
