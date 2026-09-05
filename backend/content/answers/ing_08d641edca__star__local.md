---
qid: ing_08d641edca__star__local
question: 'Explain: Human-in-the-Loop Without Killing Throughput'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:36-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were launching an automated credit‑risk model that processed ~5 M loan applications per day. The compliance team flagged a spike in false positives during a regulatory audit, so we had to integrate human review without breaking the real‑time pipeline.

**Task:**  
I needed to design a Human‑in‑the‑Loop (HITL) workflow that caught high‑risk edge cases while keeping our latency under 200 ms per transaction and preserving throughput.

**Action:**  
First, I added a lightweight uncertainty score from the model’s softmax output. Transactions with a confidence below 0.7 were routed to a micro‑service queue (RabbitMQ) that fed a small pool of domain experts via a web dashboard built in React/Node. The experts could approve or flag the decision within 5 s, after which a feedback loop retrained the model every night using these corrections. To avoid bottlenecks I implemented rate limiting and prioritized only the top‑10% uncertain cases for human review, keeping the rest fully automated.

**Result:**  
Throughput dropped by less than 1%, while false‑positive rates fell from 8 % to 2.3 %. The system met all regulatory requirements, and we learned that a selective uncertainty threshold coupled with nightly retraining can keep human oversight effective without killing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
