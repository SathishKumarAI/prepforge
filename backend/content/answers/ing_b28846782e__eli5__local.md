---
qid: ing_b28846782e__eli5__local
question: 'Explain: F4: Bad training data poisons the adapter'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 186
total_tokens: 345
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:45-05:00'
sources: []
---

Think of an adapter as a tiny “helper” that sits between your main AI brain and a new task—like teaching it to recognize cats in photos. The helper learns by looking at lots of examples: pictures labeled “cat” or “not cat.” If some of those pictures are wrong—say, blurry images mislabeled as “cat,” or a handful of pictures of dogs that all look like cats—the adapter starts to think “cats look like this.” It’s like training a child with a handful of mis‑named toys: the child will later mix up the names. So bad training data poisons the adapter by feeding it misleading patterns, causing it to give wrong answers on new images. The key is clean, accurate examples; otherwise the helper learns the wrong “cat.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
