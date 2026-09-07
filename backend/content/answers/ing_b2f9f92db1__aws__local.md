---
qid: ing_b2f9f92db1__aws__local
question: 'Explain: Prompt Engineering & Context Engineering <a name="prompting"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:28-05:00'
sources: []
---

**Prompt Engineering & Context Engineering**

*Situation*: While leading a data‑science team for an AI‑powered recommendation engine at my previous company, we noticed that model accuracy dropped 12 % when new users entered the system because the prompts sent to our LLM were too generic.

*Task*: I had to redesign how we construct prompts and embed contextual signals so that the model could adapt instantly to user state without re‑training.

*Action*:  
1. **Prompt Engineering** – I defined a template with placeholders for *user intent*, *historical interactions*, and *content metadata*. Using AWS SageMaker Pipelines, I automated prompt generation via Lambda functions triggered by Kinesis events whenever a new interaction arrived.  
2. **Context Engineering** – We built a DynamoDB table to store session‑level context (last 5 actions). A Step Functions workflow pulls this context, merges it into the prompt, and sends it to Amazon Bedrock (OpenAI GPT‑4).  
3. To keep latency < 200 ms, we used an Elasticache Redis cache for hot contexts and scheduled nightly batch jobs (Glue) to purge stale entries.

*Result*: Accuracy improved from 82 % to **94 %** on the next‑item prediction task, reducing churn by 7 %. Costs were contained at $0.02 per inference thanks to caching and spot instances.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: We focused on delivering better recommendations for end users.  
- *Dive Deep & Ownership*: I architected the entire prompt pipeline, monitored metrics in CloudWatch, and iterated until we hit our KPI.

**Bar‑raiser cues**: Clear ownership of the end‑to‑end system, depth in trade‑offs (latency vs cost), quantified impact, and lessons learned when a pilot failed to meet SLA—prompt redesign saved us from a full rebuild.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
