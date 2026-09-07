---
qid: ing_f4bc139ea5__faang__local
question: 'Explain: Query Classification with TransformersTextRouter and TransformersZeroShotTextRouter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:03-05:00'
sources: []
---

**Clarify**  
We’re asked how a Transformer‑based model can route text queries—i.e., classify them into intents or topics—using two paradigms: *TextRouter* (fine‑tuned classification) and *ZeroShotTextRouter* (classical zero‑shot). Assume the input is a short user query, the output is a label from a fixed set of intent classes. The system must be fast, accurate, and maintainable.

**Approach**  
1. **Model choice:** Base on a pre‑trained transformer (e.g., BERT or RoBERTa).  
2. **TextRouter:** Fine‑tune the model on labeled query data; add a classification head with softmax over intent classes.  
3. **ZeroShotTextRouter:** Keep the encoder frozen, use prompt engineering to cast each intent as a textual description and compute similarity between the query embedding and each prompt (e.g., cosine or dot product). Pick the highest score.

**Depth**  
- *Fine‑tuning*: Train with cross‑entropy loss; early stopping on dev set. Complexity: \(O(N \cdot L)\) per epoch, where \(N\) is samples, \(L\) sequence length. Memory dominated by transformer weights (~hundreds of MB).  
- *Zero‑shot*: No training cost after pre‑training; inference complexity is linear in number of intents (\(K\)). We can cache intent embeddings for speed. Accuracy trade‑off: fine‑tuned usually outperforms zero‑shot, but zero‑shot scales better to unseen classes.

**Edge Cases**  
- Ambiguous or short queries → low confidence; fallback to a “fallback” intent.  
- Out‑of‑vocabulary words → subword tokenization mitigates this.  
- Rapidly changing intent set → zero‑shot adapts instantly, fine‑tuned needs retraining.

**Optimize & Communicate**  
- Use mixed‑precision (FP16) and distributed training to hit target throughput.  
- For zero‑shot, experiment with prompt templates (“What is the intent of this query: …?”).  
- Explain to stakeholders that *TextRouter* offers higher precision for known intents, while *ZeroShotTextRouter* provides flexibility for new or rare intents without retraining. This dual strategy balances performance and agility—exactly what FAANG teams value in production NLP pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
