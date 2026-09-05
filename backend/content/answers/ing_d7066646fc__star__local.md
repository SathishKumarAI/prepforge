---
qid: ing_d7066646fc__star__local
question: 'Explain: Large, expensive models are back - introducing “Smart Friend”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 341
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:44-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a customer‑support chatbot. The original prototype used a small transformer trained on our FAQ data, but it struggled with out‑of‑scope queries and often returned irrelevant or generic responses. Our SLA required 90 % accurate answers within 2 seconds.

**Task**  
I was tasked to boost the bot’s accuracy while keeping latency acceptable for live chat. The challenge was to leverage a large, expensive model without blowing up inference costs or response times.

**Action**  
I introduced a “Smart Friend” architecture: we kept the lightweight local model as the first line of defense and routed only uncertain or high‑confidence low‑quality queries to a remote GPT‑4 style engine. To decide when to forward, I built a confidence estimator based on the local model’s softmax entropy and added a short‑term rolling window of user feedback scores. We used gRPC with TLS for secure, low‑latency calls, and cached the remote responses in Redis to reduce repeat hits. Costs were mitigated by batching requests during off‑peak hours and by limiting the maximum token usage per query.

**Result**  
Accuracy jumped from 72 % to 92 % on our test set, and live A/B tests showed a 35 % reduction in ticket escalation. Latency stayed below 1.8 seconds for 95 % of requests. I learned that hybrid inference can combine the strengths of large models with the efficiency of small ones, and that careful routing logic is key to keeping both cost and speed under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
