---
qid: ing_d3d3877ef5__eli5__local
question: 'Explain: Measuring Cache Performance — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 261
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:55-05:00'
sources: []
---

**What is caching?**  
Imagine you’re a chef who has to make many identical sandwiches every hour. Instead of slicing bread, spreading butter, and adding toppings each time, you keep a ready‑made sandwich on the counter. When someone asks for it, you hand it over instantly. That ready‑made sandwich is like *cache* – a fast, temporary storage that holds data or results you use often.

In machine learning systems, models and big datasets are expensive to fetch from disk or compute. A cache stores the most frequently used pieces (e.g., pre‑computed embeddings, intermediate tensors) in memory so future requests hit quickly instead of recomputing or re‑reading from slow storage. The key ideas:  
- **Speed:** Memory is much faster than disk.  
- **Space trade‑off:** You keep only what you need most; the rest stays on slower storage.  
- **Eviction policy:** When the cache fills, it discards the least useful items (like a chef clearing the counter for new orders).  

So caching in system design is simply keeping hot data close at hand to shave milliseconds off every request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
