---
qid: vq_47db4409e8__eli5__local
question: How do you define a DataFrame in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 226
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:08-05:00'
sources: []
---

Think of a **DataFrame** like a spreadsheet that lives inside your computer’s memory.  
Just as a sheet has rows (people, dates, products) and columns (name, age, price), a DataFrame holds data in a two‑dimensional table where each column can be a different type—numbers, text, or even dates.

In Pandas you create it with the `pd.DataFrame()` constructor. You feed it a dictionary whose keys become column names and values are lists (or arrays) of cell values:

```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob'],
    'Age' : [25, 30],
    'Score': [88.5, 92]
})
```

Now `df` behaves like a tiny database: you can filter rows, add or drop columns, and perform calculations—all while keeping the familiar tabular layout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
