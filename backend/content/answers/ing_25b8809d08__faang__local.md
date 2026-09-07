---
qid: ing_25b8809d08__faang__local
question: 'Explain: Step 3: Helper Function for Maze Validity and Action Selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:37-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *Step 3* of a maze‑solving algorithm that uses helper functions to validate moves and choose actions. I’ll assume we’re dealing with a grid maze (walls, open cells), a deterministic policy or learning agent, and we need a clean interface for checking legality of a proposed move and picking the next action.

**Approach**  
1. Design a `is_valid_move(row, col)` helper that checks bounds, wall status, and visited flags.  
2. Create an `select_action(current_state)` function that returns the next cell or direction based on a policy (e.g., greedy Q‑values).  
3. Integrate these into the main loop: validate → update state → record reward.

**Depth**  
```python
def is_valid_move(r, c, maze):
    return 0 <= r < len(maze) and 0 <= c < len(maze[0]) \
           and maze[r][c] != WALL and not visited[r][c]

def select_action(state, policy):
    # policy could be a Q‑table or heuristic
    legal_moves = [(r+dr, c+dc)
                   for dr, dc in DIRECTIONS
                   if is_valid_move(r+dr, c+dc, maze)]
    return max(legal_moves, key=lambda pos: policy.get_value(state, pos))
```
Complexity per call: O(1) for `is_valid_move`; O(k) for `select_action` (k ≤ 4). Memory: negligible extra overhead.

**Edge Cases**  
- Maze borders: ensure indices stay in range.  
- Fully blocked cells: `legal_moves` empty → backtrack or terminate.  
- Dynamic walls: update `maze` before validation.

**Optimize & Communicate**  
Cache visited status in a 2‑D boolean array to avoid repeated lookups. If the policy is stochastic, sample from a softmax distribution instead of greedy selection. I’d explain that separating validation and action logic keeps the main loop clean, eases unit testing, and aligns with SOLID principles—critical for maintainable ML codebases in FAANG teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
