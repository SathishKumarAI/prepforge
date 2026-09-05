---
qid: ing_0253fe1bcd__eli5__local
question: 'Explain: Ongoing replication jobs — Log-based Incremental Replication |
  Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 187
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:38-05:00'
sources: []
---

Imagine your database is a big diary that keeps writing new entries every day. **Ongoing replication** is like having a friendly assistant who copies only the newest pages from the diary into another notebook so everyone can read the latest news without re-reading the whole book.

In **log‑based incremental replication**, the assistant looks at the diary’s *change log*—a list of all additions, edits, and deletions made since the last copy. The log is like a “to‑do” sheet that records every action in order. The assistant reads this sheet, copies only the new or changed pages to the other notebook, and skips anything already copied.

So, you get a fresh copy of your data without re‑transferring everything each time—just the incremental updates from the log.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
