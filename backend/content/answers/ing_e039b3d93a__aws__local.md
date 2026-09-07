---
qid: ing_e039b3d93a__aws__local
question: 'Explain: Long context, hallucination, reasoning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 397
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:35-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a team that built an AI‑powered customer support bot for a global retailer. The bot had to process multi‑turn conversations (≈10 k tokens) while maintaining factual accuracy, yet our LLM frequently hallucinated product details.

**Task (T)**  
Reduce hallucination rate below 2 % and keep latency under 1 s per turn, all while scaling to 500k concurrent users.

**Action (A)**  
*Customer Obsession & Ownership*: I first logged every hallucination in a DynamoDB table, then ran a root‑cause analysis.  
*Dive Deep*: We introduced a *reasoning model*—a lightweight BERT encoder that scores each generated answer against the knowledge base before it’s returned.  
*Bias for Action*: Implemented an **AWS Lambda** microservice that chains: (1) LLM inference via **Amazon Bedrock** (Claude 3), (2) context retrieval from **Amazon QLDB**, (3) reasoning score check; if below threshold, the bot re‑generates.  
*Invent & Simplify*: Cached recent user context in **ElastiCache Redis** to keep token counts low.  
*Deliver Results*: Hallucination dropped from 9 % → 1.7 %, latency remained 0.8 s. Cost per inference fell by 18 % due to reduced re‑generation.

**Result (R)**  
User satisfaction scores rose 12 pts, and the bot handled 30 % more tickets without engineering changes—showing measurable impact and a scalable design that balances accuracy, speed, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
