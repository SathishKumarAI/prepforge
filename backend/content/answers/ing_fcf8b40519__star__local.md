---
qid: ing_fcf8b40519__star__local
question: 'Explain: Strategy 1: Model Routing — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:39-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new AI‑powered customer support chatbot that integrated several third‑party language models (OpenAI GPT‑4, Cohere, and an in‑house fine‑tuned model). The monthly usage hit 300k requests, but our cost estimates were wildly off—some queries were routed to the most expensive engine even when cheaper ones could handle them.

**Task:**  
I was tasked with designing a dynamic routing layer that would choose the optimal model per request based on complexity and cost, keeping total spend under $15k/month while maintaining an average response latency of <1.2 s.

**Action:**  
I built a lightweight classifier in Python using scikit‑learn to score incoming prompts for “complexity” (token count, presence of domain jargon). The routing service then matched the score against predefined thresholds: low‑complexity → in‑house model, medium → Cohere, high → GPT‑4. I added a cost‑aware back‑off that switched to the cheaper engine if latency exceeded 1 s or if the request budget was exhausted for the day. Integration used FastAPI with async calls and monitored via Grafana dashboards.

**Result:**  
After rollout, our average per‑request cost dropped from $0.12 to $0.04, cutting monthly spend to $9k—an 80% reduction. Latency stayed at 1.05 s on average. I learned that coupling lightweight ML classification with real‑time monitoring can turn a costly AI service into a lean, predictable operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
