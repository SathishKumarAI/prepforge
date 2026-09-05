---
qid: ing_3d08354d6b__eli5__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 236
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:28-05:00'
sources: []
---

Imagine a giant library where every book is a place on Earth and the reader’s request is “Show me all good coffee shops near my current spot.”  
*Location* is just the address (latitude/longitude) that tells you where something sits on the map.  
The system first *indexes* every place by its coordinates, like putting each book into a shelf that knows which city it belongs to. When a user asks for nearby spots, the service looks up the shelf closest to the user’s coordinates and pulls out all the books (places) inside a set radius—this is called a **geospatial query**.  
Once the relevant places are found, the system *scores* them: how close they are, how many good reviews they have, whether the user likes that cuisine, etc. This score decides which names appear at the top of the list.  
So, a location‑based service is just a fast lookup of nearby “books” followed by a simple ranking algorithm that shows the most relevant places first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
