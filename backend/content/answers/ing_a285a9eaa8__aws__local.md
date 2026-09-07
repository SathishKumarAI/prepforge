---
qid: ing_a285a9eaa8__aws__local
question: 'Explain: Reasoning techniques — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 450
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:34-05:00'
sources: []
---

**Prompt Engineering & Contextual Reasoning in AI – A Design Story**

**Situation (S)**  
At my last role I led a team that built an internal chatbot to triage support tickets for 3 M users. The bot’s accuracy was only 65 %, causing long queue times.

**Task (T)**  
I had to boost intent‑classification accuracy while keeping latency <200 ms and cost <$0.01 per inference, aligning with **Customer Obsession** (delivering fast help) and **Ownership** (owning the entire pipeline).

**Action (A)**  
1. **Prompt Engineering** – I introduced a *dynamic prompt* that prepended contextual metadata (ticket priority, user tier, past interactions). This leveraged the LLM’s few‑shot learning to focus on relevant features.  
2. **Contextual Retrieval** – Used Amazon Kendra to index recent tickets and returned top‑k passages as context via the `--context` field in SageMaker Runtime InvokeEndpoint.  
3. **Model & Deployment** – Deployed a distilled GPT‑Neo model (125M params) on an **Amazon SageMaker Endpoint** with autoscaling between 2–10 instances, using Spot Instances to cut cost by 40 %.  
4. **Monitoring** – Implemented CloudWatch metrics for *InferenceLatency* and *Accuracy*, feeding back into an automated retraining pipeline in **AWS Glue**.

**Result (R)**  
- Accuracy rose from 65 % → **87 %** on a held‑out set, reducing average wait time by **38 %**.  
- Cost per inference dropped from $0.02 to **$0.008**.  
- The system now scales to 10 k concurrent users with <200 ms latency.

**Bar‑raiser focus** – I demonstrated deep ownership (full pipeline), a data‑driven lift, and learned that *contextual prompts* are the single most impactful tweak in LLM performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
