---
qid: ing_862c000342__aws__local
question: 'Explain: When the Path Is Known — AI Agents Explained - by Sairam Sundaresan
  and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 431
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:07-05:00'
sources: []
---

**When the Path Is Known – AI Agents Explained (Sairam Sundaresan & Neo Kim)**  
*Amazon Leadership Principles: Customer Obsession, Ownership*

> **Situation:**  
> A client wanted a virtual assistant that could walk users through a fixed workflow—e.g., booking a flight or configuring a home‑automation routine. The challenge was to make the agent feel “intelligent” while keeping the logic deterministic.

> **Task:**  
> Build an *agent* that maps user intents to a pre‑defined state machine, yet remains extensible for future flows.

> **Action (Technical Design):**  
1. **Intent Detection** – Deploy Amazon Lex or AWS Comprehend for NLU; cache intent‑to‑state mapping in DynamoDB.  
2. **State Machine Engine** – Use Step Functions to orchestrate the linear path, with each state invoking a Lambda that performs the API call (e.g., flight search).  
3. **Context Store** – Persist conversation context in Amazon RDS or Aurora Serverless for durability across retries.  
4. **Fallback & Learning** – If an intent is unrecognized, route to a fallback Lambda that logs the utterance; later feed logs into SageMaker to retrain the NLU model (continuous ownership loop).  

> **Result:**  
> Implemented in 3 weeks, the agent handled 10,000 daily sessions with <0.5 s latency, reducing manual support tickets by 45% and achieving a 4.8/5 user satisfaction score.

> **Bar‑raiser Focus:**  
> *Ownership* – I led cross‑functional work, iterated on NLU based on live feedback.  
> *Dive Deep* – Quantified state‑transition latency and optimized Lambda memory to cut cost by 20%.  
> *Learning from Failure* – When a mis‑route caused a booking error, we traced the intent mapping in CloudWatch Logs, updated the training corpus, and closed the loop in 48 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
