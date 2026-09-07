---
qid: ing_4cb62ac1d7__aws__local
question: How does function calling actually work with an LLM, and how do you make
  it reliable enough for production agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 459
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:36-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the rollout of a conversational AI agent that had to execute external API calls (e.g., booking flights, querying inventory). The challenge was turning natural‑language intents into reliable function calls without user frustration.

**Action**  
1. **Model fine‑tuning & prompt engineering** – I used Amazon Bedrock’s Llama‑2 with a custom “function schema” prompt that enumerates the callable APIs and their JSON signatures.  
2. **Runtime guardrails** – In Lambda, I wrapped the model output in a deterministic parser that validates JSON against the schema using AWS Glue for schema registry, rejecting malformed calls.  
3. **Retry & fallback strategy** – Leveraging Step Functions, each function call is retried up to three times with exponential back‑off; if still failing, a human‑in‑the‑loop queue (SQS + SNS) escalates the request.  
4. **Observability** – CloudWatch metrics track success rate, latency, and error types; I set alarms that trigger automatic scaling of Lambda concurrency.

**Result**  
Within two months we achieved a 99.2 % successful function‑call rate, cutting user complaints by 35 %. Latency stayed under 300 ms for 95 % of requests, and cost per transaction dropped 18 % thanks to efficient cold‑start handling.

> **Leadership Principles**  
> *Customer Obsession* – We built robust fallbacks so users never hit a dead end.  
> *Ownership* – Took full responsibility for the entire call‑flow stack, from model to observability.  
> *Dive Deep* – Used schema validation and Step Functions retries to surface hidden edge cases early.

**Bar‑raiser checkpoints**  
- Clear ownership of each failure mode.  
- Quantified impact (99.2 % success).  
- Deep dive into retry logic and cost trade‑offs.  
- Lessons: initial blind trust in the LLM caused >10 % errors; adding strict schema validation turned that into a best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
