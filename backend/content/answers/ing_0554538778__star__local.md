---
qid: ing_0554538778__star__local
question: 'Explain: 2.2 - Masked Language Modelling (MLM) — A Complete Guide to BERT
  with Code | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 378
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:28-05:00'
sources: []
---

**Situation:**  
While working on an internal NLP product at my previous company, the sentiment analysis module was drifting—accuracy dropped from 87 % to 73 % after a data shift in user reviews. I was tasked with quickly improving the model’s contextual understanding without retraining from scratch.

**Task:**  
Re‑train a language model that could better capture context in noisy product descriptions and then fine‑tune it for sentiment classification, all within two weeks.

**Action:**  
I chose BERT as the backbone because of its Masked Language Modeling (MLM) pretraining. I first downloaded the `bert-base-uncased` checkpoint from Hugging Face and wrapped it with PyTorch’s `BertForMaskedLM`. Using a custom tokenizer, I created a masked dataset: randomly masking 15 % of tokens in each sentence, training the model to predict them via cross‑entropy loss. I ran this MLM pretraining on our GPU cluster for 4 epochs (≈30 k steps), monitoring perplexity which dropped from 42 to 18. Once pretrained, I swapped the head with `BertForSequenceClassification`, froze all but the last transformer block, and fine‑tuned on our labeled sentiment data for 3 epochs. I used a learning rate scheduler (`CosineAnnealingLR`) and early stopping based on validation loss.

**Result:**  
The new BERT model raised sentiment accuracy from 73 % to 91 %, a 18 percentage point lift, and reduced false positives by 27 %. I learned that MLM pretraining can be accelerated with masked data augmentation and that freezing earlier layers preserves general language knowledge while saving training time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
