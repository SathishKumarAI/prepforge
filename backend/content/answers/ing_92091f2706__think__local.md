---
qid: ing_92091f2706__think__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 481
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:45:22-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
   - The user asks for an explanation of when each “Pattern – Production RAG at scale” should be used.  
   - Assume they mean *retrieval‑augmented generation (RAG)* patterns in production environments, not just academic demos.  
   - We’ll treat “pattern” as a reusable architectural recipe (e.g., single‑pass retrieval, incremental retrieval, hybrid memory, etc.).

**2️⃣ Adopt a mental model / framework**  
   - **Contextual dimensions**: data freshness, latency constraints, resource budget, accuracy needs, regulatory concerns.  
   - **Pattern taxonomy**: Retrieval‑only, Retrieval‑plus‑generation, Hybrid‑retrieval, Cached‑RAG, Incremental‑RAG, etc.  
   - Map each pattern to the dimensions above.

**3️⃣ Reason step by step toward a structured answer**  
   1. List key production concerns (throughput, cost, explainability).  
   2. Enumerate patterns with brief signatures.  
   3. For each pattern, match it against the concerns: e.g., “Cached‑RAG” for low latency but stale data tolerance; “Incremental‑RAG” when updates are frequent and you need near‑real‑time knowledge.  
   4. Provide a decision matrix or flowchart that guides a practitioner from requirement to pattern choice.

**4️⃣ Common traps & wrong turns to avoid**  
   - **Overloading the answer with jargon**: keep explanations accessible.  
   - **Assuming one size fits all**: emphasize trade‑offs rather than prescribing a single pattern.  
   - **Neglecting operational aspects** (monitoring, retraining loops).  
   - **Missing scalability nuances** like sharding retrieval indices or batching generation requests.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify each mapping makes sense: does the pattern’s cost/latency profile align with the stated use‑case?  
   - Rephrase in lay terms, then add a quick bullet list for “when to pick which pattern.”  
   - End with a reminder that real deployments often combine multiple patterns (e.g., hybrid retrieval + caching).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
