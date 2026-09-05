---
qid: ing_d8564c71c4__eli5__local
question: 'Explain: 1.5 - Limitations of BERT — A Complete Guide to BERT with Code
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 304
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:35-05:00'
sources: []
---

Imagine BERT as a super‑smart library assistant who has read every book in the world, but only knows how to answer questions when you hand it the exact page number and ask about that page’s content.  

**Why this is a limitation**

1. **It can’t read ahead or look back** – BERT looks at words only from left to right (or both ways with its “masked” trick), but it never “remembers” what comes after the question you give it, so long‑term context is lost.  
2. **It’s heavy and slow** – Like a huge assistant that takes forever to flip through pages, BERT requires lots of memory and computing power, making it hard to run on small devices or in real time.  
3. **It struggles with new words** – If you ask about a brand‑new slang term, BERT has never seen it before; it can only guess by breaking the word into pieces (subwords), which may miss nuance.  
4. **Fine‑tuning is tricky** – Adapting this assistant to a specific task (e.g., medical diagnosis) needs a lot of labeled examples and careful tweaking, otherwise it may give generic or wrong answers.

So, while BERT is powerful for many language tasks, its “library” style limits speed, memory use, handling of unseen words, and easy customization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
