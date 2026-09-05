---
qid: vq_4917dcf2b4__star__local
question: What is Clustering, and how does it work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 326
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:39-05:00'
sources: []
---

**Situation:** In my last role at a retail analytics firm, we had a quarterly report that highlighted customer churn rates higher than industry benchmarks—about 18% versus the expected 12%. Our data science team needed to uncover hidden patterns in purchase behavior to target retention campaigns more effectively.

**Task:** I was tasked with segmenting our customer base into meaningful clusters so that each group could receive tailored marketing strategies, ultimately reducing churn by at least 3 percentage points over six months.

**Action:** First, I cleaned the transactional dataset (removing duplicates, normalizing spending variables) and engineered features like recency, frequency, monetary value, and category diversity. I then applied K‑means clustering with elbow method analysis to determine an optimal k of 5 clusters. Using scikit‑learn, I trained the model on a 70/30 train-test split, validated cluster stability via silhouette scores (~0.62), and visualized the results in a t-SNE plot to ensure distinct groupings. Finally, I collaborated with marketing to design cluster-specific email drip campaigns and track engagement.

**Result:** Within three months, churn dropped from 18% to 15%, exceeding our target by 1.5%. The project also saved the company ~$250k annually in retention costs. I learned that careful feature engineering and iterative validation are key to turning raw data into actionable customer segments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
