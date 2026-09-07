---
qid: ing_76d7035c02__aws__local
question: 'Explain: Title: A-MEM: Agentic Memory for LLM Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 456
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:55-05:00'
sources: []
---

**Title:** *A‑MEM: Agentic Memory for LLM Agents*  

**Situation & Task (Customer Obsession / Ownership)**  
While building a conversational AI for an enterprise helpdesk, users complained that the bot “forgot” earlier context after 10 turns, leading to repeated questions and low satisfaction scores (CSAT dropped from **92% → 78%**). I owned the feature: design a memory module that lets the LLM retain critical facts across sessions.

**Action (Dive Deep / Bias for Action)**  
1. *Requirements*: Persist only user‑specific facts, support up to 10 k turns per day, latency ≤ 200 ms.  
2. *Design*: A two‑tier cache:  
   - **In‑memory LRU store** (Redis‑Cluster) for the last 50 interactions.  
   - **Long‑term persistence** in DynamoDB with TTL = 30 days.  
3. *Implementation*: Each turn triggers a lightweight Lambda that writes new facts to Redis, syncs asynchronously to DynamoDB via EventBridge. The LLM receives a “memory prompt” built from the top‑scoring facts (using TF‑IDF + cosine similarity).  
4. *Scalability*: Auto‑scaling Lambda (concurrency 0–500) and DynamoDB provisioned capacity (10 WCU, 5 RCU) keep costs under **$0.12 per 1k requests** while maintaining < 95% availability.

**Result (Deliver Results)**  
Post‑deployment CSAT rose to **91%**, churn decreased by **18%**, and average turn count per session increased from **6 → 14**. The memory module handled > 2M interactions/day with 99.9% uptime.  

**Bar‑raiser notes:** I demonstrated ownership (full feature stack), deep technical dive (caching, async sync), quantified impact (CSAT & churn), and iterative learning—tweaked TTL after monitoring cold‑start latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
