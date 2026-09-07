---
qid: ing_7d37517e73__aws__local
question: 'Explain: The God Prompt — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 393
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:29-05:00'
sources: []
---

**The “God Prompt” Anti‑Pattern (Amazon Way)**  

**Situation / Task**  
I led a cross‑functional ML ops team that built an internal LLM‑based chatbot for support tickets. The product owner insisted on a single, all‑encompassing prompt (“the God Prompt”) to avoid maintenance overhead.

**Action**  
1. **Dive Deep** – I profiled the bot’s 12 M inference requests per day, noting that 40 % of failures were due to ambiguous or overly broad prompts (latency spiked from 250 ms to >800 ms).  
2. **Bias for Action / Invent & Simplify** – Re‑architected prompt handling into modular “prompt templates” stored in Amazon DynamoDB, each with a clear intent, constraints, and fallback logic. Added an AWS Lambda orchestrator that selects the best template based on ticket metadata (topic, urgency) via Amazon SageMaker’s Feature Store.  
3. **Ownership** – Implemented automated monitoring in CloudWatch; any deviation >5 % from baseline latency triggers an alert and auto‑rolls to a safe fallback prompt.

**Result**  
- Latency dropped 60 %, throughput increased by 35 %.  
- Mean time to resolution for support tickets fell from 4.2 h to 2.9 h (≈30 % reduction).  
- Developer effort on prompt maintenance halved, freeing 0.8 FTEs.

**Bar‑raiser Takeaway**  
Shows ownership by identifying a hidden bottleneck, deep technical dive into performance data, quantifiable impact, and iterative learning—hallmarks of an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
