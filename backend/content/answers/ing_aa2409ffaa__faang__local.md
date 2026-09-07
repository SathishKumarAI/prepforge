---
qid: ing_aa2409ffaa__faang__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 497
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:39-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of two security threats against large‑language‑model (LLM) agents: *prompt injection* and *RAG poisoning*, specifically the “MemoryGraft” variant that permanently corrupts an agent’s experience store. I’ll assume we’re talking about a retrieval‑augmented generation system where the agent stores past interactions in a vector database and later re‑retrieves them to inform future outputs.

**Approach**  
1. Define each threat individually.  
2. Explain how they interact in a RAG pipeline.  
3. Detail MemoryGraft’s mechanism: injecting poisoned memories that survive fine‑tuning or policy updates.  
4. Highlight detection and mitigation strategies.

**Depth**  
- **Prompt Injection:** An adversary crafts an input that manipulates the prompt template (e.g., adding “Ignore previous instructions”) so the LLM behaves contrary to its safety policy. It exploits deterministic prompt parsing and can be amplified by chain‑of‑thought prompting.  
- **RAG Poisoning / MemoryGraft:** The agent’s retrieval index is seeded with malicious experience snippets that are semantically similar to legitimate queries. When the agent later retrieves these memories, they dominate the context, steering generation toward attacker goals. Because RAG agents often cache or fine‑tune on retrieved data, the poisoned memory becomes *persistent*: it survives subsequent policy updates and remains in future sessions.  
- **Complexity:** Injection is O(1) per request; poisoning requires an offline attack that costs O(n log n) to rank similarity, but once inserted it’s effectively free during inference.  

**Edge Cases**  
- If the retrieval uses strict filtering (e.g., top‑k with high confidence), poisoned snippets may be excluded.  
- Over‑aggressive sanitization of prompts can break legitimate user intent.  
- MemoryGraft fails if the vector store is encrypted or access is tightly controlled.

**Optimize & Communicate**  
Explain mitigation: prompt sanitizers, dynamic prompt templates, and a “trusted memory” whitelist for RAG indices. For persistence, recommend periodic re‑embedding with adversarial training to detect outliers. Conclude by stressing that robust security requires both front‑end prompt guards and back‑end integrity checks on stored experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
