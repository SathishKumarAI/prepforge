---
qid: ing_237a024f20__faang__local
question: How would you implement sub-question decomposition, and when does it make
  things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 454
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:33-05:00'
sources: []
---

**Clarify**  
You’re asking how to split a user’s natural‑language request into smaller “sub‑questions” that can be answered independently and then recombined—essentially a hierarchical intent parser. I’ll assume: (1) the system has a downstream NLU model, (2) we want deterministic decomposition for explainability, and (3) the goal is to improve response quality without blowing up latency.

**Approach**  
1. *Parse* the utterance with a constituency or dependency parser.  
2. Identify *semantic nodes* that map to intent slots.  
3. For each node, generate a sub‑question template (e.g., “What is the price of X?”).  
4. Dispatch sub‑questions to specialized modules (price API, inventory lookup).  
5. Aggregate results and surface a unified answer.

**Depth**  
- Use spaCy or AllenNLP for parsing; keep a lightweight rule‑based overlay for speed.  
- Cache sub‑question embeddings so identical patterns reuse computations.  
- Complexity: O(n) per token in parsing + O(k) dispatch where k = #sub‑questions (usually ≤ 5).  
- Trade‑offs: richer decomposition → higher CPU and network hops; simpler decomposition → risk of missing context.

**Edge Cases**  
- Ambiguous pronouns that span sub‑questions.  
- Highly nested queries (“Which products are on sale and also have free shipping?”).  
- Real‑time constraints where additional round‑trips exceed SLA.

**Optimize & Communicate**  
- Introduce a “decomposition budget” flag; if k > 3, fallback to monolithic NLU.  
- Log decomposition decisions for auditability.  
- Present the strategy in a diagram during interviews: parse → nodes → sub‑questions → modules → merge.  

When it makes things worse?  
- When latency is critical (e.g., live chat).  
- If downstream APIs are unreliable—multiple hops amplify failure risk.  
- For short, straightforward queries where a single intent suffices; decomposition adds noise and overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
