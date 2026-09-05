---
qid: vq_8dd739c362__fp__local
question: What is recursion?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 324
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:49-05:00'
sources: []
---

Recursion is a **self‑referential definition** of an algorithm that reduces a problem to a smaller instance of the same type, stopping when a base case is reached.  
Why must it work this way? Consider any computable function \(f\) on finite inputs. By the *pigeonhole principle*, any recursive call on a strictly “smaller” input eventually reaches an input that cannot be reduced further (e.g., zero or one). This guarantees termination.  

From an optimization standpoint, recursion expresses **divide‑and‑conquer**: solve subproblems of equal structure and combine their solutions. In dynamic programming, memoization turns the naïve exponential recursion into linear time by caching repeated sub‑instances—an explicit exploitation of *overlap* in combinatorial structures.

Geometrically, think of a tree whose nodes are problem instances; each child is a smaller instance. The depth of this tree equals the complexity: \(O(\log n)\) for binary search, \(O(n)\) for linear scans. Probability comes in when analyzing average‑case behavior (e.g., quicksort’s expected recursion depth).

**Non‑obvious insight:** A recursive function need not “return” a value; it can perform side effects (printing, modifying globals). The recursive structure is purely about control flow, not data flow—this allows elegant solutions to problems like tree traversal where the *shape* of the computation mirrors the data’s shape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
