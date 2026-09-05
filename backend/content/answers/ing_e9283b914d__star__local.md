---
qid: ing_e9283b914d__star__local
question: 'Explain: Q111: Claude Fable 5 routes sensitive queries to Claude Opus 4.8
  via classifier-gated fallback. Critique this as a system design pattern and describe
  where you would apply tier routing in your own stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 398
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:30-05:00'
sources: []
---

**Situation:**  
In a client‑facing chatbot for a financial services firm, we noticed that some user queries contained sensitive personal data (e.g., account numbers). The product team wanted to ensure these were handled by the most privacy‑compliant model (Claude Opus 4.8) while still using the cheaper Claude Fable 5 for general chit‑chat.

**Task:**  
Design a routing layer that automatically sends sensitive requests to Opus 4.8, but falls back to Fable 5 when the classifier is uncertain, keeping latency low and cost manageable.

**Action:**  
I built a lightweight text‑classification microservice using a fine‑tuned BERT model that tags queries as “sensitive” or “non‑sensitive.” The API gateway routes all traffic first through this classifier. If confidence > 0.9 for sensitivity, the request goes straight to Opus 4.8; otherwise it goes to Fable 5. For borderline cases (confidence 0.7–0.9), I introduced a tiered fallback: first try Fable 5 and, if the response fails a post‑hoc privacy check (no PII leakage), keep it; else reroute to Opus 4.8. Metrics were logged per route to monitor latency and cost.

**Result:**  
The system reduced average API costs by 18% while maintaining a 99.7% compliance rate on sensitive data. Latency stayed below 350 ms for 95% of requests. I learned that classifier‑gated tier routing can be fine‑tuned with confidence thresholds to balance cost, performance, and privacy—an approach I now apply in all downstream NLP pipelines at my current company.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
