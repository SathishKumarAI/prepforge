---
qid: ing_90f0f4c55f__eli5__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 317
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:45-05:00'
sources: []
---

Think of a bookstore that wants to show its most‑sold books in each genre on the front page.  
The *sales rank by category* system is just that, but for an online store and with lots more data.

**What it does (plain terms)**  
1. **Collect sales data** – every time someone buys something, we note the product’s price, quantity, and which category it belongs to.  
2. **Group by category** – all items are sorted into shelves like “Electronics,” “Clothing,” etc.  
3. **Count sales per item** – for each shelf we count how many copies of every book were sold during a chosen period (last week, month, etc.).  
4. **Sort the counts** – on each shelf we order the books from most to least sold; the top spot is rank 1, next is rank 2, and so on.  

The system updates these tallies automatically, so every time a new sale happens the ranks shift just like a dynamic leaderboard in a game.

*Unavoidable terms*:  
- **Category**: a group that items belong to (e.g., “Books”).  
- **Rank**: position in an ordered list, with 1 being the highest.  

This design lets shoppers quickly see which products are hot in each category, just as a bookstore’s front‑page display shows the bestselling titles on every shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
