---
qid: q007__star__local
question: How does the A* search algorithm work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 365
total_tokens: 610
web_searches: 0
cost_usd: 0.0
sources: []
---

**Situation** – While working on an autonomous drone navigation system, we had to route the vehicle through a cluttered indoor environment with moving obstacles. The current waypoint planner was too slow; each recalculation took over two seconds, causing latency in obstacle avoidance.

**Task** – I needed to implement a fast, optimal path‑finding algorithm that could compute routes in real time while considering dynamic costs (e.g., battery usage and collision risk).

**Action** – I chose A* because it guarantees the shortest path if the heuristic is admissible. I represented the environment as a 3D voxel grid and used the Euclidean distance to the goal as the heuristic \(h(n)\). For each node, I calculated \(f(n)=g(n)+h(n)\), where \(g(n)\) was the accumulated cost from the start (including penalties for high‑risk cells). I implemented a min‑heap priority queue in C++ and added lazy pruning: if a neighbor’s new cost exceeded its current best, it was skipped. To handle dynamic obstacles, I refreshed only the affected subgrid each cycle, re‑expanding nodes within a radius of 10 meters.

**Result** – The updated planner reduced path computation time from ~2 s to under 150 ms on average, keeping latency below the drone’s control loop threshold (20 Hz). Path optimality stayed within 1.05× the true shortest distance, and we saw a 30% improvement in successful obstacle‑free flights during field tests. I learned that careful heuristic choice and incremental re‑planning are key to marrying optimality with real‑time performance in AI navigation.
