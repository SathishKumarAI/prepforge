---
qid: ing_302330211b__think__local
question: 'Explain: Non-functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 444
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:49:30-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
   * Identify what “Non‑functional” means in software engineering (attributes like performance, reliability, usability).  
   * Understand that “Semantic Search” refers to search systems that interpret meaning rather than just keyword matching.  
   * Assume the user wants a conceptual explanation of how semantic search is considered a non‑functional requirement and its implications.

**2. Choose a mental model / framework**  
   * Use the **“Non‑Functional Requirements (NFR) taxonomy”**: quality attributes, constraints, and service level objectives.  
   * Map “Semantic Search” onto this taxonomy to see where it fits (e.g., performance, scalability, usability).

**3. Step‑by‑step reasoning**  
   1. Define semantic search’s purpose (understanding intent, context).  
   2. List the quality attributes affected: response time, relevance accuracy, scalability, maintainability.  
   3. Show how each attribute translates into measurable NFRs (e.g., “search results returned within 200 ms for 95% of queries”).  
   4. Discuss trade‑offs (more complex models → slower latency).  
   5. Explain how to capture these in a requirements document or SLA.

**4. Common traps to avoid**  
   * Treating semantic search as purely functional (just “it works”) instead of focusing on quality aspects.  
   * Overlooking the impact on system resources (GPU, memory) that affect performance NFRs.  
   * Neglecting user‑centric metrics like relevance or satisfaction.

**5. Sanity‑check & verbalize**  
   * Verify each NFR has a clear metric and acceptance criterion.  
   * Re‑state in simple terms: “We’re not just saying ‘semantic search works’; we’re saying it does so fast, accurately, and reliably.”  
   * Use analogies (e.g., comparing to a human librarian) to ensure the explanation is intuitive before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
