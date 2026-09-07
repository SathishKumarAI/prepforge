---
qid: ing_2bdb8d0f9b__faang__local
question: 'Explain: hello everyone my name is Marion and — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 672
total_tokens: 921
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:58-05:00'
sources: []
---

**Clarify**  
You want a high‑level explanation of how Google Docs keeps multiple users’ edits consistent in real time—i.e., the *Operational Transformation (OT)* and *Differential Synchronization* techniques it uses. Assume we’re dealing with text documents, many concurrent editors, low latency, eventual consistency, and crash resilience.

**Approach**  
1. Outline OT’s core idea: transform operations so that they commute.  
2. Contrast with differential sync: sending diffs instead of raw ops.  
3. Highlight the key data structures (operation queues, revision numbers).  
4. Mention scalability concerns (sharding, server‑side merging).

**Depth**  

| Technique | How it works | Complexity | Trade‑offs |
|-----------|--------------|------------|------------|
| **Operational Transformation** | Each client assigns a *revision ID* to its op; the server receives ops in any order and uses *transform* functions (e.g., insert vs. delete) so that applying them in any sequence yields the same final state. Operations are stored with context vectors for later transformation. | O(n²) per merge if naive, but practical implementations use a *log‑based* OT where each op is transformed against only newer ops → amortized O(1). | Guarantees strong convergence; requires careful design of transform functions and handling of concurrent identical ops. |
| **Differential Synchronization** | Clients periodically compute diffs (Levenshtein) against the last known server state, send them as patches. The server merges by applying patches in order; conflicts are resolved by a *last‑write* or *merge‑by‑content* strategy. | O(k·m) where k is diff size, m number of concurrent edits; typically linear in document length due to efficient diff algorithms (O(n)). | Simpler to implement; weaker consistency guarantees (eventual convergence but not strong). Works well when edit rate is low or network latency high. |

**Edge Cases**  
- *Simultaneous identical inserts*: OT must resolve deterministically (e.g., by client ID).  
- *Network partitions*: Clients may diverge; the server’s transform logic ensures eventual consistency once connectivity returns.  
- *Large binary objects*: Differential sync becomes expensive; OT is preferred for structured data.

**Optimize & Communicate**  
1. **Sharding**: Split documents into logical sections (paragraphs) so that ops target a shard, reducing contention.  
2. **Compression**: Encode operations as deltas and compress on the wire to cut bandwidth.  
3. **Client‑side buffering**: Batch local edits before sending to reduce round trips.  

When presenting, I’d narrate: “Google Docs essentially keeps a *log of transformations* per document; each client’s edits are turned into operations that can be reordered safely. When two users insert text at the same spot, OT reorders one op relative to the other so both see the same final string.” This showcases structured reasoning, depth on algorithms, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
