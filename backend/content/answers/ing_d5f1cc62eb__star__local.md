---
qid: ing_d5f1cc62eb__star__local
question: 'Q: Why use Continued Pretraining instead of just putting domain data in
  the SFT set?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 293
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:30-05:00'
sources: []
---

**Situation:**  
When we launched our medical chatbot, the baseline model performed well on general queries but struggled with rare specialist terminology, leading to a 23 % error rate on clinical FAQ responses during pilot testing.

**Task:**  
I needed to improve domain fluency without overfitting and while keeping inference latency low, so that clinicians could rely on instant answers in their workflow.

**Action:**  
Instead of dumping all 200k annotated medical dialogues into the SFT set, I ran a continued‑pretraining phase. Using our existing transformer architecture, I fine‑tuned the model for 3 epochs on an unlabeled corpus of 5 M de‑identified EMR notes, employing masked language modeling with domain‑specific vocab tokens. This exposed the network to real clinical syntax and jargon in a low‑resource manner. Afterward, I performed SFT on the curated 200k dialogues, focusing on few‑shot prompting and calibration loss to prevent catastrophic forgetting.

**Result:**  
The combined approach cut the error rate to 8 % (a 65 % reduction) while maintaining inference speed at 120 ms per request. I learned that continued pretraining seeds domain knowledge efficiently, allowing subsequent SFT to refine user intent without overwhelming the model with noisy labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
