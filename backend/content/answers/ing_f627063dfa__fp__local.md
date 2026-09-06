---
qid: ing_f627063dfa__fp__local
question: 'Explain: The shape of the choice — AI Memory Benchmarks 2026: LoCoMo, LongMemEval
  & BEAM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 399
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:01-05:00'
sources: []
---

### Why those three “shapes” of AI‑memory evaluation exist

The core problem for any intelligent system is **retrieving the right piece of information at the right time**.  
Formally we want a mapping  

\[
f: (c, q) \mapsto r
\]

where *c* is context (the long‑term memory), *q* a query, and *r* the retrieved answer.  
Optimizing \(f\) hinges on three intertwined principles:

1. **Capacity** – how many distinct facts can be stored without interference.  
2. **Retention** – how well those facts survive over time or repeated access.  
3. **Retrieval fidelity** – how accurately the system pulls the correct fact from a crowded space.

The benchmarks are engineered to stress‑test each principle in isolation, yet they all share the same underlying objective: maximize *information utility* under realistic constraints.

| Benchmark | Focus | Core metric |
|-----------|-------|-------------|
| **LoCoMo** (Local Context Memory) | Capacity & interference in short windows | Retrieval accuracy over growing context size |
| **LongMemEval** | Retention over extended periods | Accuracy after exponential decay of usage frequency |
| **BEAM** (Biased Entropy‑Aided Matching) | Retrieval fidelity under biased priors | Expected information gain per query |

#### Non‑obvious insight  
All three benchmarks collapse to a single *entropy* objective when viewed through the lens of **rate–distortion theory**. The “shape” of each benchmark merely selects different distortion constraints (local, temporal, prior bias). Thus, improving any one benchmark inevitably nudges the system toward better overall information‑theoretic efficiency—a fact rarely highlighted in standard evaluation reports.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
