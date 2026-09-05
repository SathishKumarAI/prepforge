---
qid: ing_ed798a7975__eli5__local
question: 'Explain: FAANG System Design Interview: Design A Location Based Service
  (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 270
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:22-05:00'
sources: []
---

Imagine you’re building a giant “smart map” that tells people where the best coffee shops or parks are around them—just like Yelp or Google Places.  
**Step 1: Collect data** – Think of every business as a tiny card in a massive library. Each card has a name, address, rating, and *geographic coordinates* (latitude/longitude).  
**Step 2: Store it efficiently** – Instead of searching the whole library each time, you split the Earth into a grid (like pizza slices). Every slice holds only the cards that fall inside it; this is called a **spatial index**.  
**Step 3: Answer user queries** – When someone asks for “coffee near me,” the system looks at the few slices covering their current coordinates, pulls the relevant cards, and sorts them by rating or distance.  
**Step 4: Keep it fresh** – New reviews arrive all the time; a background job updates the ratings in real‑time so users see up‑to‑date info.  

So the service is just a fast lookup system that maps user coordinates to nearby business cards, using grids and periodic refreshes to stay accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
