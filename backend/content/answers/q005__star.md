---
qid: q005
question: "What is the difference between Breadth-First Search (BFS) and Depth-First Search (DFS)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was working on a social-network feature that recommended "people you may know" within a certain number of connection hops, and the first version I inherited was timing out and returning weirdly distant suggestions.

**Task** I needed to fix both correctness and performance by choosing the right graph traversal.

**Action** The old code used DFS, which dives down one path as deep as possible using a stack before backtracking, so it was returning 6-hop-away people before nearby ones. Since I needed the closest connections first, I switched to BFS, which explores level by level using a queue and therefore guarantees the shortest path in an unweighted graph. I capped the BFS at depth 3 and added a visited set to avoid revisiting nodes. I kept DFS around for a separate cycle-detection job where memory mattered more, since DFS only holds one path in memory.

**Result** Suggestion relevance improved sharply and p95 latency dropped from 1.8s to 240ms. The takeaway: BFS for shortest-path and nearest results, DFS when you need to probe deep or save memory.
