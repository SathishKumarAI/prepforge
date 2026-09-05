---
qid: ing_3dbb5e4b30__eli5__local
question: What is an attention sink, why does it exist, and what breaks if you evict
  it from the KV cache?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 242
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:35-05:00'
sources: []
---

Think of a neural‑network transformer as a huge library where each book (token) can read other books to decide what to say next.  
The **KV cache** is the shelf that keeps the “Key” and “Value” of every book you’ve already looked at, so later pages don’t have to re‑search the whole library.  

An **attention sink** is a page that everyone keeps looking back at—like a headline that repeats forever. Because it appears in almost every sentence, the transformer keeps its Key/Value on the shelf longer than usual; otherwise it would have to fetch it again each time it’s needed.

If you suddenly “evict” (remove) that key/value from the cache, the model has to re‑search the library for that page every time it needs it. That extra search costs computation and can slow things down or even cause memory thrashing if many sinks are removed at once. In short, attention sinks exist because they’re heavily reused references; keeping them cached makes the transformer run faster and smoother.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
