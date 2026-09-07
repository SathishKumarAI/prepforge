---
qid: ing_e863dbb1c4__aws__local
question: 'Explain: Q112: Your agent performs well on short tasks but degrades badly
  past 30 minutes of autonomous work. Diagnose and fix it using context engineering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 434
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
Our autonomous agent served a finance app that required >30 min of continuous reasoning. After ~30 min the accuracy dropped from **94 % to 68 %**, causing user churn and SLA violations.

**Action (Dive Deep + Bias for Action)**  
1. **Diagnose context loss** – logged token usage per request; found that the prompt‑context buffer capped at 8 k tokens, leading to truncation of earlier dialogue.  
2. **Engineered a hierarchical memory**:  
   * **Short‑term (≤4 h)** stored in an encrypted **DynamoDB table** keyed by session ID with TTL.  
   * **Long‑term (>4 h)** summarized via **AWS Bedrock** (Claude 3) and persisted to **S3** as a JSON blob, re‑loaded when needed.  
3. **Prompt template**: prepend the latest summary + top‑k user intents before each LLM call, keeping the total token count <5 k.  
4. Deployed via **Step Functions** orchestrating Lambda layers for summarization and cache retrieval.

**Result (Deliver Results)**  
- Accuracy recovered to **93 %** over 2 h sessions; after 6 h it held at **91 %**.  
- Latency increased by only **12 ms** per turn; cost grew <5 % due to reduced LLM calls.

**Learnings (Invent & Simplify)**  
The root cause was a static context window; dynamic summarization coupled with persistent memory solved degradation without redesigning the core agent. Future iterations will experiment with incremental learning and real‑time intent extraction to further reduce overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
