---
qid: ing_0e20b8975c__star__local
question: 'Explain: we have to prefix it with the — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 406
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:56-05:00'
sources: []
---

**Situation** – In a university capstone project, my team was developing an image‑classification model for campus security. The dataset we scraped from the campus network had filenames like “intruder_001.jpg”, but our annotation tool required every label to start with a fixed prefix (“SEC_”) so that downstream pipelines could filter them by department.

**Task** – I needed to write a script that automatically added the “SEC_” prefix to all image labels and updated the corresponding CSV metadata, without breaking existing references or duplicating entries. The transformation had to run in under 30 seconds on our 4‑core laptop so we could iterate quickly.

**Action** – Using Python 3.10 with `pandas` for CSV manipulation and `pathlib` for filesystem paths, I wrote a one‑liner lambda inside a list comprehension:  
```python
df['label'] = df['label'].apply(lambda x: f"SEC_{x}" if not x.startswith("SEC_") else x)
```
I then validated the changes with a quick checksum against the original file list and used `tqdm` to display progress. To ensure idempotence, I added a guard that skipped already‑prefixed files.

**Result** – The script processed 12 k images in 18 seconds, updated 12 k rows in the CSV, and prevented any accidental double‑prefixing. Our training pipeline ran without errors, boosting validation accuracy by 3.1 % because the model no longer misread labels. I learned that a small, well‑tested preprocessing step can save hours of debugging later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
