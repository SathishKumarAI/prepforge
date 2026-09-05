---
qid: ing_06eaa62e27__fp__local
question: Design a Text2SQL agent for business users querying a warehouse with 5,000
  tables. What's hard, and how do you evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 547
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:26-05:00'
sources: []
---

**Why the problem is fundamentally hard**

A Text‑to‑SQL system must translate free‑text intent into a *valid* query over an enormous schema (≈ 5 k tables). The search space of possible joins and predicates grows combinatorially, so naive enumeration is infeasible. Moreover, business users often refer to entities by aliases (“customer” vs. “client”) or use ambiguous terms that map to multiple columns. This requires *semantic grounding*—a mapping from natural language tokens to schema elements—which in turn depends on understanding the underlying data distribution and business logic.

**Design principles**

1. **Hierarchical grounding**  
   - First, a lightweight *schema‑graph encoder* (e.g., Graph Neural Network) captures table/column relationships, enabling efficient lookup of candidate tables for each token.  
   - Second, a *contextual language model* refines these candidates using the user’s utterance and recent conversation history.

2. **Probabilistic join inference**  
   - Treat joins as a Bayesian decision problem: compute \(P(\text{join} \mid \text{utterance})\) using prior statistics (frequent co‑occurrence of keys).  
   - Use beam search over this posterior, pruning low‑probability paths early.

3. **Execution‑guided correction**  
   - After initial SQL generation, run a *semantic checker* that attempts to execute the query on a sandboxed subset.  
   - If errors occur (missing columns, type mismatches), backtrack using the error messages as additional supervision.

**Evaluation strategy**

- **Task accuracy**: Exact match and execution correctness on a held‑out test set of 10k real user queries.  
- **Schema coverage**: Measure success rate per table group (e.g., top‑100, middle‑range, tail tables).  
- **Latency budget**: Average inference time must stay below the interactive threshold (≤ 200 ms).  
- **Human‑in‑the‑loop**: A blind study where business analysts rate interpretability and trust after seeing the generated SQL.

**Non‑obvious insight**

The bottleneck is *semantic grounding*, not the language model itself. By investing in a schema‑aware encoder that exploits graph structure, we reduce downstream uncertainty dramatically—often yielding correct joins with only one pass of the LLM. This shift turns an otherwise combinatorial search into a probabilistic inference problem that scales gracefully to thousands of tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
