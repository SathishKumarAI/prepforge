---
qid: ing_a8e6c9a4ce__star__local
question: 'Explain: Now the computer is asking me to — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:39-05:00'
sources: []
---

**Situation**  
During my senior thesis, the university’s research lab was building a sentiment‑analysis model for student feedback on campus services. Our baseline accuracy hovered around 68 % and the professor asked us to push it above 80 % before we could publish.

**Task**  
I needed to redesign the preprocessing pipeline, select better features, and tune hyperparameters so that the final model met the target accuracy while staying under a 30‑minute inference time on a single GPU.

**Action**  
First I swapped the simple bag‑of‑words vectorizer for a pretrained BERT tokenizer, then fine‑tuned a DistilBERT base model using Hugging Face’s Trainer API. I implemented early stopping and mixed‑precision training to keep GPU usage low. For feature engineering I added domain‑specific stop‑word removal and a custom lexicon of campus‑related terms. Finally, I deployed the model with ONNX Runtime on an AWS Inferentia instance, profiling latency with `perf`.

**Result**  
Accuracy jumped from 68 % to 84 %, meeting the professor’s goal. Inference time dropped to 0.12 s per request, well below the 30‑second limit. I learned how transformer fine‑tuning can dramatically outperform traditional NLP pipelines and that profiling early prevents costly production bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
