---
qid: ing_0895509c58__faang__local
question: 'Explain: Handling Missing Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 550
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:22-05:00'
sources: []
---

**Handling Missing Values – Cleaning a Messy CSV in Python**

| Step | What I’ll Do |
|------|--------------|
| **1️⃣ Clarify** | “I need to read a CSV that contains blanks, ‘NA’, or `None` and produce a clean DataFrame for ML.”  Assumptions: *The file fits in memory*, *numeric columns use `float`, categorical use `object`*, *we’ll drop rows with >30 % missingness, otherwise impute.* |
| **2️⃣ Approach** | • Load with `pandas.read_csv`. <br>• Replace common placeholders (`'NA','None','-'`) with `np.nan`. <br>• Compute row‑wise missing ratio. <br>• Drop rows > threshold. <br>• Impute: mean/median for numeric, mode for categorical. |
| **3️⃣ Depth** | ```python\nimport pandas as pd, numpy as np\n\ndef clean_csv(path, drop_thresh=0.3):\n    df = pd.read_csv(path)\n    df.replace([\"NA\",\"None\", \"-\"], np.nan, inplace=True)\n    miss_ratio = df.isna().mean()\n    df.drop(df[miss_ratio>drop_thresh].index, inplace=True)\n    for col in df.select_dtypes(include='number'):\n        df[col].fillna(df[col].median(), inplace=True)\n    for col in df.select_dtypes(exclude='number'):\n        df[col].fillna(df[col].mode()[0], inplace=True)\n    return df\n```<br>Complexity: **O(n·m)** where *n* rows, *m* columns; memory O(m). |
| **4️⃣ Edge Cases** | • Entire column of NaNs → keep or drop based on domain. <br>• Mixed‑type columns (e.g., dates stored as strings) need custom parsing. <br>• Large files → use `chunksize` and incremental cleaning. |
| **5️⃣ Optimize & Communicate** | For production, cache the cleaned DataFrame with `feather` or `parquet`. Log missing statistics for audit. I’d explain each step to stakeholders: “We’re only dropping rows that are mostly empty; the rest get sensible imputation so we preserve data variance.” |

This concise pipeline satisfies typical FAANG interview expectations—clear assumptions, systematic plan, correct implementation details, edge‑case awareness, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
