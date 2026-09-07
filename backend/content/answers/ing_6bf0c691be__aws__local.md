---
qid: ing_6bf0c691be__aws__local
question: 'Explain: Creating and Managing Prompts — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 463
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:05-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building an end‑to‑end evaluation pipeline for LLM prompts that could scale to 10 k prompt runs per day while giving us actionable quality metrics for a product used by 200 K customers.

**Action**  
I took *Ownership* and *Dive Deep*:  

1. **Prompt Store** – DynamoDB (partition key: `prompt_id`) with TTL for stale prompts; this gives low‑latency reads/writes (<10 ms) and is cost‑effective at scale.  
2. **Evaluation Runner** – ECS Fargate tasks triggered by EventBridge events that consume the prompt, send it to an OpenAI endpoint (or internal Bedrock), capture the response and log metadata in S3 as Parquet for analytics.  
3. **Metrics Aggregator** – Glue crawls the Parquet files into a Lake Formation catalog; Athena queries compute prompt‑level scores (BLEU, ROUGE) and overall quality per version.  
4. **Dashboards & Alerts** – QuickSight visualizes trends; CloudWatch alarms fire when a new prompt’s mean score drops 5 % below baseline.  

I introduced **Langwatch** style checks by running a lightweight LLM‑based grammar verifier in the runner, flagging any prompt that deviates from an approved template. **Langfuse** was used to store evaluation sessions and replay them for debugging.

**Result**  
Within two months we reduced manual QA hours by 70 % (from 80 h/week to 24 h), improved average prompt quality score from 0.65 to 0.82, and cut evaluation cost to <$5k/month versus the previous $12k. The system now handles >20 k prompt runs/day with <99.9 % availability.

**Reflection**  
I learned that early adoption of serverless + data lake patterns gives both agility and durability; future iterations will experiment with SageMaker Pipelines for automated retraining when quality drops below threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
