---
qid: ing_a1118bbf50__eli5__local
question: 'Explain: Pros : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 309
total_tokens: 471
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:11-05:00'
sources: []
---

Think of a computer’s memory as a tiny kitchen that can hold only a few recipes at once. When you need a new recipe, the kitchen must decide which old one to toss out—this is the *cache eviction strategy*. In machine learning, we often keep a small set of data or model pieces in fast memory so training runs quickly; when it fills up, we use these strategies to free space.

1. **Least‑Recently Used (LRU)** – toss the recipe you haven’t used for the longest time.  
2. **First‑In, First‑Out (FIFO)** – discard the oldest recipe added.  
3. **Least‑Frequently Used (LFU)** – drop the recipe that’s been used the fewest times.  
4. **Most‑Recently Used (MRU)** – opposite of LRU; remove what you just used—useful when fresh data is rare.  
5. **Random Replacement** – pick a recipe at random to discard; simple but unpredictable.  
6. **Least‑Costly (LC)** – keep the recipe that costs the least to reload if needed later.  
7. **Frequency‑Weighted LRU** – blend how often and how recently a recipe was used.

Each method trades speed, memory usage, and predictability differently—just like choosing which dish to clear from your limited kitchen space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
