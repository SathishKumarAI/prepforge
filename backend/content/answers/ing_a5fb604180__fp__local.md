---
qid: ing_a5fb604180__fp__local
question: 'Explain: closer to my king and now it — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 501
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:40-05:00'
sources: []
---

### Why *distance‑to‑king* matters in a chess engine

In supervised learning we train a model to map inputs to targets by minimizing an error functional.  
A chess engine faces the same problem: given a board state \(b\), predict how “good” it is for White or Black.  
The target is not a single numeric value but a *distribution over future moves*, which in turn depends on how close the king is to danger.

1. **Fundamental problem** – A king that is exposed to attack increases the probability of check‑mate.  
   The engine must therefore weigh such positions heavily, even if material looks equal.

2. **Why it must be a distance metric** – In any evaluation function \(E(b)\), the contribution of the king’s safety should grow *non‑linearly* as its minimum distance to an opponent piece shrinks.  
   A simple Euclidean or Manhattan distance captures this:  
   \[
   f_{\text{king}}(b)=\sum_{p\in P_{\text{opp}}}\frac{1}{d(b,\text{king},p)^2}
   \]
   The inverse square ensures a steep penalty when the king is adjacent to an enemy piece.

3. **Connection to geometry** – The board is a discrete 8×8 grid, so the distance function is a metric space.  
   The engine’s search tree explores moves that reduce \(f_{\text{king}}\) while balancing material gain—an optimization over this geometric landscape.

4. **Non‑obvious insight** – Many engines treat king safety as a *static* feature (e.g., “is the king castled?”).  
   A truly optimal approach is to model it probabilistically: estimate \(P(\text{checkmate}\mid b)\) using Monte‑Carlo rollouts, and let that probability guide move ordering.  
   This turns king safety from a deterministic penalty into an *expected loss* term in the objective function.

In short, coding “closer to my king” is not a cosmetic tweak; it formalises a core part of the evaluation functional by turning spatial proximity into a probabilistic risk measure that drives the search toward safer, more promising lines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
