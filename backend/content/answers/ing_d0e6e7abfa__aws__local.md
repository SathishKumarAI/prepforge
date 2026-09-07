---
qid: ing_d0e6e7abfa__aws__local
question: 'Explain: Step 2: Review 100 Traces and Take Notes (Open Coding)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:25-05:00'
sources: []
---

**Situation & Task**  
When launching a new recommendation engine, I had to surface the root cause of latency spikes that were hurting user experience. The team’s first step was “Review 100 traces and take notes (Open Coding)”. My goal: build an automated, repeatable process so we could surface patterns quickly and reduce investigation time.

**Action**  
1. **Gather data** – Export the latest 10 k X‑Ray traces to S3 (using `aws xray get-traces`), then use Athena to run a query that pulls key fields (`service`, `operation`, `duration`, `error`).  
2. **Open coding** – Import the result into a Jupyter notebook and apply NLP clustering (K‑means on TF‑IDF vectors of `notes`) to group similar issues.  
3. **Automate** – Wrap the pipeline in an AWS Step Functions state machine triggered by CloudWatch Event when a new batch lands in S3. The Lambda function writes clustered insights back to DynamoDB for real‑time dashboards.  

This reduced manual note‑taking from 2 hrs per sprint to 15 min, and surfaced a “cold start” pattern that cut latency by **28 %** after we moved the cold‑start logic to a pre‑warm Lambda layer.

**Result**  
- Investigation time dropped 70 %.  
- Latency decreased from 1.2 s to 0.8 s, improving NPS by +5 points.  
- The automated pipeline now runs nightly with <$10/month cost and scales linearly as trace volume grows.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster insights → smoother user experience.  
- **Ownership & Dive Deep** – Built end‑to‑end solution, quantified impact, learned from failed manual coding attempts.  

Bar‑raiser focus: ownership of the pipeline, depth in data‑driven design, clear metrics, and iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
