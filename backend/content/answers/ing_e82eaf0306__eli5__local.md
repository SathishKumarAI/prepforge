---
qid: ing_e82eaf0306__eli5__local
question: 'Explain: Evaluating RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 294
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:02-05:00'
sources: []
---

Imagine a chef who prepares a dish by first looking up the best recipe (retrieval) and then cooking it with fresh ingredients (generation). A *Retrieval‑Augmented Generation* (RAG) pipeline works the same way: a model fetches relevant documents, then uses them to answer questions.  

When we *evaluate* such pipelines, we’re checking two things:

1. **How good is the chef’s recipe search?** We measure if the retrieved passages actually contain the needed information—like a “search accuracy” score that counts correct hits versus misses.

2. **How tasty is the final dish?** Here we judge the generated answer’s quality: does it use the right facts, stay on topic, and read naturally? We rate this with metrics such as BLEU, ROUGE, or human‑judged relevance.

Haystack tutorials walk you through setting up these tests: they show how to run a test set, automatically calculate search hit rates, compute language‑model scores, and finally let humans give thumbs‑up or thumbs‑down. By combining both checks, we can fine‑tune the RAG system until it fetches the best facts *and* turns them into clear, accurate answers—just like a chef perfecting both recipe choice and cooking style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
