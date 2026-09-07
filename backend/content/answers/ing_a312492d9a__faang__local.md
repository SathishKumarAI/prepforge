---
qid: ing_a312492d9a__faang__local
question: 'Explain: LLM-as-Judge — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:44-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *LLM‑as‑Judge*—using a large language model (LLM) to evaluate or “judge” other models’ outputs, such as correctness, relevance, or fairness. Key assumptions:  
1. The LLM can ingest both the task prompt and candidate responses.  
2. Ground truth is either available or approximated by human annotations.  
3. Evaluation criteria (e.g., factuality, style) are formally defined.

**Approach**  
1. **Prompt engineering**: Frame a clear instruction that asks the LLM to compare each answer against the prompt and reference.  
2. **Feature extraction**: Let the LLM output structured scores or tags (e.g., 0–5 factuality, “yes/no” for hallucination).  
3. **Aggregation & calibration**: Average across multiple LLM runs or models; calibrate against a held‑out human‑labeled set to correct bias.

**Depth**  
- *Prompt*: “Given the question … and answer X, rate its factual correctness on a 0–5 scale and explain any discrepancies.”  
- *Complexity*: O(N) per batch where N is number of answers; inference cost dominated by LLM token count.  
- *Trade‑offs*: Larger models give higher fidelity but are expensive; smaller models reduce cost but may misjudge subtle errors.

**Edge Cases**  
- Ambiguous or open‑ended questions: the judge might over‑penalize creative responses.  
- Hallucinations that align with user expectations could be mistakenly scored high.  
- Language drift: if the LLM’s training data differs from the domain, it may misinterpret context. Testing involves cross‑domain prompts and adversarial examples.

**Optimize & Communicate**  
- Use *prompt tuning* or few‑shot examples to reduce variance.  
- Cache embeddings of reference answers for fast similarity checks.  
- Present results as a dashboard: overall score, per‑criterion breakdown, confidence intervals.  

This structured pipeline balances accuracy with cost, aligns with FAANG’s emphasis on scalable evaluation, and clearly communicates reasoning to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
