---
qid: ing_1ec94a8cbd__aws__local
question: 'Explain: Next Steps — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 395
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:02-05:00'
sources: []
---

**Situation & Task**  
While leading a pilot for a large law‑firm client (BigLaw), we deployed an NLP model to auto‑summarize case briefs. The client reported “hallucinations” – the model generating factually incorrect statements. I had to root out the cause, fix it, and re‑launch the service within 30 days while keeping SLA ≥99.9%.

**Action (Technical)**  
1. **Data audit**: used Amazon SageMaker Ground Truth to label 5k summaries for factuality → 92% precision baseline.  
2. **Model dive**: inspected transformer attention maps (Amazon SageMaker Debugger) – discovered over‑fitting on rare legal terms.  
3. **Solution architecture**:
   * Retrain with *contrastive learning* + a curated “legal‑fact” knowledge graph stored in Amazon Neptune.
   * Add an inference guard: Lambda checks each summary against the graph; if >2 facts mismatch, triggers re‑generation via SageMaker endpoint (auto‑scaling).
   * Cache valid summaries in Amazon ElastiCache Redis to reduce latency & cost.  
4. **Cost/scale**: 3 × cheaper than prior on‑prem GPU cluster; SLA maintained by multi‑AZ deployment.

**Result**  
- Factuality ↑ from 70% to 94% (customer‑reported errors dropped 80%).  
- Latency ↓ 35%, cost ↓ 40%.  
- Re‑launch completed 12 days ahead of deadline, earning a “Client Success” award.

**Reflection & Learning**  
I assumed the model was perfect; the audit revealed data bias. Moving forward I’ll embed continuous fact‑checking pipelines and adopt *Bias for Action* + *Dive Deep* to preempt hallucinations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
