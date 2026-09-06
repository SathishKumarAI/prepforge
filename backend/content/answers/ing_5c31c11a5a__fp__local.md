---
qid: ing_5c31c11a5a__fp__local
question: 'Q: When would you choose Long Context over RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 344
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:00-05:00'
sources: []
---

### Why “long‑context” beats RAG in some cases

The core problem both techniques solve is *information bottleneck*: a language model can only attend to about 8 k–32 k tokens before its self‑attention becomes computationally infeasible and semantic drift sets in.  
- **RAG** sidesteps the bottleneck by treating retrieval as an external memory: it feeds the top‑\(k\) passages into the model, letting the transformer focus on a short prompt plus a few documents.  
- **Long‑context** (e.g., Llama‑2 70B‑with‑30 k or GPT‑4o‑13B‑in‑context‑10 k) extends the attention window so that the entire document can be processed in one pass.

When you *need* to preserve fine‑grained inter‑sentence relationships—such as legal contract analysis, multi‑step scientific reasoning, or any task where the answer depends on a subtle chain of facts across dozens of paragraphs—the long context is mandatory. RAG would have to re‑rank passages for every sub‑query, losing coherence and introducing hallucinations from mismatched snippets.

**Non‑obvious insight:** A longer context actually reduces *retrieval noise* by allowing the model to learn its own internal “memory” of relevant facts, making it more robust to noisy or incomplete indices. Thus, choose long‑context when *internal consistency over a fixed document* outweighs the flexibility of dynamic retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
