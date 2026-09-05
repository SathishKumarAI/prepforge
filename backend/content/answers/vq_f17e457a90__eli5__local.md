---
qid: vq_f17e457a90__eli5__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 210
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:30-05:00'
sources: []
---

Imagine you’re making a sandwich. You have two choices for the bread: either whole‑grain or white. The *Either* type in Scala is like that choice box— it can hold **one** of two possible values, but you don’t know which one until you look.

In code, `Either[A,B]` means “either an A or a B.” By convention the left side (`Left`) stores an error or failure, while the right side (`Right`) holds a successful result. Think of `Left` as the “oops” sandwich (maybe it’s missing bread) and `Right` as the tasty, finished sandwich.

You can pattern‑match on the Either to decide what to do: if it’s `Left`, handle the error; if it’s `Right`, use the value. This gives you a clean way to return either “everything went fine” or “something went wrong,” without throwing exceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
