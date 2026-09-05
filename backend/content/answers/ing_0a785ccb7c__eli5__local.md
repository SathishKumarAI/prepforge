---
qid: ing_0a785ccb7c__eli5__local
question: 'Explain: Let’s discuss what database to use to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 253
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:52:03-05:00'
sources: []
---

Imagine you’re a librarian who must let people find the best coffee shop on their way home.  
The “database” is like a giant, well‑indexed phone book that can answer three kinds of questions quickly:

1. **Where is it?** – A spatial index (think of a map with tiny boxes called *grid cells*). Each coffee shop’s latitude/longitude is stored in the cell that contains it, so to find nearby shops you only look at the few cells around the user’s coordinates.

2. **What does it offer?** – A keyword table (tags such as “wifi,” “outdoor seating”). When a user searches for “coffee + wifi,” the system pulls all shops tagged with both words.

3. **How good is it?** – A rating list that is updated in real time, so the most recent reviews are always available.

By combining these three tables—spatial, keyword, and rating—you can answer a request like “Show me top‑rated coffee shops near my current location” almost instantly. This simple map‑plus‑index idea underlies services such as Yelp or Google Places.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
