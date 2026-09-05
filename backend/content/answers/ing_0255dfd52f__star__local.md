---
qid: ing_0255dfd52f__star__local
question: 'Explain: Co-Reasoning (Shared Scratchpads) — Human In The Loop Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 388
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:01-05:00'
sources: []
---

**Situation**  
In mid‑2023 I was leading a product team at a fintech startup that had just launched an AI‑powered loan‑approval assistant. Within two weeks of release the system’s error rate spiked to 12 % on real‑time credit checks, far above our SLA of 4 %. The data showed that the model was over‑relying on a single feature set and missing contextual flags like recent employment changes.

**Task**  
I needed to reduce the false‑positive rate by at least 50 % while keeping the response time under 1.2 seconds, all without pulling the assistant offline for retraining.

**Action**  
I introduced a co‑reasoning workflow using shared scratchpads in our internal chat tool. Every time the model flagged an edge case, it would generate a “scratchpad” containing its feature vector and confidence score, then post it to a dedicated Slack channel. A human reviewer (a senior risk analyst) could instantly annotate the scratchpad with missing context or correct labels. Those annotations were fed back into a lightweight online learning loop that updated the model’s decision thresholds in real time. We also built a simple UI overlay so analysts could see the model’s rationale and tweak it on the fly, ensuring transparency.

**Result**  
Within three weeks the false‑positive rate dropped to 5 %, meeting our SLA. The average response latency increased by only 0.2 seconds due to the lightweight feedback loop. I learned that human‑in‑the‑loop co‑reasoning can dramatically improve model reliability without costly retraining, and that a shared scratchpad is an elegant bridge between AI inference and expert judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
