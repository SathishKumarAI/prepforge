---
qid: vq_c485ecd4ab__faang__local
question: How to Solve Algorithms Problems?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 432
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:26-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Given a set of algorithmic problems (e.g., array manipulation, graph traversal), how do you systematically arrive at correct, efficient solutions?  
*Assumptions to confirm:*  
- You have the problem statement and constraints (input size, time/space limits).  
- You can test on small cases before scaling.  

**2️⃣ Approach**  
1. **Understand & formalize** the problem: restate in your own words, identify required outputs.  
2. **Identify patterns:** Look for known categories—DP, greedy, divide‑conquer, BFS/DFS, two‑pointer, sliding window, etc.  
3. **Sketch a high‑level algorithm** (pseudocode or flowchart).  
4. **Analyze complexity** of the sketch; adjust if it violates constraints.  

**3️⃣ Depth**  
- *Example:* For “find maximum subarray sum,” recognize Kadane’s linear DP: iterate once, keep `current` and `best`.  
- Complexity: O(n) time, O(1) space.  
- If constraints change (e.g., large n), consider segment trees or prefix sums for range queries.  

**4️⃣ Edge Cases**  
- Empty inputs, single‑element arrays, all negative numbers, maximum/minimum integer values.  
- Test with boundary sizes (n = 10⁶) to catch overflow or recursion depth issues.  

**5️⃣ Optimize & Communicate**  
- After a correct solution, ask “Can we reduce space?” → transform O(n) to O(1).  
- Discuss trade‑offs: e.g., using hash maps for O(1) lookups vs extra memory.  
- Narrate reasoning step‑by‑step, showing how each decision satisfies constraints and improves performance.  

*Result:* A structured process—clarify → pattern match → design → analyze → test → iterate—that consistently yields efficient, correct algorithmic solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
