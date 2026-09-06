---
qid: ing_d7f20cdb8b__fp__local
question: 'Explain: 2.1 - Overview of BERT''s Pre-training Objectives'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 531
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:34-05:00'
sources: []
---

**BERT’s pre‑training objectives arise from two core linguistic problems**

1. **Bidirectional contextualization** – Classical language models predict a token only from its left context (unidirectional) or right context, which limits the ability to capture full sentence semantics.  
   *Solution:* **Masked Language Modeling (MLM)**. Randomly mask ~15 % of tokens and train the model to recover them using *both* sides of the sentence. Formally, minimize  
   \[
   L_{\text{MLM}} = -\sum_{i\in M}\log P_\theta(x_i|x_{\setminus i}),
   \]
   where \(M\) is the set of masked positions and \(P_\theta\) is the model’s softmax. This turns BERT into a denoising auto‑encoder that learns to fill in missing information, yielding representations that encode global sentence meaning.

2. **Discourse coherence** – Understanding how sentences relate (topic continuity, argument structure) is essential for downstream tasks like question answering or natural language inference.  
   *Solution:* **Next Sentence Prediction (NSP)**. Present pairs of sentences \((S_1,S_2)\); 50 % are true consecutive sentences from the corpus, 50 % are random. Train a binary classifier to predict whether \(S_2\) follows \(S_1\):
   \[
   L_{\text{NSP}} = -\mathbb{E}_{(S_1,S_2)}\big[\log P_\theta(\text{is‑next}|S_1,S_2)\big].
   \]
   This forces the network to encode inter‑sentence relationships.

**Non‑obvious insight:**  
MLM is not merely a trick for bidirectionality; it implicitly implements *contrastive learning* by forcing the model to distinguish correct tokens from many plausible alternatives, thereby sharpening token embeddings. NSP further enforces that these sharpened embeddings respect higher‑level discourse structure. Together they create a representation space where both fine‑grained lexical semantics and coarse‑grained narrative flow coexist, enabling BERT to transfer effectively across diverse NLP tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
