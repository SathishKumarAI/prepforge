---
qid: ing_256d15804f__faang__local
question: 'Explain: All evaluators (code + LLM) in one place'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:47-05:00'
sources: []
---

**Clarify**  
You’re asking how to bring together both traditional unit‑test / static‑analysis tools and modern LLM‑based evaluators into a single, unified framework for AI system assessment.

**Approach**  
1. **Define evaluation axes** – correctness, safety, fairness, performance, interpretability.  
2. **Build a modular API** that accepts any evaluator plugin (code runner, static checker, prompt‑based LLM).  
3. **Standardize inputs/outputs**: all evaluators receive the same artifact (e.g., model checkpoint or code repo) and return a structured score + evidence.  
4. **Orchestrate execution**: run deterministic tests first; then trigger LLM prompts in parallel, aggregating results.

**Depth**  
- *Deterministic evaluators* use coverage tools, unit tests, static analysis (e.g., `bandit`, `pylint`).  
- *LLM evaluators* send crafted prompts to a fine‑tuned model, parse responses with regex/semantic similarity.  
- Results are stored in a central DB; a dashboard visualizes per‑metric scores and drift over time.  
Complexity: O(n · m) where n = number of artifacts, m = evaluator count; mitigated by caching.

**Edge Cases**  
- LLM hallucination → add sanity checks (e.g., cross‑validate with deterministic outputs).  
- Resource spikes when many LLM calls run simultaneously.  
- Divergent scoring scales – normalize to a 0–1 range before aggregation.

**Optimize & Communicate**  
- Cache LLM embeddings; batch prompts.  
- Use CI/CD pipelines for continuous evaluation.  
- Explain results via “why‑did‑this‑score” snippets, improving trust.  
This unified evaluator hub enables rapid feedback loops and holistic AI quality assurance, a key differentiator in FAANG product cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
