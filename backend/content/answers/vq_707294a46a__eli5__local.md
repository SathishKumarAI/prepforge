---
qid: vq_707294a46a__eli5__local
question: what is broadcast variable in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 171
total_tokens: 326
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:33-05:00'
sources: []
---

Imagine you’re a chef in a large kitchen and the recipe book (your data) must be shared with every station. Instead of giving each cook their own copy, you put one big printed copy on a stand that everyone can read from—this is the *broadcast variable* in Spark.

In Spark terms, a broadcast variable is a piece of data (like the recipe book) that’s sent once to every worker node and stored locally there. When workers run tasks, they all access the same local copy instead of pulling it over the network each time. This saves bandwidth and speeds up processing, just as one shared recipe keeps the kitchen running smoothly without everyone lugging around separate copies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
