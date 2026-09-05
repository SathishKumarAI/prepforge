---
qid: vq_99f600a830__eli5__local
question: What are Dataset, Linked Service and IR ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 251
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:24-05:00'
sources: []
---

Think of a **data pipeline** like a mail delivery system.

* **Dataset** – the *letter you’re sending*. It’s just a description: what file or table it is, where it lives, and how to read its columns. The dataset doesn’t hold the data; it tells the system “I need this package.”

* **Linked Service** – the *post office address book*. It stores the credentials and connection details for each mailbox (storage account, database, API). When a letter is sent, the post office uses the linked service to find the right door.

* **Integration Runtime (IR)** – the *delivery truck fleet*. It’s the engine that actually moves the letters. The IR can run in your own data center, on Azure, or even in another cloud, and it knows how to pick up a letter from one address book and drop it at another, handling encryption, authentication, and network hops.

So, a dataset tells *what* you want, a linked service says *where*, and the IR does the *moving*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
