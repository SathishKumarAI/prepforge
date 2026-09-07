---
qid: ing_4871388ddb__faang__local
question: 'Explain: Memory and Connectors — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 577
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:16-05:00'
sources: []
---

**Clarify**  
You’re asking how *Semantic Kernel* (SK) handles **memory** and **connectors**—the two core abstractions that let a LLM “remember” past interactions and talk to external services. I’ll assume you want an overview of the architecture, typical use‑cases, and trade‑offs.

---

### Approach
1. Outline what memory & connectors are in SK.  
2. Explain how they’re implemented (in‑memory, vector DB, REST).  
3. Discuss integration patterns and performance considerations.  

---

### Depth

| Component | Purpose | Typical Implementation |
|-----------|---------|------------------------|
| **Memory** | Stores facts, context, or user state across turns. | • *In‑memory*: simple key/value, fast but volatile.<br>• *Vector DB* (e.g., Pinecone): embeddings + similarity search for semantic recall. |
| **Connectors** | Abstract I/O to external APIs/Databases/LLMs. | • *HTTP Connector*: generic REST calls.<br>• *SQL Connector*: parameterized queries.<br>• *Custom SDK*: e.g., Azure Cognitive Services. |

**Workflow**  
1. A user prompt is sent to the kernel.  
2. The kernel queries memory for relevant facts (semantic search).  
3. It then builds a prompt that includes those facts and calls the appropriate connector(s) to fetch fresh data or invoke another model.  
4. Results are returned, optionally stored back in memory.

**Complexity & Trade‑offs**  
- *Latency*: Vector DB queries add ~10–20 ms per lookup; connectors can dominate if external services are slow.  
- *Consistency*: In‑memory is fast but loses state on restart; vector DB provides persistence at the cost of write latency.  
- *Cost*: Using paid vector services or large LLM calls scales with usage.

---

### Edge Cases
- **Cold start**: No prior memory → fallback to defaults.  
- **Stale data**: Cached embeddings may become outdated; need TTL or refresh logic.  
- **Connector failures**: Implement retries and circuit breakers.

---

### Optimize & Communicate

1. **Batch embeddings** for multiple prompts to amortize cost.  
2. Use **async connectors** to parallelize external calls.  
3. Document the memory schema and connector contracts so other developers can extend them easily.

By framing SK as a *memory‑augmented, connector‑driven* LLM orchestration layer, we capture both its power (semantic recall) and its challenges (latency, consistency). This structure mirrors how FAANG teams evaluate architecture decisions—clear assumptions, layered design, quantified trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
