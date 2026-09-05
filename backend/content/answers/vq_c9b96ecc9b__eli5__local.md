---
qid: vq_c9b96ecc9b__eli5__local
question: What is a Rollback ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 223
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:40-05:00'
sources: []
---

**Rollback (in data systems)**  
Imagine you’re writing a story on paper and decide it’s not going the way you want. Instead of keeping the changes, you tear out the pages and start again from the last clean draft. In computing, that “clean draft” is called a *checkpoint* or *commit point*.  

A **rollback** is the computer’s version of tearing out the bad pages: it undoes every change made after the checkpoint so the data returns to its previous consistent state.  
- **Transaction** – a group of operations that must all succeed together.  
- **Commit** – the moment the transaction’s changes are permanently saved.  

If anything goes wrong before the commit, the system “rolls back” to the checkpoint, discarding all intermediate steps so nothing is left corrupted or half‑finished. This keeps data safe and reliable, just like a good editor keeps your story intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
