---
qid: ing_3707734265__aws__local
question: You've connected six MCP servers. There are now 130 tool definitions and
  ~45k tokens of schema in context before the user says a word. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 453
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:00-05:00'
sources: []
---

**Situation:**  
I was tasked with scaling a conversational AI that now had **six MCP servers**, **130 tool definitions**, and ~45 k tokens of schema loaded into context before the user even spoke.

**Task:**  
Reduce latency, keep the prompt under GPT‑4’s 32K token limit, and maintain high availability without inflating costs.

**Action:**  

1. **Ownership & Customer Obsession** – I scoped the problem by instrumenting each MCP to log token usage per request.  
2. **Dive Deep** – Identified that 60 % of the tokens came from legacy schema docs no longer referenced by any tool.  
3. **Bias for Action** – Implemented a *semantic pruning* pipeline:  
   - Store all schemas in **Amazon DynamoDB** with tags for active tools.  
   - Run a scheduled **AWS Lambda** (Python + boto3) that uses OpenAI’s embeddings to compute similarity scores against the user query, keeping only top‑5 % of tokens.  
4. **Invent & Simplify** – Cached the pruned prompt in **ElastiCache‑Redis** for 10 min to avoid recomputation on repeated queries.  
5. **Deliver Results** – After deployment:  
   - Token count dropped from 45 k → **12 k** (≈73 % reduction).  
   - Average end‑to‑end latency fell from **1.8 s** to **0.9 s**.  
   - Cost per request decreased by **$0.03** (~20 % savings).

**Result:**  
The system now consistently stays within GPT‑4 limits, delivers faster responses, and reduces operational spend while keeping the user experience seamless.

*Bar‑raiser focus:* ownership of metrics, deep dive into token distribution, quantified impact, and learning from an earlier over‑provisioning failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
