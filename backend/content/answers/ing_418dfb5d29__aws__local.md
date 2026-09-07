---
qid: ing_418dfb5d29__aws__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 433
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I built a production chatbot for a global e‑commerce platform that had to generate natural responses in real time while keeping costs below $0.02 per inference. The model used GPT‑3 style transformers, but the default nucleus (top‑p) sampling produced repetitive, low‑quality replies at peak traffic (~15k QPS).  

**Action – Technical & System Design**  
I introduced **min‑p sampling**: instead of clipping tokens whose cumulative probability exceeds *p*, we first ensure that every token’s marginal probability is ≥ *min‑p* before the top‑p cut. This guarantees a minimum entropy, preventing the model from collapsing into high‑probability loops.  

To curb repetition I added **repetition and frequency penalties** (λ₁ for exact repeats, λ₂ for n‑gram overlap). The penalties are applied during beam search on AWS Inferentia inference endpoints; we expose them via an API gateway that injects penalty values per user session.  

I evaluated the new pipeline in a staging cluster: response diversity ↑ 34%, average perplexity ↓ 12%, and latency stayed < 120 ms (≤ 99th percentile). Cost per request dropped 18% because fewer tokens were needed to reach high‑confidence responses.  

**Result & Reflection**  
The updated sampling strategy reduced the churn rate from 9.7% to 5.4% in a month, directly improving NPS by 3 points. I documented the failure modes of standard top‑p (high repetition under load) and shared a post‑mortem with the team—learning that “bias for action” must be coupled with continuous monitoring.  

**Leadership Principles**  
- **Customer Obsession**: We measured user satisfaction via NPS.  
- **Dive Deep & Ownership**: I dissected sampling failures, quantified impact, and owned the end‑to‑end deployment on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
