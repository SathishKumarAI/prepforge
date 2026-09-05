---
qid: vq_636f84a249__eli5__local
question: what is the procedure of updating the rows that have been directly uploaded?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 247
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:34-05:00'
sources: []
---

Think of a spreadsheet as a big book where each line is a *row* and each column is a *field*.  
When you “upload” data, it’s like printing new pages into that book—every row appears exactly as you sent it, with no extra information.

Now, if one of those rows needs a change (say the price of an item was wrong), you don’t rewrite the whole book. Instead you use a *patch*: you point to the exact page and line (the row) that holds the mistake and replace its contents with the new values. In data‑engineering terms, this is called **updating**.  

The steps are:

1. **Identify** the rows that need change (often by an ID or key).  
2. **Apply** a new value to the specific fields in those rows.  
3. **Save** the changes so future reads see the updated data.

Just like editing a single page in a book, you touch only what’s necessary, leaving everything else untouched and keeping the dataset consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
