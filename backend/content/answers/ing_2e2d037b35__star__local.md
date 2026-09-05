---
qid: ing_2e2d037b35__star__local
question: 'Explain: Clarifying Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:51-05:00'
sources: []
---

**Situation**  
I was leading a cross‑functional team to build an NLP model that auto‑tags customer support tickets for routing. The product owner said the goal was “improve triage speed,” but there were no concrete metrics or data definitions, and the engineering squad worried about latency.

**Task**  
Define clear, measurable requirements: target accuracy, acceptable inference time, data labeling standards, and integration points with the existing ticketing API.

**Action**  
I organized a series of workshops where I mapped out user journeys and pulled in stakeholders from product, dev ops, and compliance. We used a lightweight MoSCoW prioritization matrix to separate must‑haves (99% accuracy on top 10 intents) from nice‑to-haves (support for new languages). I drafted a requirements spec that included data volume assumptions, labeling guidelines, a latency SLA of <200 ms per request, and an A/B test plan. I then held a “requirements review” meeting to get sign‑off and created a shared Confluence page with traceability links from each metric back to the user stories.

**Result**  
The clarified specs cut scope creep by 35%, reduced engineering effort by 22 hours in sprint planning, and allowed us to hit our 99.1% intent accuracy target while staying under the latency SLA. I learned that investing time upfront in structured requirement workshops pays off faster iterations and clearer stakeholder alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
