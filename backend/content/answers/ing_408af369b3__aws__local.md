---
qid: ing_408af369b3__aws__local
question: 'Q: What is the "Step-by-Step" prompt optimization?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 364
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:51-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> 
> **Situation & Task** – In my last role at a fintech startup I led the launch of an AI‑driven recommendation engine for our mobile app. The first version had 35 % click‑through but poor conversion, so I was tasked to improve the model’s relevance by refining how we prompt the LLM.  
> 
> **Action** – I introduced the “Step‑by‑Step” prompt optimization technique:  
> *1️⃣ Break the user intent into discrete sub‑tasks (e.g., “identify goal”, “list constraints”).*  
> *2️⃣ Feed each sub‑task to the model sequentially, chaining outputs as context for the next step.*  
> *3️⃣ Store intermediate results in a DynamoDB cache keyed by session ID, allowing us to reuse partial reasoning and reduce token usage.*  
> *4️⃣ Use CloudWatch metrics (prompt latency, token count) to auto‑scale Lambda functions that generate prompts, keeping cost < $0.00002 per inference.*  
> 
> **Result** – After three sprints the click‑through rate rose from 35 % to 48 %, and conversion increased by 22 %. Token usage dropped 18 %, cutting inference costs by $12K/month. The team adopted the pattern company‑wide, improving other LLM use cases.  
> 
> **Learnings** – The key was *dive deep* into prompt structure, iteratively measuring impact, and treating every optimization as a product feature with measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
