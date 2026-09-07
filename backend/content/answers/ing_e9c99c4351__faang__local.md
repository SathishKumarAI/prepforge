---
qid: ing_e9c99c4351__faang__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 538
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:25-05:00'
sources: []
---

**Clarify**  
We’re paying \$500 per day for LLM‑judge calls in our Retrieval‑Augmented Generation (RAG) pipeline. The goal is to cut that cost while keeping evaluation quality. I’ll assume the judge call is the only expensive step, that each call costs roughly \$0.05–\$0.10, and that we’re evaluating thousands of outputs daily.

**Approach**  
1. **Reduce call frequency** – batch or cache judgments.  
2. **Lower per‑call cost** – switch to cheaper models or use a local LLM.  
3. **Pre‑filter with lightweight heuristics** – only send hard cases to the judge.  
4. **Optimize prompt & token usage** – fewer tokens → lower price.

**Depth**  

| Technique | Implementation | Complexity | Trade‑off |
|-----------|----------------|------------|-----------|
| **Batching** | Send 100 outputs in one prompt; aggregate scores | O(1) per batch | Slight latency increase, but linear cost drop |
| **Caching** | Store judgments keyed by content hash | O(1) lookup | Memory overhead; stale cache if model updates |
| **Model switch** | Use a cheaper open‑source LLM (e.g., GPT‑4o-mini or locally hosted Llama2) for the judge | Depends on compute | Accuracy may drop; can be mitigated with fine‑tuning |
| **Hardness filter** | Simple rule‑based scoring (BLEU, ROUGE, keyword overlap); only send top‑% to judge | O(n) linear pass | Risk of missing subtle errors |
| **Prompt compression** | Remove redundant context, use concise templates | Minor code changes | Might lose nuance; monitor drift |

**Edge Cases**  
- Cache misses for novel content → fallback to judge.  
- Model drift after switching to cheaper LLM → periodic re‑evaluation.  
- Over‑filtering: too many outputs bypass the judge and degrade quality.

**Optimize & Communicate**  
Start with batching + caching; measure cost reduction (target 60–70 %). Then roll out a lightweight hard‑case filter, monitoring precision/recall on a held‑out set. Finally, evaluate a cheaper LLM as a full replacement if accuracy stays ≥95 % of the original judge. Explain each step’s ROI to stakeholders and maintain an audit trail for any dropped judgments. This layered strategy balances cost, latency, and quality—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
