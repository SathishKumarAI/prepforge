---
qid: ing_e8e5c58d43__faang__local
question: 'Explain: ​ Evaluation types — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 609
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:00-05:00'
sources: []
---

**Clarify**  
You’re asking how LangChain documents categorize *evaluation*—the ways an LLM’s output is judged for quality and usefulness.  
Assumptions:  
1. The evaluator cares about **both quantitative metrics (e.g., BLEU, ROUGE)** and **qualitative human judgments**.  
2. We need to cover the main evaluation “types” LangChain talks about—*automatic*, *human‑in‑the‑loop*, *chain‑level*, and *task‑specific*.

---

**Approach**  
1. List each type.  
2. Explain what it measures, how it’s computed or collected, and its pros/cons.  
3. Tie back to LangChain’s documentation examples (e.g., `LLMChain.evaluate`, `DocumentRetriever` scoring).  

---

**Depth**  

| Type | What it measures | How LangChain implements it | Trade‑offs |
|------|-----------------|-----------------------------|------------|
| **Automatic / metric‑based** | Token overlap, perplexity, semantic similarity (e.g., BLEU, ROUGE, MRR) | `LLMChain.evaluate(metric=…)` calls a pre‑built scorer; can batch over many docs. | Fast, repeatable but blind to nuance or hallucination. |
| **Human‑in‑the‑loop** | Relevance, correctness, style, safety | Uses `HumanEval` prompts that return scores or ratings via an external interface (e.g., a web UI). | Gold standard; expensive and noisy. |
| **Chain‑level** | End‑to‑end performance of a multi‑step workflow | Chain wrappers expose `.evaluate_chain()` that aggregates sub‑chain scores, optionally weighting steps. | Captures interactions but can be hard to interpret per step. |
| **Task‑specific** | Domain metrics (e.g., medical accuracy, legal compliance) | Custom evaluators plug into LangChain’s `BaseEvaluator`; you can supply a function that queries domain knowledge bases. | Tailored but requires expertise and data. |

---

**Edge Cases**  
- *Hallucinations*: automatic metrics may miss them; human review catches them.  
- *Sparse data*: metric‑based scores are unreliable with few examples.  
- *Bias in human raters*: need diverse annotators or double‑blind setups.

---

**Optimize & Communicate**  
Start with an **automatic baseline** for speed, then layer **human checks** on high‑risk outputs. For production, cache evaluator results and periodically refresh them to catch drift. Explain this pipeline to stakeholders: “We’ll first compute ROUGE scores in 0.5 s, flag low‑score docs for human review, and store the final label in our monitoring dashboard.” This shows clear trade‑offs, scalability, and a path to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
