---
qid: ing_aa321cd94c__star__local
question: 'Explain: Week 4 - Design, safety, polish — Study Plan'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:54-05:00'
sources: []
---

**Situation:**  
During a three‑month AI research sprint at my previous company, we were building an image‑captioning model for a client that required both high accuracy and regulatory compliance. By the end of week 3, our validation loss had plateaued, but the model’s output sometimes generated biased or unsafe language.

**Task:**  
In week 4 I was tasked with refining the architecture, tightening safety filters, and preparing a polished demo for the stakeholder review scheduled in two days.

**Action:**  
I first re‑architected the decoder by swapping the vanilla Transformer into a GPT‑style causal head to reduce over‑generation. Next, I integrated a dual‑stage safety pipeline: (1) a lightweight BERT classifier that flags potentially offensive captions, and (2) a rule‑based post‑processor that replaces flagged tokens with neutral alternatives. I tuned hyperparameters using Optuna, focusing on the trade‑off between BLEU score and filter precision. Finally, I packaged the model in a Docker container, added CI/CD hooks for automatic unit tests, and generated a 5‑minute demo video with annotated metrics.

**Result:**  
The updated model achieved a 3.2 % lift in CIDEr while maintaining a 92 % safety compliance rate. The stakeholder presentation was well received; we secured an additional $200K to extend the project into production. I learned that iterative safety layers and rapid prototyping can coexist with performance goals, and that transparent documentation is key for stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
