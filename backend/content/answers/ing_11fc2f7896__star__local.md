---
qid: ing_11fc2f7896__star__local
question: 'Explain: Be helpful, honest, and harmless — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 297
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:31-05:00'
sources: []
---

**Situation:** In a recent project building a customer‑support chatbot for a fintech client, the initial model kept providing overly detailed explanations that risked revealing sensitive financial data.

**Task:** I was tasked with redesigning the response generation pipeline so the bot stayed helpful, remained truthful to the facts it had been trained on, and avoided disclosing confidential information.

**Action:** I introduced a three‑stage filter: first, a *helpfulness* module that scored candidate responses against user intent using a lightweight BERT fine‑tuned on support logs; second, an *honesty* gate that cross‑checked facts with a knowledge base via cosine similarity and flagged any statements with low confidence for human review; third, a *harmlessness* checker that scanned outputs for any mention of personal identifiers or proprietary data using regex patterns and a custom rule set. I wrapped these in a lightweight microservice orchestrated by FastAPI, monitoring latency to keep it under 200 ms.

**Result:** The bot’s precision improved from 72% to 93%, while the rate of sensitive‑data leaks dropped to zero. User satisfaction scores rose by 18 points on our NPS survey. I learned that layering lightweight, interpretable checks can effectively operationalize Anthropic’s principles without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
