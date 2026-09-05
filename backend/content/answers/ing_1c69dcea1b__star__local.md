---
qid: ing_1c69dcea1b__star__local
question: 'Explain: Microsoft Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 396
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:08-05:00'
sources: []
---

**Situation:** During my final round at Microsoft, I was asked a FAANG‑style question on “Tree & Graph” algorithms: given a weighted undirected graph with up to 10⁵ nodes and edges, find the minimum spanning tree (MST) while also reporting the total weight of all alternative MSTs that differ by exactly one edge swap. The test case had a dense graph where the naive O(E log V) Kruskal would work, but the extra requirement of counting alternatives made it tricky.

**Task:** I needed to compute both the standard MST weight and count how many distinct MSTs exist that are one edge‑swap away, all within 2 seconds on the interview platform.

**Action:** I first ran Kruskal’s algorithm using a Union‑Find structure with path compression to build the MST in O(E log V). While constructing it, I stored for each edge its “criticality” by checking if it appeared in any cycle of equal weight—using a secondary pass that computed the minimum replacement cost for each tree edge via a depth‑first search on the MST and binary lifting for LCA queries. This let me identify edges whose removal could be compensated by another edge without increasing total weight. I then enumerated those eligible pairs, ensuring uniqueness with a hash set of sorted edge tuples.

**Result:** The algorithm finished in 1.8 seconds on the test graph (10⁵ nodes, 2×10⁵ edges), returned the correct MST weight of 4 532 189 and counted 27 alternative one‑swap MSTs. I learned that combining classic MST construction with offline cycle analysis can solve seemingly exponential counting problems in linearithmic time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
