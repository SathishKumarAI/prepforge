---
qid: ing_7fe984d8e0__star__local
question: What Is Fine-Tuning? — Fine-Tuning Explained for Noobs (How Pretrained Models
  Learn New Skills)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 322
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:24-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building an intent‑classification chatbot for a telecom client that needed to understand over 30 unique support intents, but we only had about 1,200 labeled utterances.

**Task** – My goal was to leverage a pretrained language model (BERT-base) and adapt it so the classifier would achieve at least 85 % accuracy on a held‑out test set while staying under a 2 second inference latency.

**Action** – I started by freezing all but the last transformer layer and added a lightweight classification head. Using Hugging Face’s Trainer API, I performed early stopping with a patience of 3 epochs and applied a learning rate schedule (1e-5 to 1e-6). To handle class imbalance I weighted the loss function inversely proportional to class frequency. I also experimented with adding a domain‑specific token (“@telecom”) to the tokenizer to help the model pick up on brand‑related cues.

**Result** – The fine‑tuned model reached 87 % accuracy and an F1 of 0.86, meeting the client’s requirement while keeping inference latency at 1.8 s per request. I learned that minimal architectural changes combined with smart data weighting can yield big gains without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
