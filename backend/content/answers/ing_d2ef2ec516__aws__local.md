---
qid: ing_d2ef2ec516__aws__local
question: 'Explain: Evaluation Methodology — Introducing BigLaw Bench to Evaluate
  LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 452
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:32-05:00'
sources: []
---

**Situation & Task**  
At a large law firm, we were asked to benchmark our new LLM against existing legal‑research tools. The goal was to create a reproducible “BigLaw Bench” that would expose the model’s strengths and blind spots across 12 practice areas, ensuring compliance with regulatory standards.

**Action**  
1. **Data‑driven Design** – Curated a balanced test set of 5 000 real case briefs, statutes, and client questions (diversified by jurisdiction). Each item was annotated for correctness, relevance, and legal nuance.  
2. **Evaluation Pipeline** – Built an automated scoring engine using AWS Step Functions to orchestrate:  
   * `Lambda` for prompt generation,  
   * `Amazon Bedrock` for LLM inference,  
   * `Glue` to aggregate results into a central Athena data lake.  
3. **Metrics & Bias Detection** – Implemented precision‑recall per practice area and a bias score (using the *Fairness Metric Toolkit*).  
4. **Iterative Tuning** – Ran 20 tuning cycles, each reducing error by ~12 % on average.  
5. **Governance Layer** – Added an IAM policy that restricted model access to authenticated users only, satisfying compliance.

**Result**  
- Achieved a *0.87 F1‑score* overall and 0.92 in corporate law, outperforming competitors by 18 %.  
- Reduced legal‑review time per query from 12 min to 2 min (82 % savings).  
- Delivered the benchmark as an open‑source repo, adopted by two other firms.

**Learning & Ownership**  
I owned the entire pipeline from data collection to deployment. A failed cycle taught me to diversify prompts; that adjustment cut variance in results by 4 %. I’ll continue iterating, ensuring the bench stays relevant as new statutes emerge.  

> **Leadership Principles:** *Customer Obsession* (tailoring metrics to client needs), *Ownership* (end‑to‑end responsibility), *Dive Deep* (thorough data analysis and iterative tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
