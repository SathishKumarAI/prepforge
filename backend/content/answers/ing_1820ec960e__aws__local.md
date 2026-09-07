---
qid: ing_1820ec960e__aws__local
question: 'Q: Why have benchmarks like MMLU and HumanEval stopped being useful for
  ranking frontier models, and what replaced them?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 446
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:08-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent sprint to evaluate our LLMs for the new Alexa Health Coach, I noticed that MMLU and HumanEval scores were no longer correlating with real‑world user satisfaction.  
- **Situation:** Our team had been relying on those benchmarks to decide which model version to ship.  
- **Task:** I was asked to investigate why the correlation had dropped and propose a new evaluation strategy.  
- **Action:**  
  1. Ran *MMLU* and *HumanEval* on the last three models (A‑B‑C) and logged scores: A = 79%, B = 82%, C = 81%.  
  2. Conducted a **user‑experience study** with 500 real users, measuring task completion time and post‑interaction NPS. Results: Model C had a 15% faster completion time but an NPS drop of 10 points vs. B.  
  3. Determined that the benchmarks overemphasized synthetic reasoning while neglecting conversational nuance and domain‑specific knowledge.  
  4. Replaced them with **Domain‑Specific Interaction Benchmarks (DSIB)**—a set of scripted health‑consultation dialogs, evaluated via automatic intent‑accuracy + manual quality scoring. Implemented using Amazon SageMaker endpoints and AWS Lambda for real‑time inference cost tracking.  

- **Result:** DSIB scores predicted NPS within ±2 points, enabling a 20% faster release cycle and a $30k/month savings on compute by pruning underperforming models early.  

**Leadership Principles:** *Customer Obsession* (prioritized user feedback), *Dive Deep* (root‑cause analysis of benchmark mismatch), and *Bias for Action* (quickly rolled out DSIB). The bar‑raiser would look for ownership of the problem, data‑driven insight, and a clear lesson: benchmarks must evolve with real usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
