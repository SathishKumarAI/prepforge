---
qid: ing_df3b851747__star__local
question: What is the "alignment tax"? How does preference tuning cause over-refusal,
  and how do you manage it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 362
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:04-05:00'
sources: []
---

**Situation:**  
When I joined a startup focused on building a medical triage chatbot, the product team noticed that after we fine‑tuned the model with user preference data, the bot started refusing almost every question about drug interactions—over 80 % of queries ended in a refusal.

**Task:**  
My goal was to reduce this “alignment tax” (the cost of over‑refusal) while keeping safety high, so that at least 70 % of legitimate medical questions were answered and the user satisfaction score stayed above 4.2/5.

**Action:**  
I first quantified the refusal rate by running a 10,000‑question audit, then introduced a two‑step preference tuning pipeline: (1) a lightweight “relevance” reward model to keep content useful, and (2) a calibrated “safety” penalty that was softened using a temperature curve. I also added a post‑generation safety filter that only blocked content if the predicted risk exceeded 0.7, lowering false positives by 35 %. Finally, I deployed a feedback loop where flagged refusals were manually reviewed and used to retrain the reward model.

**Result:**  
The refusal rate dropped from 80 % to 25 %, answering 75 % of medical queries without compromising safety. User satisfaction rose to 4.4/5, and we reduced support tickets by 40 %. I learned that balancing relevance and safety rewards—and calibrating thresholds—is key to mitigating the alignment tax in real‑world AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
