---
qid: ing_af3bf76a53__eli5__local
question: Why does the transformer use multiple attention heads instead of one large
  one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 194
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:15:10-05:00'
sources: []
---

Imagine you’re in a big room full of different lights—some bright, some dim, some warm, some cool. If you only had one light switch, you could turn the whole room on or off, but you couldn’t choose which lights to highlight at once. A transformer uses *attention heads* like having several switches that let it focus on many parts of a sentence simultaneously.

Each head learns its own “lens”: one might look for subject–verb patterns, another for punctuation, another for synonyms. By splitting the work, each head can be simpler (smaller) but together they cover all the important angles. A single huge attention would have to juggle every angle in one go, making it harder to learn and slower to compute. Thus multiple heads give the model a richer, faster way to understand language.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
