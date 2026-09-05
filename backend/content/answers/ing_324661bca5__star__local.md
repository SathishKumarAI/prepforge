---
qid: ing_324661bca5__star__local
question: What is the difference between input guardrails and output guardrails, and
  why do you need both?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 323
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:08-05:00'
sources: []
---

**Situation** – While leading a prototype for an internal chatbot that triaged support tickets, we noticed the model was occasionally suggesting solutions that violated company policy or generated unverified claims.

**Task** – I had to design safeguards so the bot never recommends disallowed actions (input guardrails) and also never produces content that could be misleading or harmful (output guardrails), all while keeping latency under 200 ms for real‑time assistance.

**Action** – For input guardrails, I built a pre‑processing filter using spaCy to detect prohibited keywords (“refund”, “credit card”) and flagged any user query containing them. If flagged, the request was routed to a human queue instead of the model. For output guardrails, I wrapped the LLM with a post‑generation validator: after the model produced text, an NLI module compared it against a knowledge base of verified FAQs; if semantic similarity fell below 0.8, the response was discarded and replaced with a safe fallback (“I’m not sure—please contact support”). I also added a token budget limiter to prevent overly verbose answers.

**Result** – Within two weeks we reduced policy violations by 97% and improved user satisfaction scores from 3.6 /5 to 4.8 /5. The dual‑layer approach taught me that input guardrails stop bad requests before they hit the model, while output guardrails correct or censor any slip‑throughs, ensuring both compliance and trustworthiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
