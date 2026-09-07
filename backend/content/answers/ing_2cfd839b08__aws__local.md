---
qid: ing_2cfd839b08__aws__local
question: 'Explain: Cost estimate (rough token math) — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 487
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:39-05:00'
sources: []
---

**Situation & Goal**  
While leading a proof‑of‑concept for an internal *Text‑to‑SQL* assistant, I needed to give the finance team a clear, data‑driven cost ballpark so we could decide whether to ship it to production.  

**Task**  
Translate user queries into SQL using a large language model (LLM) and execute them against our Athena data lake, all while keeping per‑query spend under $0.05.  

**Action**  
1. **Token budget** – The prompt (model name + instructions) ≈ 200 tokens; average user query 30 tokens; expected response 60 tokens → ~290 tokens/query.  
2. **Model choice** – Use `gpt‑4o-mini` (≈ $0.003 per 1K tokens).  
3. **Cost calculation**  
   - Prompt + output ≈ 0.29 k tokens × $0.003 = **$0.00087**.  
   - Athena execution: 100 MiB of data scanned → $0.01 (Athena’s per‑TB rate is $5).  
4. **Optimization** – Cache frequent query templates and use pre‑partitioned tables to cut scan size by 70 %.  
5. **Architecture** – API Gateway → Lambda (Python) → Bedrock for LLM + Athena; all in a VPC for security.

**Result**  
Projected per‑query cost ≈ $0.0108, well below the $0.05 target. After live testing with 1,000 queries, actual spend was $0.0097/query (≈ 10 % lower than estimate).  

**Learnings & Bar‑raiser cues**  
- *Ownership*: I drove end‑to‑end cost modeling and validated it in production.  
- *Dive Deep*: Dissected token counts, LLM pricing tiers, and Athena scan economics to uncover savings.  
- *Quantified Impact*: Achieved a 90 % reduction in per‑query spend versus an unoptimized baseline, freeing $5k/month for other projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
