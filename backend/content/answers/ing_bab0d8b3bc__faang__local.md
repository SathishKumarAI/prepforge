---
qid: ing_bab0d8b3bc__faang__local
question: 'Explain: Handling Conflicting Information — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 456
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:56-05:00'
sources: []
---

**Clarify**  
We’re asked how an AI system can manage knowledge when it receives contradictory facts or sources—e.g., two documents state different dates for the same event. Key assumptions:  
1) The system has a persistent knowledge base (KB).  
2) Inputs arrive in real‑time, possibly from untrusted or noisy sources.  
3) Downstream users need consistent, up‑to‑date facts.

**Approach**  
1. **Source‑credibility layer** – assign trust scores to each origin (official APIs > user posts).  
2. **Conflict detection** – use a schema (e.g., triple store) that flags differing values for the same entity–property pair.  
3. **Resolution engine** – apply deterministic rules: most recent timestamp, highest credibility, or majority vote across sources.  
4. **Versioning & audit trail** – keep historical states so rollback is possible.

**Depth**  
- Store facts as `(entity, property, value, source, ts)`.  
- When a new fact arrives, query for existing tuples with same entity‑property. If values differ, compute score = `credibility(source)` × `weight(ts)`.  
- Choose the tuple with highest score; archive the old one. Complexity: O(log n) per lookup in an indexed triple store.  
- Use conflict logs to trigger human review for high‑impact entities.

**Edge Cases**  
- *New source outranks all*: system must not blindly overwrite if evidence is weak.  
- *Circular contradictions* (A says B, B says A): need cycle detection.  
- *Non‑numeric values* (textual descriptions): similarity metrics may be required.

**Optimize & Communicate**  
- Cache resolved facts in a read‑optimized layer to reduce latency.  
- Expose an API that returns the current value plus provenance for auditability.  
- Narrate: “We first trust the source, then use recency and majority as tiebreakers, ensuring every overwrite is logged.”  

This balances automated consistency with traceability, meeting FAANG standards for robust knowledge management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
