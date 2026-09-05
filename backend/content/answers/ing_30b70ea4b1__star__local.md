---
qid: ing_30b70ea4b1__star__local
question: 'Explain: The Interview Question — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 319
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:55-05:00'
sources: []
---

**Situation:**  
At my previous role I was part of a startup building a voice‑activated triage assistant for urgent care clinics. One week before launch our pilot sites reported that the AI’s symptom extraction accuracy dropped from 92 % to 78 % when clinicians tried it in real patient encounters.

**Task:**  
I had to identify why the model performed poorly under live conditions and bring its precision back above 90 % without delaying deployment or increasing costs.

**Action:**  
First, I ran a data‑drift audit: compared clinic audio samples to our training set and discovered that accents in the pilot regions were underrepresented. I then built an active‑learning loop—clinicians flagged misclassifications on the fly, we annotated them, and fed them back into the model nightly. Technically, I fine‑tuned a pre‑trained wav2vec 2.0 encoder with a lightweight CRF decoder for intent classification, and added a confidence‑thresholding layer that routed low‑confidence cases to human review. Parallelly, I compressed the model with TensorRT to keep inference latency under 300 ms on edge devices.

**Result:**  
Within three days of implementing the loop, accuracy rebounded to 91 %, and live pilot feedback improved from “often wrong” to “usually correct.” We avoided a costly rewrite, kept the launch schedule, and learned that continuous data augmentation is critical for voice AI in diverse clinical settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
