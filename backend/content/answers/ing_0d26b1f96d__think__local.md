---
qid: ing_0d26b1f96d__think__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 484
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:35:34-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- We’re fine‑tuning a pre‑trained model (e.g., GPT‑2) on domain data heavy in jargon.  
- Someone proposes adding new tokens to the tokenizer’s vocabulary.  
- Assume we’ll keep the same architecture, only extend the vocab.

**2️⃣ Mental model: tokenizer ↔ embedding matrix ↔ training dynamics**  
The tokenizer splits text into token IDs; each ID maps to an embedding vector. Adding a token means allocating a new row in the embedding matrix and adjusting the transformer’s attention masks accordingly. It also changes the probability distribution over the output vocabulary.

**3️⃣ Step‑by‑step reasoning**

| Step | What to do |
|------|------------|
| a | Identify truly *new* tokens (not already subworded). |
| b | Add them to the tokenizer, re‑tokenize the training set. |
| c | Extend the embedding matrix: initialize new rows (random or averaged) and keep old ones frozen/updated as desired. |
| d | Update the loss function and logits layer to output probabilities over the enlarged vocab. |
| e | Train with a learning rate schedule that respects the new parameters (e.g., lower LR for newly added embeddings). |

**4️⃣ Common traps**

- **Over‑tokenization:** adding “unseen” words when the base tokenizer already splits them into subwords; you’ll just inflate vocab unnecessarily.
- **Vocabulary drift:** re‑training from scratch with a larger vocab can cause catastrophic forgetting of prior tokens.
- **Memory blow‑up:** each new token adds 1 × hidden_dim parameters; too many new tokens may exceed GPU limits.
- **Evaluation mismatch:** downstream pipelines expecting the original tokenizer will break if they don’t know the new IDs.

**5️⃣ Sanity‑check & communication**

- Verify that the new tokens appear in the training data’s token frequency histogram.  
- Confirm that the model’s perplexity on a held‑out validation set doesn’t worsen after adding tokens.  
- Explain to stakeholders: “We’re expanding the tokenizer to capture domain jargon, which improves representation but requires re‑initializing embeddings and careful learning‑rate tuning to avoid destabilising existing knowledge.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
