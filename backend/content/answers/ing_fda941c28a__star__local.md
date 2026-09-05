---
qid: ing_fda941c28a__star__local
question: 'Explain: Strategy 2: Prompt Optimization — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:07-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our chatbot was running on an expensive cloud NLP service. Every user interaction cost us $0.10, so with 50,000 daily conversations we hit a monthly bill of over $150k—way above the budget.

**Task:**  
I needed to cut prompt‑related costs by at least 40% while keeping response quality high enough for compliance and user satisfaction (target: >90 % positive feedback).

**Action:**  
1. **Profiling & Baseline:** Logged token usage per intent, revealing that generic “Explain” prompts were 30 % longer than necessary.  
2. **Prompt Engineering:** Rewrote templates to be concise, removed redundant context, and used slot‑filling placeholders (e.g., `{account_balance}`) instead of full sentences.  
3. **Dynamic Prompting:** Implemented a tiered prompt system—short “quick‑reply” prompts for routine queries, longer detailed ones only when the user explicitly requests more info.  
4. **Cost Monitoring Tool:** Built an internal dashboard using Grafana + Prometheus to track tokens per minute in real time, enabling rapid rollback if quality dipped.

**Result:**  
Token usage dropped from 1.8 M to 1.0 M per month, slashing costs by $70k monthly (≈48 % reduction). User satisfaction stayed at 92 %, and we gained an additional 10 % of active users due to faster response times. I learned that systematic prompt pruning combined with real‑time monitoring can turn a costly AI feature into a scalable product component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
