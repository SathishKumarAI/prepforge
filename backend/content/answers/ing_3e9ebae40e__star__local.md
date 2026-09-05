---
qid: ing_3e9ebae40e__star__local
question: 'Explain: Hallucination is a safety problem — Safety Security And Responsible
  Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 259
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:41-05:00'
sources: []
---

**Situation**  
During the rollout of our internal chatbot for customer support, we noticed that the model sometimes generated plausible but factually incorrect product details—customers were being told wrong pricing and availability.

**Task**  
I was tasked with reducing hallucinations so the bot could be safely deployed in a live environment without risking misinformation or revenue loss.

**Action**  
First, I logged every hallucination instance and categorized them by source (knowledge cutoff, prompt ambiguity). Then I fine‑tuned the model on a curated dataset of verified product FAQs and added a “confidence score” layer that flags low‑certainty outputs. I also implemented a post‑generation filter: if confidence < 0.7, the bot defers to a human agent. Finally, I set up A/B testing to compare the new pipeline against the baseline.

**Result**  
Within two weeks, hallucination incidents dropped from 18% of interactions to 3%. Customer satisfaction scores rose by 12 points, and we avoided an estimated $45k in potential revenue loss. I learned that combining data hygiene, confidence metrics, and human oversight is essential for responsible AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
