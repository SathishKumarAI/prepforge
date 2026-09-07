---
qid: ing_96df153b64__faang__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 441
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:36:09-05:00'
sources: []
---

**Clarify**  
The interviewer is asking how to choose a small set of “few‑shot” demonstrations for an LLM and in what order to present them, as well as the common pitfalls that can degrade performance.

Assumptions I’d confirm:  
- We’re using an autoregressive model (e.g., GPT‑4).  
- The task is text generation with a known prompt format.  
- We have a labeled dataset of examples we can sample from.

**Approach**  
1. **Representational similarity** – embed all candidate examples and the target query; pick those with highest cosine similarity to the query.  
2. **Diversity** – once top‑k similar examples are selected, run k‑means or farthest‑first selection to spread them across sub‑clusters.  
3. **Ordering** – sort by decreasing similarity (or a learned ranking) so that the most relevant example appears first; optionally interleave diverse ones to avoid local optima.

**Depth**  
- Compute embeddings with a lightweight encoder (e.g., Sentence‑BERT).  
- Complexity: O(n log k) for top‑k selection, O(k²) for diversity step.  
- Use temperature‑controlled sampling after the prompt to preserve example ordering.  
- Fine‑tune a small ranking head if you have enough labeled prompts.

**Edge Cases**  
- *No close match*: fall back to generic templates or random examples.  
- *Mismatched domains*: similarity may be misleading; add domain tags as additional features.  
- *Ordering bias*: too much weight on similarity can over‑rely on a single example; monitor BLEU/F1 drift.

**Optimize & Communicate**  
Explain that the pipeline trades off relevance vs. coverage, and that you’d validate with A/B tests (e.g., comparing top‑k vs. diversity‑aware selection). Emphasize that careful monitoring of failure modes—like hallucinations triggered by a single misleading example—is essential for production stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
