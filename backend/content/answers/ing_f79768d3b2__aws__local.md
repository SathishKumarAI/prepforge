---
qid: ing_f79768d3b2__aws__local
question: 'Explain: Taking Bold Steps to Keep Teen Users Safe on Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:27-05:00'
sources: []
---

**Situation / Task**  
While leading the safety team for Character.AI’s teen‑segment, we discovered that 18 % of user interactions contained disallowed content (e.g., sexual or extremist language). Our goal was to reduce this by 90 % in six months without compromising user engagement.

**Action**  
1. **Ownership & Bias for Action** – I formed a cross‑functional squad (product, data science, infra) and set a clear OKR: “Reduce disallowed content to <2 % while maintaining ≥95 % session length.”  
2. **Dive Deep** – Built a multi‑layered moderation pipeline using AWS Lambda + Amazon SageMaker for real‑time inference, coupled with a custom BERT model fine‑tuned on teen‑language corpora.  
3. **Invent & Simplify** – Introduced an “AI‑first” flagging system that routes suspicious messages to human reviewers only when the model confidence is <70 %. This cut review queue size by 60 %.  
4. **Customer Obsession** – Ran A/B tests with 10 k users, collecting feedback on perceived safety and latency. Adjusted thresholds until user‑reported “safe” score hit 4.8/5.

**Result**  
- Disallowed content dropped from 18 % to 1.3 % (≈92 % reduction).  
- Session length increased by 7 %, showing no negative impact on engagement.  
- Cost of moderation stayed under $0.02 per message, keeping the overall spend <5 % of monthly revenue.

**Bar‑raiser takeaways**  
*Clear ownership, deep technical dive, measurable impact, and iterative learning from early A/B failures.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
