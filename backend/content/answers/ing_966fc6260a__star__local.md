---
qid: ing_966fc6260a__star__local
question: 'Explain: Saving — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 377
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:39-05:00'
sources: []
---

**Situation:**  
During my senior capstone I built a conversational AI for a local charity that needed to generate personalized thank‑you letters in real time. The deployment environment was a lightweight Docker container on a Raspberry Pi, so model size and load times were critical.

**Task:**  
I had to train a transformer (distilGPT‑2) on 12 k letter examples, then compress it enough to fit under 30 MB while keeping BLEU scores above 0.45, and finally ship the model into the Pi’s container without manual re‑training steps.

**Action:**  
First I fine‑tuned distilGPT‑2 using Hugging Face’s `Trainer` with gradient accumulation to stay within GPU memory limits. After training, I applied two saving strategies:  
1) **Model quantization** – used `torch.quantization.quantize_dynamic` to convert weights to int8, cutting size by ~60%.  
2) **Checkpoint pruning** – saved only the final state dict and tokenizer via `model.save_pretrained()` and `tokenizer.save_pretrained()`, then scripted the model with `torch.jit.script` for faster inference. I wrapped the script in a FastAPI endpoint and built a Docker image that pulls the pre‑saved files from an S3 bucket during build.

**Result:**  
The final deployment file was 27 MB, loaded under 0.8 s on the Pi, and generated letters with a BLEU score of 0.48. The charity saw a 30% reduction in manual thank‑you processing time. I learned how Hugging Face’s lightweight APIs enable production‑ready ML even on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
