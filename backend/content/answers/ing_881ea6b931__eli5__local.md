---
qid: ing_881ea6b931__eli5__local
question: 'Explain: Design of a Modern Cache - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 212
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:06-05:00'
sources: []
---

Think of a library that can serve thousands of readers at once.  
**Cache** is the front‑door desk where you quickly grab books you need most often, instead of walking all the way to the shelf.  

A *modern cache* uses two tricks to stay fast when many people arrive:

1. **Distributed storage (sharding)** – The library splits its collection into separate sections, each handled by a different desk clerk. Readers are sent straight to the right clerk based on which section their book belongs to, so no single clerk gets overloaded.

2. **Consistent hashing** – When new desks open or close, books are reassigned only slightly; most readers keep going to the same clerk. This keeps traffic smooth and avoids big re‑routing.

Because each desk works independently yet in harmony, the system scales—adding more desks lets it serve more readers without slowing down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
