---
qid: ing_34a8e8a938__think__local
question: 'Explain: Global Reservations as an assignment problem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 425
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:53:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether “Global Reservations” refers to a specific dataset or a generic airline‑booking scenario.  
   - Assume we have a finite set of reservation requests and a finite set of available seats (or resources) worldwide, each with a cost or profit.

**2️⃣ Pick an appropriate mental model**  
   - Frame it as an **assignment problem**: bipartite graph \(G=(R \cup S,E)\) where edges carry weights (costs).  
   - Recall the classic Hungarian algorithm or linear‑programming formulation.

**3️⃣ Step‑by‑step reasoning**  
   1. List all requests \(r_i\) and seats \(s_j\).  
   2. Build a cost matrix \(C_{ij}\) = penalty for assigning request \(i\) to seat \(j\) (or negative profit).  
   3. Add dummy rows/columns if numbers differ, ensuring the matrix is square.  
   4. Run Hungarian algorithm: subtract row minima, then column minima; cover zeros with minimum lines; adjust residuals until a full set of independent zeros exists.  
   5. Extract assignment from zero positions; interpret as global reservation plan.

**4️⃣ Avoid common pitfalls**  
   - Mixing up minimization vs maximization (invert signs).  
   - Forgetting to handle infeasible assignments (e.g., capacity constraints) – may need a penalty term or constraint‑augmented model.  
   - Ignoring that Hungarian requires a square matrix; missing dummy entries leads to wrong solutions.

**5️⃣ Sanity‑check & verbalize**  
   - Verify the total cost equals sum of selected edge weights.  
   - Cross‑check with a small example manually.  
   - Explain: “We treat each global reservation as pairing a passenger request to an available seat, minimizing overall dissatisfaction (or maximizing revenue) using the Hungarian algorithm.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
