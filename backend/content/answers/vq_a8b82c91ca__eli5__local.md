---
qid: vq_a8b82c91ca__eli5__local
question: What database events can be set?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 279
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:22-05:00'
sources: []
---

Imagine your database is a library and you’re the librarian who decides what happens when people enter, borrow books, or try to sneak out. In this “library,” you can set **database events**—little alerts that tell you when certain actions occur.

The main categories are:

1. **User activity** – logging logins, failed logins, and changes to user accounts.  
2. **Data access** – recording reads or writes on tables, views, or columns.  
3. **DDL (structure) changes** – capturing creation, alteration, or dropping of objects like tables, indexes, or procedures.  
4. **System actions** – noting backups, restores, or configuration changes.  

You pick which of these events to “watch” by configuring audit policies; the system then writes a record every time one of those actions happens. Think of it as setting up motion‑sensor lights in specific rooms: you choose where to put them and what kind of movement will trigger an alarm. The audit logs are your night‑time security footage, letting you review exactly who did what and when.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
