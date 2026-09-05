---
qid: ing_ac0378d478__star__local
question: 'Explain: LLM Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 382
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:37-05:00'
sources: []
---

**Situation:**  
During my last project at a fintech startup we were building an AI‑powered customer support bot that had to answer regulatory queries accurately. The internal LLM we used was fine‑tuned on our proprietary data but the compliance team flagged a 12 % error rate in generated responses, threatening a regulatory audit.

**Task:**  
I needed to design a robust evaluation pipeline that would quantify the model’s factual correctness, safety, and user satisfaction before deployment, and then reduce the error rate below 5 %.

**Action:**  
I built a multi‑stage evaluation framework:  
1. Created a curated test set of 3,000 real customer tickets annotated by compliance experts (fact check, tone, privacy).  
2. Ran automated metrics—BLEU, ROUGE, and a custom “FactScore” that matched key facts against our knowledge graph.  
3. Added human‑in‑the‑loop scoring with a 5‑point Likert scale for safety and relevance, collecting 50 responses per sample.  
4. Implemented an active learning loop: flagged low‑confidence outputs were re‑fine‑tuned on corrected examples, and we retrained the model nightly.  
5. Finally, set up A/B testing in a sandbox environment to measure user satisfaction (CSAT) and response latency.

**Result:**  
After two iterations, the factual error rate dropped from 12 % to 3.2 %, FactScore improved by 18 %, and CSAT rose from 78 % to 92 %. The process taught me that combining quantitative metrics with targeted human review is essential for trustworthy LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
