---
qid: vq_2124d2f59e__eli5__local
question: What is SYSTEM Tablespace and when is it created?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 176
total_tokens: 335
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:16-05:00'
sources: []
---

Think of a database like a huge, organized library.  
The **system tablespace** is the *back‑office room* where the library keeps its own books—metadata about every other book (tables, indexes, users, etc.). It stores information that Oracle needs to run, such as data dictionary objects and internal system tables.

When you create a new database, Oracle automatically builds this special tablespace first. It’s created at the very start of the installation, before any user‑defined tablespaces exist, so the system has everything it needs right away. In short, the system tablespace is Oracle’s own “control room,” always present from day one and never optional.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
