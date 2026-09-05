---
qid: ing_f6be406db0__star__local
question: How do you decide between building in-house, buying a vendor product, and
  calling a model API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 368
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:56-05:00'
sources: []
---

**Situation** – In late 2023 I led the data‑science team at a fintech startup that needed real‑time fraud detection for card transactions. Our existing rule engine was lagging; we had to get predictions in under 150 ms while handling ~50k events per second.

**Task** – Decide whether to build a custom model, buy an enterprise vendor, or call a third‑party API so the system could scale, stay secure, and meet latency requirements without blowing the budget.

**Action** – I ran a rapid proof‑of‑concept:  
1. Benchmarked three options on identical hardware (AWS EC2 m5.large).  
2. Built an in‑house XGBoost model; it hit 92 % precision but took ~200 ms per inference after batch‑tuning.  
3. Evaluated a vendor’s on‑prem solution – high accuracy (94 %) but required a dedicated GPU cluster and $120k/year license.  
4. Tested an API from OpenAI’s GPT‑4o fine‑tuned for fraud; latency 80 ms, precision 90 %, cost ~$0.02 per inference.  
I presented the trade‑offs: in‑house gave control but lagged; vendor was expensive and inflexible; API met SLA and kept us lean.

**Result** – We adopted the GPT‑4o API, reduced fraud loss by 18 % within three months, cut infra spend by $45k/year, and freed our team to focus on product features. I learned that a data‑driven benchmark + cost‑impact analysis is essential before committing to any solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
