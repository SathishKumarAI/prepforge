---
qid: ing_60409f36cf__faang__local
question: 'Explain: Faithfulness Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 494
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:48-05:00'
sources: []
---

**Clarify**  
*Problem:* We need to evaluate whether a large language model (LLM) faithfully represents source material or factual knowledge—i.e., its *faithfulness*.  
*Assumptions to confirm:*  
1. We have ground‑truth references (e.g., trusted documents, fact databases).  
2. The LLM outputs are deterministic or we can sample enough runs.  

**Approach**  
1. **Define faithfulness metrics**: Exact match, precision/recall on extracted facts, hallucination rate.  
2. **Collect data**: Generate prompts → model responses; align each response with a reference set.  
3. **Automated extraction**: Use NER/RE or prompt‑based fact extraction to pull candidate facts from both sides.  
4. **Comparison pipeline**: Compute overlap, compute precision (correct / extracted) and recall (correct / reference).  
5. **Human audit**: Randomly sample low‑confidence cases for manual verification.  

**Depth**  
- *Metric:* `Faithfulness = 2 * (Precision * Recall) / (Precision + Recall)` (F1).  
- *Complexity:* Extraction is O(n) per document; comparison is O(mk) where m=extracted facts, k=reference facts.  
- *Trade‑offs:* Full extraction is expensive but yields fine‑grained errors; lightweight keyword matching is faster but misses nuanced hallucinations.  

**Edge Cases**  
- Ambiguous or multi‑step reasoning: model may paraphrase correctly yet change semantics.  
- Out‑of‑domain knowledge: references missing leads to false negatives.  
- Non‑verifiable statements (opinions) should be excluded from evaluation.  

**Optimize & Communicate**  
- Cache extracted facts for repeated runs.  
- Use a hierarchical evaluation: first quick token‑level overlap, then deep fact matching only on mismatches.  
- Present results with dashboards: overall F1 + per‑prompt breakdowns, highlighting hallucination hotspots.  
- Explain trade‑offs to stakeholders: higher precision → fewer false positives but more missed errors; higher recall → broader coverage but noisier scores.  

This structured pipeline balances rigor and scalability—exactly what FAANG interviewers expect for a robust AI evaluation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
