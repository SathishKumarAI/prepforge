---
qid: ing_83188028a5__eli5__local
question: 'Explain: Caching Strategy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 267
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:33-05:00'
sources: []
---

**Imagine a busy kitchen that prepares gourmet meals (your machine‑learning model).**  
The chef can’t fetch every ingredient from the pantry every time— it would take forever and waste energy. Instead, the chef keeps a small **pantry (cache)** near the stove with the most frequently used ingredients: salt, pepper, butter, a few fresh herbs.  

- **Cache** = a fast, temporary storage right next to the processor.  
- **Key‑value pair** = an ingredient name and its quantity in that pantry.  
- **Eviction policy** (e.g., LRU – “least recently used”) decides which ingredients leave the pantry when it’s full, making room for new ones.

In a system‑design interview, explain how you’d size this kitchen pantry (cache capacity), choose what stays (eviction rule), and keep the main storage (database) in check. A good strategy keeps the chef (model) cooking quickly without overloading the pantry or the pantry’s shelf space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
