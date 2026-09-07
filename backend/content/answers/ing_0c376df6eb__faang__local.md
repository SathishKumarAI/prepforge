---
qid: ing_0c376df6eb__faang__local
question: 'Q: Walk me through the consolidation policy you would design for episodic-to-semantic
  transition. When does an episode become a fact?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 457
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:12:27-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *consolidation policy* that moves knowledge from episodic (raw interactions) into semantic facts in an AI system. I’ll assume:  

1. Episodes are logged as time‑stamped event streams with context.  
2. Facts are reusable, schema‑aligned assertions stored in a knowledge graph or vector store.  
3. The goal is to decide *when* and *how* an episode should be turned into a fact.

**Approach**  
1. **Trigger**: Detect “high‑confidence” outcomes (e.g., user confirms answer).  
2. **Relevance scoring**: Use TF‑IDF or embedding similarity against existing facts.  
3. **Redundancy check**: If similarity > θ, skip or update.  
4. **Schema mapping**: Map episode entities to ontology slots via NER + relation extraction.  
5. **Persist**: Store as a fact with provenance metadata (episode ID, timestamp).  

**Depth**  
- *When does an episode become a fact?* When it satisfies:  
  - **Confidence ≥ C** (e.g., > 0.9 from classifier or user feedback).  
  - **Novelty ≥ N** (embedding distance to nearest existing fact > δ).  
  - **Completeness** (all required ontology slots filled).  
- Complexity: O(n log m) for nearest‑neighbor lookup in an approximate index; updates are amortized O(1).  

**Edge Cases**  
- Ambiguous or contradictory episodes → flag for human review.  
- Rapidly changing domains → decay factor to age old facts.  
- Low‑confidence but high‑impact facts → deferred consolidation.  

**Optimize & Communicate**  
Explain that the policy balances *precision* (avoid garbage facts) and *recall* (capture useful knowledge). Highlight potential improvements: dynamic thresholds via reinforcement learning, batch consolidation for efficiency, audit logs for compliance. Conclude with a concise “episode‑to‑fact” pipeline diagram to visualize flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
