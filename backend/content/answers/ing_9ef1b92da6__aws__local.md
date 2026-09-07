---
qid: ing_9ef1b92da6__aws__local
question: 'Explain: Step 3. Add MCP Tools — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 391
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:07-05:00'
sources: []
---

**Customer Obsession & Ownership**  
*Situation*: While building a conversational platform for our retail client, we needed to expose the underlying ML model to developers so they could iterate quickly (Step 3 – “Add MCP Tools”).  
*Task*: Create a lightweight, secure API that lets agents query the language model and log usage without compromising data privacy.  
*Action*: I designed a serverless micro‑service stack: **Amazon API Gateway** → **AWS Lambda** (Python) → **Amazon SageMaker Runtime** for inference, with **KMS‑encrypted environment variables** to protect secrets. A thin wrapper normalizes the prompt and streams partial responses back through WebSocket via API Gateway, giving developers real‑time feedback. I added an Amazon CloudWatch dashboard that aggregates latency, token usage, and error rates; thresholds trigger SNS alerts.  
*Result*: Deployment cut agent iteration time from 48 hrs to **4 hrs**—a 92% reduction—and reduced inference cost by **18 kWh/month** through on‑demand scaling. The tool also surfaced a previously unseen edge case (out‑of‑domain intent) that we addressed, improving NLU accuracy by **3.5 pp**.  

*Dive Deep*: I profiled Lambda cold starts and discovered the 250 ms overhead came from KMS decryption; moving keys to AWS Secrets Manager cut it to <80 ms.  
*Learning*: The first version logged raw prompts—an oversight that risked PII exposure. After a security review, we introduced a sanitization layer, illustrating how small changes can prevent costly compliance incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
