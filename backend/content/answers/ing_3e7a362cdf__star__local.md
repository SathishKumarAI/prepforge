---
qid: ing_3e7a362cdf__star__local
question: 'Explain: Drawbacks — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:19-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce recommendation system project, our data lake held tens of millions of user interactions across multiple product categories. The team was debating whether to split the dataset by feature type (vertical partitioning) or by user segment (horizontal partitioning).

**Task**  
I needed to evaluate each approach’s impact on model training speed, storage costs, and downstream pipeline complexity, then recommend a strategy that balanced performance with maintainability.

**Action**  
I benchmarked both schemas on our Spark cluster. For vertical splits, I stored each feature column in separate Parquet files, enabling predicate push‑down but causing many small files and increased shuffle during joins. For horizontal splits, I partitioned by user cohort (e.g., age group), which reduced file size per node and allowed data locality, but required careful handling of cross‑segment interactions. I also ran a cost model: vertical partitions saved 15 % storage but added 30 % overhead in job runtime; horizontal partitions cut training time by 25 % while increasing maintenance scripts by ~10 %. I presented these findings with visual charts and suggested a hybrid approach: key features kept vertically for quick access, while bulk user data stored horizontally.

**Result**  
The team adopted the hybrid plan, reducing overall training time from 12 h to 9 h and cutting storage costs by 12 %. I learned that practical trade‑offs often lie between extremes, and quantifying them with real cluster metrics is essential for convincing stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
