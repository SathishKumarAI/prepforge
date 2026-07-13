---
qid: q005
question: "What is the difference between Breadth-First Search (BFS) and Depth-First Search (DFS)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume unweighted graph/tree traversal (that's where the contrast is cleanest) and say so. Ask implicitly: do they want the data structure, the guarantees, or both? Give all three.
2. **Mental model.** Tie each algorithm to its frontier data structure: **BFS = queue (FIFO)**, explore level by level; **DFS = stack/recursion (LIFO)**, plunge down one branch then backtrack. The data structure *is* the difference.
3. **Reason step by step.** From the queue, derive that BFS is complete and finds the **shortest path in edges**, but pays memory `O(b^d)` holding a whole frontier. From the stack, derive that DFS is memory-light `O(b·d)` but is **not** shortest-path-optimal and can get lost in deep or infinite branches.
4. **Traps to avoid.** The classic swap — never say BFS uses a stack or DFS a queue. Don't claim DFS finds shortest paths. Note shortest-path optimality only holds for BFS on *unweighted* graphs (use Dijkstra/A* when edges have weights).
5. **Sanity-check + delivery.** Mentally run both on a small tree to confirm the traversal order. Close with the rule of thumb: BFS when the solution is shallow or you need the shortest path; DFS when memory is tight or solutions are deep.
