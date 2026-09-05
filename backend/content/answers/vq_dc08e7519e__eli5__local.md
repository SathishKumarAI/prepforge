---
qid: vq_dc08e7519e__eli5__local
question: what is the role of partitoner in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 191
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:46-05:00'
sources: []
---

Think of Hadoop as a huge library that reads books (data) and gives them to many librarians (tasks). A **partitioner** is the librarian’s sorting desk: it decides which book goes to which librarian so they can work in parallel without stepping on each other’s toes.

When MapReduce starts, each mapper produces key‑value pairs. The partitioner looks at the *key* and, using a simple rule (like the first letter of a name), assigns that pair to one of the reducers. All pairs with the same key end up in the same reducer so they can be combined together.

So, the partitioner’s job is: “Take every output from mappers, look at its key, and hand it off to the correct reducer.” It keeps the workload balanced and ensures related data stays together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
