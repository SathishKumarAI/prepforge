---
qid: ing_2137da7e4e__eli5__local
question: 'Explain: Qwen moved from dense-only to shipping both dense and MoE models
  (for example a 30B model with ~3B active parameters, and a 235B model with ~22B
  active). Explain the tradeoff, and when you would pick the 30B-A3B MoE over a 32B
  dense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 313
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:16-05:00'
sources: []
---

Imagine a library that can only hold one book at a time (dense model). If you need many books, you rent a larger shelf and buy more copies—this is the “dense‑only” approach: every time you read, all shelves are checked, even if most pages aren’t relevant.  

Now picture a smart librarian who brings out just the few sections that match your question (Mixture‑of‑Experts, MoE). The library still has a huge collection (30 B total parameters), but only ~3 B “active” experts open for each query. This saves memory and computation while keeping most of the knowledge available.

**Tradeoff:**  
- **Dense 32 B:** Simpler to train, no routing overhead; every inference touches all 32 B parameters.  
- **MoE 30 B‑3 B:** Faster per query because only ~3 B parameters fire, but you need a router that decides which experts to use and more complex training.

**When to choose MoE 30 B‑3 B over dense 32 B?**  
If your tasks involve many diverse topics—so each question benefits from a different subset of knowledge—and you want lower latency or cheaper inference, the MoE model is preferable. If consistency and simplicity are paramount (e.g., batch processing where routing overhead outweighs savings), stick with the dense 32 B.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
