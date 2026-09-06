---
qid: ing_c8f75c109d__think__local
question: 'Explain: to the server so total you guys — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 617
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:12:43-05:00'
sources: []
---

**Thinking Process (for future reference)**  

1. **Clarify the ask & assumptions**  
   - The user wants a clear, high‑level description of how Google Docs achieves real‑time collaboration: the *server architecture*, *Operational Transformation (OT)*, and *Differential Synchronization*.  
   - Assume readers know basic client–server networking but not these specific algorithms.  

2. **Choose a mental model**  
   - Think of three layers: *Client → Network → Server*; each layer has its own responsibilities.  
   - Map OT/DiffSync to the “conflict resolution” part inside the server layer.  

3. **Step‑by‑step reasoning**  
   - **Client side**: user edits → local operation → UI update immediately (optimistic).  
   - **Network**: operation sent to server with a sequence number or timestamp.  
   - **Server**: receives ops, places them in a queue, transforms against concurrent ops (OT) or keeps deltas (DiffSync), updates the canonical document state.  
   - **Broadcast**: server pushes transformed ops back to all clients; each client applies them, reconciling local and remote changes.  

4. **Common traps**  
   - Confusing *Operational Transformation* with simple locking. OT is a *transform‑and‑apply* algorithm that preserves intent, not just order.  
   - Thinking DiffSync is “the same as OT”; it’s an alternative strategy (send diffs, merge locally) and works well for large documents or intermittent connectivity.  

5. **Sanity‑check & verbalize**  
   - Verify that the explanation covers: why local updates are instant, how conflicts disappear, and how the server remains the single source of truth.  
   - Communicate in plain language, using analogies (e.g., “everyone writes on a shared whiteboard; the board keeps track of who wrote what and adjusts for overlapping strokes”).  

---  

### Short answer

Google Docs uses a **client‑server** model where each user’s browser is a client that sends *operations* (insert/delete) to a central server. The server holds the canonical document state and, upon receiving an operation, applies **Operational Transformation (OT)**: it rewrites the incoming op so it can be merged with any concurrent ops that have already been applied. This guarantees all clients converge on the same text without locking the document.

An alternative or complementary approach is **Differential Synchronization**: each client periodically sends a *diff* of its local state; the server merges these diffs, resolves conflicts locally (often by priority or last‑write‑wins), and then pushes back the merged result. DiffSync is lighter for large documents or flaky connections.

Together, OT ensures *intent preservation* in real time, while DiffSync offers a simpler, bandwidth‑efficient way to keep replicas consistent when network conditions vary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
