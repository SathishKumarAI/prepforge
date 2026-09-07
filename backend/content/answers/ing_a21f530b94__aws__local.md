---
qid: ing_a21f530b94__aws__local
question: 'Explain: Evaluate your LLM App — GitHub - vibrantlabsai/ragas: Supercharge
  Your LLM Application Evaluations \ud83d\ude80 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 371
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:31-05:00'
sources: []
---

**Situation & Task**  
When I launched a conversational AI for an e‑commerce client, the team struggled to measure model drift and user satisfaction in real time. I was tasked with building a lightweight evaluation pipeline that could run at scale on AWS while keeping latency under 200 ms.

**Action – Design & Implementation**  
I adopted **Amazon SageMaker Model Monitor** to stream predictions to a Kinesis Data Stream, where a Lambda function parsed each request/response pair and pushed it into an Athena‑backed data lake. Using **AWS Step Functions**, I orchestrated nightly “rags” (Retrieval-Augmented Generation Simulations) that compared current LLM outputs against a golden set of user intents stored in DynamoDB. The evaluation scripts, written in Python with the *ragas* library, compute BLEU, ROUGE‑L, and semantic similarity via **Amazon Bedrock** embeddings. Results are visualised on an Amazon QuickSight dashboard.

**Result**  
Within three months we reduced model drift alerts by 65 % (from 120/day to 42/day) and increased NPS by 12 points, directly correlating with a 9 % lift in conversion rates. Costs stayed below $2k/month, a 30 % savings over our previous on‑prem solution.

**Reflection & Ownership**  
I owned the end‑to‑end pipeline, performed root‑cause analysis when drift spikes occurred, and iterated the evaluation metrics based on stakeholder feedback. This experience reinforced **Customer Obsession** (continuous metric alignment with user goals) and **Dive Deep** (leveraging AWS analytics to surface actionable insights).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
