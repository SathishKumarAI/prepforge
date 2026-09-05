---
qid: ing_80e23139da__eli5__local
question: 'Explain: Dynamic mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 210
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:00-05:00'
sources: []
---

**Dynamic mapping – think of it as a “smart filing cabinet.”**

When you first drop a document into an elastic search index, the system looks at each field (like *name*, *price*, or *date*) and decides what type of file box to use: a folder for text, a ledger for numbers, a calendar slot for dates. If it sees a new field that hasn’t been seen before, it automatically creates a new box for that field without you having to tell it ahead of time. That’s the “dynamic” part – the system adapts on its own.

You can still control how strict the cabinet is: let it create boxes freely (the default), or require you to define every type first and refuse unknown fields. But most people use dynamic mapping because it lets data arrive in any shape, and Elasticsearch will happily add the right box for each new field as soon as it appears.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
