---
qid: ing_ae7fb3d3da__eli5__local
question: 'Explain: Geo distance sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 219
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:08-05:00'
sources: []
---

Imagine you’re looking for the best pizza place on a map.  
You give your phone the coordinates of where you are (latitude and longitude).  
Elasticsearch then looks at every pizza place in its database, calculates how far each one is from your spot, and lists them from closest to farthest—just like a GPS “distance” feature.

**Key terms**  
* *Coordinates*: Numbers that locate a point on Earth.  
* *Distance calculation*: The math that turns two sets of coordinates into a straight‑line distance (often called the “haversine” formula).  
* *Sorting*: Reordering results so that the smallest distances appear first.

So, when you ask Elasticsearch to sort by geo distance, it’s simply ranking every record by how near it is to the point you supplied. The result feels natural: the nearest matches pop up at the top of your list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
