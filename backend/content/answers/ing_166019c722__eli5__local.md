---
qid: ing_166019c722__eli5__local
question: 'Explain: Random Replacement (RR) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 372
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:09-05:00'
sources: []
---

**Random Replacement (RR)** is a simple rule for deciding which item to throw out of a small “memory shelf” when it’s full and you need room for something new.  
Think of the shelf as a tiny bookshelf in your office that can hold only seven books at once. Every time you want to add a new book, you close your eyes, point at one of the current books, and remove it—no matter how old or recent it is. That’s exactly what RR does: it chooses an item completely at random and evicts it, then places the new item in its spot.

**Why use it?**  
- **Speed:** It takes almost no time to pick a random book.  
- **Fairness:** Every cached item has an equal chance of staying or leaving, so no single piece of data is unfairly favored.  

Other common eviction strategies include:
1. **Least Recently Used (LRU)** – removes the item that hasn’t been accessed for the longest time.  
2. **Most Recently Used (MRU)** – removes the most recently accessed item.  
3. **First In, First Out (FIFO)** – removes the oldest item added to the cache.  
4. **Least Frequently Used (LFU)** – removes the item that has been accessed the fewest times overall.  
5. **Most Frequently Used (MFU)** – removes the most frequently accessed item.  
6. **Clock** – a slightly smarter version of FIFO that gives items a second chance.  

Random Replacement is often chosen when simplicity and speed matter more than perfect accuracy, especially in systems where cache size is tiny or access patterns are unpredictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
