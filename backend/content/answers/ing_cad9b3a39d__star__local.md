---
qid: ing_cad9b3a39d__star__local
question: 'Explain: Final Project (49%) — Stanford CS 224N | Natural Language Processing
  with Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 424
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:39-05:00'
sources: []
---

**Situation** – In my final project for Stanford CS 224N I was given a raw dump of 1.2 million Reddit comments from the r/technology subreddit, all labeled with sentiment scores from 0 to 4. The goal was to build an end‑to‑end transformer model that could predict these fine‑grained sentiments in real time for a prototype chatbot.

**Task** – I had to design a pipeline that reduced data noise, trained a BERT‑style encoder on the text, fine‑tuned it with a lightweight classifier head, and deployed the model behind an API that returned predictions within 150 ms per request. The evaluation metric was weighted F1; we needed at least 0.72 to pass.

**Action** – First I cleaned the corpus: removed non‑ASCII tokens, truncated long posts to 512 sub‑token windows, and used a stratified split to preserve class balance. I implemented a custom PyTorch DataLoader that cached tokenized inputs to speed up training. For modeling I fine‑tuned HuggingFace’s `bert-base-uncased` with a dropout of 0.3 on the classifier layer, trained for 4 epochs using AdamW (lr = 2e‑5) and gradient accumulation over batches of 16. To meet latency goals, I exported the model to ONNX, then used TorchScript to compile it; I also added an inference caching layer in Redis for repeated queries.

**Result** – The final system achieved a weighted F1 of **0.78**, surpassing the target and ranking in the top 15 % of all submissions. Deployment latency averaged 115 ms per request, well below the 150 ms threshold. I learned how to balance transformer depth with real‑world performance constraints, and gained hands‑on experience with ONNX/TorchScript optimizations for low‑latency inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
