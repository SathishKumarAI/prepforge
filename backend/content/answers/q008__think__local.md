---
qid: q008__think__local
question: Explain the minimax algorithm and alpha-beta pruning.
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 554
total_tokens: 753
web_searches: 0
cost_usd: 0.0
sources: []
---

**1. Clarify the scope & assumptions**  
- Confirm you’re discussing *game‑tree search* (two‑player, zero‑sum).  
- Assume a perfect‑information deterministic game (e.g., chess or tic‑tac‑toe).  
- Note that the algorithm evaluates terminal nodes with a static heuristic.

**2. Build the mental model**  
- Think of a binary tree where each level alternates *Max* and *Min*.  
- The goal: Max wants to maximize the final score, Min to minimize it.  
- Visualize recursion: `minimax(node)` returns the best value for the player whose turn it is.

**3. Step‑by‑step reasoning**  

| Step | Action | Why |
|------|--------|-----|
|1|If node is terminal → return heuristic value.|Base case of recursion.|
|2|Else if it's Max’s turn → set `value = -∞`.|Max will choose the highest child value.|
|3|For each child: `childVal = minimax(child)`; update `value = max(value, childVal)`.|Propagate best score upward.|
|4|If node is Min’s turn → set `value = +∞`; repeat with `min`. |Symmetric to Max case.|

Alpha‑beta pruning augments this:  
- Keep two parameters, *α* (best already found for Max along the path) and *β* (best for Min).  
- When exploring a child of a Max node, if `value ≥ β`, prune remaining siblings (Min will never allow this branch).  
- For a Min node, if `value ≤ α`, prune.  

**4. Common traps to avoid**  
- Mixing up who updates α and β.  
- Forgetting that pruning only works when the tree is fully explored in a fixed order; reordering can affect efficiency.  
- Assuming alpha‑beta always saves time—its benefit depends on move ordering.

**5. Sanity‑check & verbalize**  
- Test on a small 3×3 tic‑tac‑toe tree: trace one branch, confirm that pruning stops exploring after the optimal line is found.  
- Explain aloud: “Max wants the highest score; Min wants the lowest. Alpha keeps the best Max can force so far; β keeps the best Min can force. If at any point Max’s current value ≥ β, Min would avoid this branch, so we cut it off.”  

This structured walk‑through lets you recall the algorithm and justify its efficiency whenever you need to explain or implement it.
