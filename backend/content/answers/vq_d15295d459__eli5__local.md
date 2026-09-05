---
qid: vq_d15295d459__eli5__local
question: What is combiner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 208
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:03-05:00'
sources: []
---

In a Map‑Reduce workflow, the **combiner** is like a mini‑summarizer that works right after each mapper finishes its job but before the data travels across the network.

Imagine you’re baking cookies for a big party. Each baker (mapper) makes several batches of dough and writes down how many chocolate chips went into each batch. Instead of sending every single dough record to the central kitchen, each baker first adds up the chocolate chips from their own batches and writes only one line: “I made 120 chips.” That line is the combiner’s output.

The combiner reduces traffic by aggregating data locally—summing counts, finding min/max, or averaging—so fewer records reach the reducer. It’s optional; if it doesn’t change results (like summing numbers), the system can use it to speed up processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
