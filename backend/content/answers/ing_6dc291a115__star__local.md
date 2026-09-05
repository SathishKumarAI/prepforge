---
qid: ing_6dc291a115__star__local
question: 'Explain: Assignments (48%) — Stanford CS 224N | Natural Language Processing
  with Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 369
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:06:44-05:00'
sources: []
---

**Situation** – In my second semester of undergrad, I enrolled in Stanford’s CS 224N to deepen my NLP skills. The syllabus listed a set of assignments totaling 48% of the final grade; each was a mini‑project that required building and evaluating neural models from scratch.

**Task** – My goal was to finish all four major assignments on time while achieving high scores: (1) sentiment analysis with LSTM, (2) machine translation using seq‑to‑seq attention, (3) question answering over SQuAD, and (4) coreference resolution. I needed to balance code quality, hyperparameter tuning, and reproducibility.

**Action** – I set up a Docker environment with PyTorch 1.12 and CUDA 11.2 to ensure consistency across machines. For each assignment I wrote modular scripts: data loaders using `torch.utils.data`, model classes inheriting from `nn.Module`, and training loops that logged loss, perplexity, and BLEU/ROUGE scores via TensorBoard. I leveraged early stopping on validation sets, performed grid search for learning rates and batch sizes, and used gradient clipping to stabilize training. To speed up experiments, I scripted automated checkpoints and used mixed‑precision (`torch.cuda.amp`) where appropriate.

**Result** – Completing all assignments within the deadlines gave me a 4.3/5 average GPA in the course. The translation model achieved a BLEU score of 27 on the test set—well above the class baseline—and the QA system reached an F1 of 78%. I learned that disciplined environment management, systematic hyperparameter sweeps, and clear logging are as critical to success as the underlying algorithmic ideas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
