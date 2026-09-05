---
qid: vq_ca9d094fcf__eli5__local
question: What is the datatype difference between a fact and dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 189
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:56-05:00'
sources: []
---

Think of a library that tells stories about books (facts) and about the people who read them (dimensions).  
**Fact table** = the story itself – it records *what happened* and *how many times*. It holds numbers like “pages read” or “time spent”. The columns are all **numeric** values that you add, average, or compare.  

**Dimension table** = the backdrop of the story – it describes *who*, *where*, *when*, or *why*. Its columns contain labels such as book title, author name, or reading date. These are **text (string)** or **date** types that help you filter and group the facts.

So, fact tables store quantitative data for calculations; dimension tables hold descriptive attributes used to slice those numbers into meaningful stories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
