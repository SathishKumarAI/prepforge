---
qid: ing_a869fe9b06__eli5__local
question: 'Explain: Borrowing an idea from operating systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 274
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:07-05:00'
sources: []
---

Imagine a library that wants to answer readers’ questions quickly.  
An operating system solves this by **caching** – it keeps the most‑used books on a shelf so they’re ready at hand, instead of fetching them from deep storage every time.  

Machine learning borrows that same idea when it runs models on new data. After training, a model often has to answer many similar questions (classify pictures, translate sentences). Rather than recomputing everything from scratch for each input, the system stores *partial results*—the most useful “features” or hidden‑layer outputs—in memory. When a new example arrives, it reuses those cached features, speeding up inference and saving computation.

So, just as an OS keeps hot data nearby to avoid slow disk reads, ML systems keep hot model activations in fast memory to give instant answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
