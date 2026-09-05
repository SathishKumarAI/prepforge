---
qid: ing_e9283b914d__eli5__local
question: 'Explain: Q111: Claude Fable 5 routes sensitive queries to Claude Opus 4.8
  via classifier-gated fallback. Critique this as a system design pattern and describe
  where you would apply tier routing in your own stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 274
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:25-05:00'
sources: []
---

Imagine you’re at a busy restaurant with two chefs: Chef Claude 5 (fast, good for most dishes) and Chef Claude Opus 4.8 (slow but can handle spicy, tricky orders). The kitchen uses a “taste‑test” station (the classifier) to sniff each order. If the taste test says it’s ordinary, the order goes straight to Chef 5. If the test flags something special—like an allergy or a secret sauce—the order is sent to Chef Opus for careful handling.

**Critique:**  
*Pros:* Keeps most orders quick; only the few that need extra safety go to the slower chef.  
*Cons:* The taste‑test can misjudge, sending a simple dish to the slow chef (wasting time) or missing a problem and letting an unsafe order slip through. It also adds another point of failure.

**Where I’d use tier routing:** In my own stack I’d route normal read requests to a fast cache layer, while writes or complex analytics go to a slower, more reliable database. The classifier would be a lightweight health‑check that decides which tier gets the request. This keeps latency low for most users but preserves correctness for sensitive operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
