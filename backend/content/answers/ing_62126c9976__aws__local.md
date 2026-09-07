---
qid: ing_62126c9976__aws__local
question: 'Explain: LLM as a judge — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 387
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:23-05:00'
sources: []
---

**Situation & Task**  
While leading the “LangWatch” pilot in Q3 ’24, we needed a scalable way to automatically evaluate LLM‑based judges for legal reasoning tasks—ensuring they met our accuracy threshold of 92 % on benchmark cases before onboarding them into production.

**Action**  
I architected an end‑to‑end testing pipeline using **Amazon SageMaker** for model inference, **AWS Step Functions** to orchestrate the test workflow, and **Amazon Athena** + **Glue** for data lake analytics. Each test case (≈ 5 k per day) was scored against a gold standard; results were aggregated in DynamoDB and visualized via QuickSight dashboards. To enforce bias‑free judgments I added an “audit” microservice that flags outlier predictions, triggering manual review on **AWS Lambda**.

I wrote a custom evaluation metric (F1 + a legal‑context penalty) and set up CI/CD with CodePipeline to retrain models when drift was detected. The system automatically throttles inference load using SageMaker’s autoscaling, keeping latency under 200 ms and cost below $0.02 per request.

**Result**  
Within two weeks we reduced manual review hours by **70 %**, cut evaluation costs from $15k to $4.5k/month, and achieved a sustained 93 % accuracy rate across all judge models—surpassing the target.  

**Reflection**  
I practiced *Ownership* by leading cross‑functional teams (ML, security, legal) and *Dive Deep* by profiling latency hotspots in SageMaker. The key learning: automated audit loops prevent blind spots; failure to monitor drift would have let subtle bias creep into production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
