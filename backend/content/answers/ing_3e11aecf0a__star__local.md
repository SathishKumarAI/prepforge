---
qid: ing_3e11aecf0a__star__local
question: 'Explain: what character is modified and what position'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 389
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:36-05:00'
sources: []
---

**Situation**  
In a recent churn‑prediction project I was fine‑tuning an embedding layer for customer support tickets. The training data had a recurring typo: the word “refund” was sometimes entered as “reund”. The typo appeared exactly at position 3 (the letter ‘f’ replaced by ‘u’) and it was skewing the embeddings, causing our model’s AUC to drop from 0.81 to 0.73.

**Task**  
I needed to clean the corpus so that every instance of “reund” was corrected back to “refund”, but I had to do it efficiently across millions of tickets without loading everything into memory.

**Action**  
I wrote a streaming script in Python using `pandas.read_csv` with chunks, and applied a regular expression substitution: `re.sub(r'\breund\b', 'refund', text)`. To ensure the replacement targeted only the typo at position 3, I added a look‑behind pattern `(?<=ref)` so it would not alter words like “reference”. The script logged every change for audit. After processing, I re‑indexed the embeddings and retrained the model.

**Result**  
The corrected dataset reduced noise in the embedding layer; the AUC jumped back to 0.82, a 9% relative improvement. Moreover, the preprocessing pipeline now runs in under 30 minutes on our production server. I learned that even a single character at a fixed position can have outsized effects on downstream ML metrics, and that targeted regex with look‑behinds is an efficient way to handle such edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
