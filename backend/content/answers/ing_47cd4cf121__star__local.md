---
qid: ing_47cd4cf121__star__local
question: 'Explain: Unigram (SentencePiece) — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 409
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:07-05:00'
sources: []
---

**Situation** – While leading the text‑to‑speech pipeline for our multilingual chatbot, we noticed a spike in OOV rates (≈12 %) on low‑resource languages, which hurt downstream NER accuracy.

**Task** – I had to design a tokenization strategy that reduced OOVs without inflating model size or inference latency, and integrate it into the existing PyTorch training loop.

**Action** – I chose SentencePiece’s unigram language model. First, I collected 3 M sentences per target language and trained a unigram model with `--model_type=unigram --input_sentence_size=5000000`. After experimenting with vocab sizes (5k, 8k, 12k), I settled on 8k because it cut OOVs to <4 % while keeping the average token length at 1.3. I wrapped the tokenizer in a `torch.nn.Module` so it could be batched and cached. During training, I added a custom collate function that applied byte‑pair merges only when the unigram probability fell below a threshold, reducing padding by ~7 %. For inference, I pre‑compiled the model into TorchScript to keep latency under 15 ms per utterance.

**Result** – OOVs dropped from 12 % to 3.8 %, improving NER F1 by 4.2 points (from 78.5 % to 82.7 %). Model size increased by only 0.6 MB, and inference latency stayed within SLA. I learned that a carefully tuned unigram SentencePiece model can balance coverage, efficiency, and deployment constraints better than sub‑word BPE for multilingual systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
