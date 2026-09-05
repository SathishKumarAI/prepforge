---
qid: ing_04893d1541__eli5__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 259
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:36-05:00'
sources: []
---

Imagine you’re planning the fastest route to visit several friends’ houses in a city that’s still growing new streets every day.  
Your map is like a giant spreadsheet where each street has a “travel time” (the edge weight).  
To find the quickest path from your home to any destination, you use Dijkstra’s algorithm – think of it as a smart GPS that keeps a list of the shortest known distances and repeatedly picks the closest unexplored house, then updates its route estimates for neighboring houses.  

In a Google‑Maps interview, you’re asked how you’d build this system:  
* **Graph** = all streets and intersections.  
* **Priority queue (min‑heap)** = the GPS’s “next best place to explore.”  
* **Distance table** = the current fastest times from your start point.  

You explain that as new roads appear, you simply add edges to the graph; Dijkstra still works because it only needs the latest weights when it runs. This analogy shows how the algorithm fits into a real‑world mapping service and why it’s efficient for finding routes quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
