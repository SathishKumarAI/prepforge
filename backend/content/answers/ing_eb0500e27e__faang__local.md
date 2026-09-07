---
qid: ing_eb0500e27e__faang__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 450
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:06-05:00'
sources: []
---

**Clarify**  
We’re asked: *“The system prompt says one thing, the user asks for another, and a retrieved document says a third. How do you design conflict resolution?”*  
Assumptions to confirm:  
1. All three sources are authoritative but may contradict on intent or content.  
2. The system prompt encodes high‑level policy (e.g., safety, style).  
3. User requests drive immediate behavior; documents provide domain knowledge.  

**Approach**  
Build a *hierarchical priority engine*:  
- **Layer 1 – System Policy** (highest).  
- **Layer 2 – Knowledge Base / Documents** (intermediate).  
- **Layer 3 – Real‑time User Intent** (lowest).  
When conflicts arise, the engine resolves by traversing from top to bottom.  

**Depth**  
Implement a *conflict graph* where each node is a statement (system, doc, user) and edges encode precedence. Use a weighted score: system = 3, doc = 2, user = 1. During inference, compute the aggregate vector; if the highest‑weight claim contradicts lower ones, it dominates. For nuanced cases (e.g., policy allows but document says “no”), we employ *fallback rules* that combine both—return a safe completion that respects policy and references the document. Complexity is O(n) per turn, negligible overhead.  

**Edge Cases**  
- Ambiguous user phrasing → use intent classification to decide which layer to elevate.  
- Policy updates mid‑session → trigger re‑evaluation of all cached decisions.  
- Document overrides due to domain expertise → flag as *overrideable* and audit logs for review.  

**Optimize & Communicate**  
Introduce a *confidence cache*: if the system prompt has high confidence, we skip document lookup to save latency. Log every resolution path so that stakeholders can trace why a policy win occurred. In interviews, emphasize that this design balances safety (system) with flexibility (user), while keeping performance linear and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
