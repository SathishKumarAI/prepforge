---
qid: ing_12f4983394__aws__local
question: 'Explain: What Distinguishes Strong Candidates — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 462
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a whiteboard session the *strong* candidates are those who show **Ownership + Dive Deep** right from the start.

| What to look for | Why it matters |
|------------------|----------------|
| **Clarify assumptions first** – they ask “What is the input size? What latency do we need?” | Shows ownership of the problem and that they’re not guessing. |
| **Sketch a layered architecture** – e.g., *frontend → API Gateway → Lambda → DynamoDB + S3*, with fallback to Fargate for heavy ML inference | Demonstrates depth: they know which AWS services fit each layer, why (scalability, cost, availability). |
| **Quantify trade‑offs** – “If we use SageMaker Endpoint we pay $0.10 per inference; if we batch on EC2 we save 30 % but add 5 s latency” | Highlights bias for action and data‑driven decision making. |
| **Use metrics to validate choices** – e.g., “With 1M requests/day our design keeps cost < $50k/month and latency < 200 ms” | Shows Deliver Results: they tie the architecture back to business impact. |
| **Walk through failure scenarios** – e.g., “If Lambda hits concurrency limits we’ll route to Fargate; if DynamoDB throttles we enable auto‑scaling.” | Reflects learning from failure and ownership of resilience. |

A bar‑raiser will listen for:

1. **Ownership** – candidate takes full responsibility for the design, not just sketching a “nice” diagram.
2. **Dive Deep** – they dig into service limits, cost models, and scaling curves rather than glossing over details.
3. **Quantified Impact** – every trade‑off is backed by numbers (cost per inference, latency, capacity).
4. **Learning from Failure** – they anticipate edge cases and show how the system self‑heals.

In short, strong candidates turn a whiteboard exercise into a *complete, data‑driven solution* that balances performance, cost, and reliability while clearly owning every decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
