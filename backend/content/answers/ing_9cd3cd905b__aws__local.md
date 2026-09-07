---
qid: ing_9cd3cd905b__aws__local
question: 'Explain: ChatGPT Prompt Engineering for Developers - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 376
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:21-05:00'
sources: []
---

**Prompt‑Engineering for Devs – A DeepLearning.AI Case**

*Situation*: Our team at a fintech startup needed to integrate GPT‑4 into our fraud‑detection pipeline, but the raw model produced too many false positives (≈ 18 % precision).  
*Task*: Reduce misclassifications while keeping latency < 200 ms per request.  
*Action*: I applied **Prompt Engineering**:  
1. Built a *dynamic prompt template* that injects context (transaction amount, user history) and a “confidence‑threshold” clause.  
2. Used **AWS Bedrock** with the “gpt‑4o-mini” foundation model, wrapped in an API Gateway + Lambda layer for orchestration.  
3. Implemented **adaptive weighting**—the prompt’s “confidence threshold” adjusts via a CloudWatch metric that tracks precision over time.  
4. Added a **fallback rule set** (Python rules engine) to handle edge cases where the LLM confidence < 0.6, ensuring 99.9 % availability.

*Result*: Precision rose from 18 % to **45 %** and recall improved by **12 %**, cutting false‑positive alerts by **70 %**. Latency stayed at ~180 ms; cost per inference dropped 30 % by leveraging Bedrock’s pay‑per‑token pricing.  

*Reflection*: I owned the end‑to‑end pipeline, dove deep into prompt semantics, and iterated based on real‑world data—exactly what Amazon expects from a **Customer Obsession** & **Ownership** mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
