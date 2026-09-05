---
qid: ing_6fedf384de__eli5__local
question: 'Explain: Walk me through the BPE training algorithm step by step.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 271
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:26-05:00'
sources: []
---

Imagine you’re building a secret codebook for a story that keeps changing.  
**Step 1 – start with letters**: Write every word as a sequence of single letters (plus an “end‑of‑word” mark).  
**Step 2 – find the most common pair**: Scan all words and pick the letter pair that appears together the most times (e.g., “th”).  
**Step 3 – merge it**: Treat that pair as one new symbol (“th”) and replace every occurrence in the book. Now your book has a mix of single letters and this new two‑letter token.  
**Repeat**: Keep repeating steps 2–3, each time choosing the most frequent adjacent symbols (which can be single letters or previously created tokens) and merging them into a new symbol.  
After you’ve done enough merges—say 10 000—you have a compact vocabulary of common sub‑words. When a new sentence arrives, split it into those learned symbols; if something is missing, fall back to letters.  

So BPE is just “look at what shows up together most often and glue them together,” building a hierarchy from single characters to whole words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
