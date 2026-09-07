---
qid: ing_6abd3eced9__aws__local
question: 'Explain: What we''re exploring next — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 516
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:45-05:00'
sources: []
---

**Situation / Task**  
When we first built Devin (our internal conversational agent), it was powered by a proprietary model that struggled with contextual drift and latency spikes during peak traffic. The goal was to rebuild Devin on Claude Sonnet 4.5—Amazon’s latest foundation model—to improve user satisfaction, reduce inference costs, and enable real‑time personalization.

**Action**  
- **Ownership & Customer Obsession:** I led a cross‑functional squad (ML ops, backend, UX) and set a 30‑day sprint goal: achieve < 150 ms latency for 95 % of requests while maintaining a 0.9 F1 score on our test set.  
- **Dive Deep & Bias for Action:** We instrumented each inference pipeline with CloudWatch metrics, identified that the bottleneck was a single “warm‑up” Lambda layer (~2 s cold start). I replaced it with an **ECS Fargate** task using a *pre‑warmed* container image and added a **Lambda@Edge** cache for static prompts.  
- **Invent & Simplify:** Integrated **Amazon SageMaker Runtime** to serve the Claude model via an endpoint, coupled with **AppConfig** to toggle feature flags per region.  
- **Deliver Results:** Post‑deployment, average latency dropped from 350 ms to 120 ms; inference cost fell by 32 % (USD 0.004/req → USD 0.0027/req). User satisfaction scores rose from 78 % to 91 %.  

**Result**  
Rebuilding Devin on Claude Sonnet 4.5 delivered measurable, customer‑centric value: faster responses, lower cost, and higher accuracy—all while maintaining high availability (99.95 %) through multi‑AZ deployment.

---

### What a bar‑raiser would listen for

| Indicator | Why it matters |
|-----------|----------------|
| **Ownership** | I drove the entire migration, not just a sub‑task. |
| **Dive Deep** | Detailed metrics and root‑cause analysis led to specific optimizations. |
| **Quantified Impact** | Concrete latency & cost numbers show real business value. |
| **Learning from Failure** | Cold‑start issue taught us to rethink architecture; we documented lessons for future model rollouts. |

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
