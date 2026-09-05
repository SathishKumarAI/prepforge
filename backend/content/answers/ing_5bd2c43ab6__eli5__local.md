---
qid: ing_5bd2c43ab6__eli5__local
question: 'Explain: to start with perfect um yeah so — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 307
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:44-05:00'
sources: []
---

**Imagine you’re building a giant, organized LEGO city that must hold cars instead of blocks.**  
The “perfect” design starts by asking the same questions any city planner asks: *How many cars will arrive each hour?* (traffic flow) *Where do they park?* (space allocation) *What paths let them move in and out quickly?* (lane layout).  

Think of the garage as a **multi‑level library**. Each level is a floor; each aisle is a “row” of shelves that cars line up on. A “bookcase” holds one car, so you must decide how many rows fit on a floor before adding another level—just like choosing shelf width and depth.  

The system needs three simple rules:  
1. **Capacity** – total spots = (rows per floor) × (spots per row) × (floors).  
2. **Access time** – the farther a spot, the longer it takes to reach; use elevators or ramps to keep travel short.  
3. **Scalability** – add another floor or widen lanes without disrupting current traffic, like adding more shelves to a growing library.

With this LEGO‑city mindset, you can sketch a parking garage that’s efficient, expandable, and easy for cars to navigate—exactly what Amazon wants in its interview design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
