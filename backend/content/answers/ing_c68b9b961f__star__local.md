---
qid: ing_c68b9b961f__star__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 350
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:01-05:00'
sources: []
---

**Situation**  
At my last role, we were deploying a language model for legal document summarization. The baseline GPT‑4 model performed well on general text but struggled with domain‑specific jargon and statutory references, leading to a 12 % drop in ROUGE scores compared to our internal benchmark.

**Task**  
I had to improve the model’s understanding of legal terminology without sacrificing its general language capabilities, and determine when we should inject domain knowledge versus rely on pure fine‑tuning.

**Action**  
First, I performed *continued pretraining* (CPT) on a 500 GB corpus of court opinions and law firm briefs. This kept the model’s broad linguistic priors while aligning its internal representations with legal patterns. Next, I applied *Supervised Fine‑Tuning* (SFT) on a curated set of 3,000 annotated case summaries, using prompt engineering to guide the decoder toward concise, citation‑aware outputs. Finally, I integrated a lightweight knowledge graph module that surfaced relevant statutes during inference, but only activated it for questions tagged with legal intent—thus avoiding unnecessary overhead.

**Result**  
The combined CPT + SFT pipeline lifted ROUGE‑L from 0.38 to 0.51 (a 34 % relative improvement) and reduced error rates on key phrase extraction by 27 %. I learned that CPT is best for broad domain adaptation, while SFT fine‑grains specific task behaviors; domain knowledge injection should be selective, triggered only when the input signals a need for specialized context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
