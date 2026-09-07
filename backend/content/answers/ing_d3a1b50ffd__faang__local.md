---
qid: ing_d3a1b50ffd__faang__local
question: 'Explain: Validating Email Addresses — How to Clean Messy CSV Files with
  Python: A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 504
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:24-05:00'
sources: []
---

**Clarify**  
We need a robust routine that reads a raw CSV, cleans the *email* column (removing bad/duplicate entries), and writes a tidy file. I’ll assume:  
- The CSV is large but fits in memory.  
- Emails may contain whitespace, mixed case, or obvious syntax errors.  
- We want to keep the original row order for traceability.

**Approach**  
1. Read with `pandas.read_csv`.  
2. Strip spaces and lower‑case each email.  
3. Use a regex (`re.fullmatch(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}")`) to flag syntactically valid addresses.  
4. Drop rows with invalid emails or duplicates (using `drop_duplicates`).  
5. Write the cleaned DataFrame back via `to_csv`.

**Depth**  
```python
import pandas as pd, re

def clean_emails(csv_path, out_path):
    df = pd.read_csv(csv_path)
    # Normalize
    df['email'] = df['email'].astype(str).str.strip().str.lower()
    # Validate
    pattern = re.compile(r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")
    mask = df['email'].apply(lambda x: bool(pattern.fullmatch(x)))
    cleaned = df[mask].drop_duplicates(subset='email')
    cleaned.to_csv(out_path, index=False)
```
Complexity: O(n) time, O(n) memory; regex is constant‑time per string.  

**Edge Cases**  
- Empty or NaN emails → filtered out.  
- Unicode domain names (IDNs) aren’t handled – would need `idna` conversion.  
- Extremely large files > RAM – switch to chunked processing.

**Optimize & Communicate**  
For production, use `csv.DictReader` with streaming and a pre‑compiled regex for speed; log rejected rows to audit. Explain trade‑offs: full regex is simpler but less tolerant of exotic domains; chunking reduces memory at the cost of I/O overhead. This clear, testable pipeline satisfies FAANG’s emphasis on clean code, scalability, and edge‑case awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
