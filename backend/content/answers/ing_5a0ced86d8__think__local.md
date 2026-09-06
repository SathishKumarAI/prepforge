---
qid: ing_5a0ced86d8__think__local
question: 'Explain: Transport and routing — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 447
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:56:54-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify that the question asks for a *conceptual overview* of how Meta uses asynchronous computing in transport and routing, plus key lessons learned.  
   - Assume the audience has basic ML knowledge but not deep systems experience; keep jargon minimal.  

**2. Adopt a layered mental model**  
   - **Transport layer**: data movement between services (e.g., gRPC, RDMA).  
   - **Routing layer**: decision logic that picks which service instance or path to use.  
   - **Asynchronous computing**: non‑blocking calls, futures/promises, event loops.  

**3. Reason step‑by‑step**  
   1. Explain why latency matters in ML inference pipelines at Meta scale.  
   2. Describe how asynchronous transport decouples request handling from processing (e.g., using a thread‑pool or async I/O).  
   3. Show how routing decisions are made asynchronously—e.g., by querying a distributed service registry or load balancer that returns a future.  
   4. Highlight the interplay: transport sends requests, routing picks target, both proceed without blocking callers.  

**4. Avoid common traps**  
   - Don’t conflate *asynchronous* with *parallelism*; emphasize non‑blocking I/O vs. concurrent execution.  
   - Resist over‑technical detail (e.g., specific network protocols) unless asked; focus on concepts.  
   - Beware of assuming all Meta services use the same async model; note variations across data centers.  

**5. Sanity‑check & articulate**  
   - Re‑read your outline: does it flow from problem → solution → lessons?  
   - Practice explaining it in one sentence first, then expand.  
   - Use analogies (e.g., “async transport is like a mail system that delivers parcels without the sender waiting”).  

This structured approach keeps the explanation clear, focused, and reusable for similar questions on distributed ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
