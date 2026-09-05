---
qid: vq_1ec88c97e8__eli5__local
question: Can you explain how to use categorical data in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 244
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:58-05:00'
sources: []
---

Imagine your dataset is a pantry full of different types of fruit, and each column is a shelf labeled “Color” or “Taste.” In pandas, *categorical data* are like tags you stick on each fruit so the computer knows they belong to a limited set (e.g., only “Red,” “Yellow,” or “Green”).  
1. **Tell pandas it’s categorical** – use `df['color'] = df['color'].astype('category')`.  
2. **See the categories** – `df['color'].cat.categories` lists all possible colors.  
3. **Reorder or drop** – you can set a natural order (`df['color'].cat.reorder_categories([...], ordered=True)`) or remove unused ones with `.cat.remove_unused_categories()`.  
4. **Speed and memory** – because each fruit is just an integer pointer to its tag, the pantry becomes lighter and quicker to sort or group by color.  

So treat categorical columns as labeled boxes: you label them once, then pandas handles them efficiently like a well‑organized kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
