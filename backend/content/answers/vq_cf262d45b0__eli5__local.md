---
qid: vq_cf262d45b0__eli5__local
question: How do you import a CSV file?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 262
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:40-05:00'
sources: []
---

Imagine your CSV file is a neatly packed suitcase full of data, and you’re the traveler who wants to unpack it into a tidy room (your program). In Python, the most common way to do this is with the **pandas** library, which acts like a smart assistant that knows how to open different kinds of suitcases.

```python
import pandas as pd          # 1. Ask for the assistant
df = pd.read_csv('data.csv')   # 2. Hand over the suitcase and say “open it”
```

- **`import pandas as pd`** tells Python, “Give me a friendly name (`pd`) to call this helper.”  
- **`read_csv()`** is the assistant’s magic spell that reads the file, splits each line into columns, and turns everything into a table called a *DataFrame* (think of it as a spreadsheet in memory).

Now you can browse `df.head()`, filter rows, or feed it straight into an AI model. The process is just opening a suitcase and laying out its contents so your program can see them clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
