---
qid: ing_776b6db815__eli5__local
question: How to populate Sales Rank table? — Salesrankbycategory
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 283
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:41-05:00'
sources: []
---

Imagine a classroom where every student’s score on a test is recorded, but you only want to know how each student ranks *within their own grade level* (freshman, sophomore, etc.). In the same way, a **Sales Rank by Category** table lists products and shows how many units each sold relative to others in the same category.  

To build it:  
1. **Collect sales data** – for every product, count how many times it was bought during your chosen period.  
2. **Group by category** – separate the counts into their categories (e.g., “Electronics,” “Books”).  
3. **Sort within each group** – order products from highest to lowest sales.  
4. **Assign ranks** – give the top seller rank 1, the next rank 2, and so on; ties can share a rank or be broken by another rule (e.g., last‑day sale).  

The result is a table where each row shows *Product ID*, *Category*, *Units Sold*, and *Rank in that Category*. This ranking lets you spot which items are truly popular within their niche, just as the classroom ranks students per grade level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
