---
qid: ing_0e343e2b8b__aws__local
question: 'Explain: From Prompting to Loop Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 377
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:47-05:00'
sources: []
---

**Prompting → Loop Engineering**

*Situation*: At my previous role I led the migration of a rule‑based chatbot into an AI‑driven conversational platform. The product team needed to reduce response latency by 40 % while keeping user satisfaction above 90 %.  
*Task*: Re‑architect the interaction loop so that the model could adapt in real time, eliminating costly round‑trips to the LLM endpoint.  
*Action*: I applied **Customer Obsession** and **Dive Deep**. First, I logged every prompt‑response pair (≈3 M interactions/day) into a Kinesis stream, then built a DynamoDB table keyed by intent+context. A Lambda function distilled high‑value examples and trained a lightweight fine‑tuned model on SageMaker nightly. For inference I switched from synchronous OpenAI calls to an asynchronous **Amazon Bedrock** endpoint behind an API Gateway with a 50 ms timeout, backed by an **AWS WAF** rule that cached the top 10 intents in CloudFront edge locations.  
*Result*: Latency dropped from 1.2 s to 0.7 s (42 % improvement). The new loop handled 15 k RPS with 99.8 % availability, and cost per request fell by 35 %. Post‑deployment, NPS rose from 78 to 85.  

**Bar‑raiser cues**: I demonstrated ownership of the entire stack, dove into telemetry to surface bottlenecks, quantified impact with clear metrics, and iterated on failure modes (e.g., handling edge‑case intents by falling back to the original LLM).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
