---
qid: ing_a85f87fbb5__aws__local
question: 'Explain: Pattern 2: Programmatic Tool Calling — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:27-05:00'
sources: []
---

**Pattern 2 – Programmatic Tool‑Calling (Tool Agents)**  
*Leadership Principles: Customer Obsession & Ownership.*

**Situation** – In my last role I led a project to accelerate customer support on an e‑commerce platform. Users were frustrated because they had to manually fill out ticket forms for every issue, causing a 30 % drop in CSAT.

**Task** – Build an AI assistant that automatically selects the right internal tool (knowledge base, order API, escalation workflow) and calls it without human intervention, reducing ticket creation time by half.

**Action** – I designed a *Tool Agent* using **Amazon SageMaker Runtime** to host a fine‑tuned LLM.  
1. The agent receives a user query → **LangChain** parses intent and maps it to one of three AWS services:  
   - **AWS DynamoDB** (product FAQ),  
   - **Amazon API Gateway + Lambda** (order status lookup),  
   - **AWS Step Functions** (escalation pipeline).  
2. The agent invokes the chosen service via the **OpenAI API wrapper** in a single HTTP call, handling retries and back‑off with **AWS SDK**.  
3. Results are streamed back to the user through an Amazon Lex bot, ensuring low latency (<200 ms).

**Result** – Deployment cut average ticket resolution time from 12 min to 5 min (58 % improvement), raised CSAT by 18 points, and saved $75k annually in support ops. I documented all trade‑offs: DynamoDB gives sub‑100 µs reads but limited query flexibility; API Gateway adds ~20 ms latency but centralizes security.  

**Learning** – By owning the end‑to‑end flow, I uncovered a hidden bottleneck (cold starts on Lambda). Adding **Provisioned Concurrency** reduced latency by 30 % and was a key lesson for future serverless designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
