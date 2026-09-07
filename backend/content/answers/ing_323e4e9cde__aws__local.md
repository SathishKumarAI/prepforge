---
qid: ing_323e4e9cde__aws__local
question: 'Explain: Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 466
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:48-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team to launch an internal chatbot that auto‑generates code snippets, we needed to evaluate model quality against real‑world use cases. The challenge was to build a repeatable, scalable evaluation pipeline that could ingest millions of user requests and provide actionable metrics for the OpenAI API.

**Action**  
1. **Ownership & Bias for Action** – I defined a *“Model Evaluation Service”* in AWS using **Lambda** (for stateless request handling), **Step Functions** (to orchestrate parallel eval jobs), and **S3** (to store raw inputs/outputs).  
2. Leveraged **OpenAI’s `chat/completions` endpoint** with a fixed prompt set, then compared responses to ground‑truth using the **BLEU** score and custom semantic similarity metrics.  
3. Implemented an automated feedback loop: every batch of 10 k requests triggered a Lambda that updated a DynamoDB table with success rates, latency, and error counts.  
4. Created dashboards in **Amazon CloudWatch + QuickSight** to surface key KPIs (e.g., 0.87 BLEU on production traffic, 200 ms avg latency).  

**Result**  
- Reduced evaluation time from **5 days → 2 hours** per cycle.  
- Identified a model drift that lowered accuracy by **12%**, prompting an API parameter tweak that restored performance to **>90% BLEU**.  
- Cut costs by **35%** by auto‑scaling Lambda concurrency and using S3 Lifecycle policies.

**Learnings**  
- *Dive Deep*: Continuous monitoring revealed subtle latency spikes caused by regional endpoint throttling; we migrated to the US‑East‑1 OpenAI endpoint, cutting response time 30%.  
- *Customer Obsession*: End users reported fewer errors, improving satisfaction scores from **4.2 → 4.7** on internal surveys.

---

> **Bar‑raiser cues:** clear ownership of the end‑to‑end pipeline, data‑driven impact (metrics), deep technical design choices, and lessons learned from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
