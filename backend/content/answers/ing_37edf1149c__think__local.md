---
qid: ing_37edf1149c__think__local
question: You come from classical ML. What transfers directly to LLM application work,
  and what did you have to relearn?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 460
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:37:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Assume “classical ML” means supervised learning on tabular or small‑scale image/text data.  
   - Define “transfers directly”: concepts that stay valid (e.g., loss functions, regularization).  
   - Define “relearned”: aspects that differ in LLMs (tokenization, scaling laws).

**2. Mental model: “From finite‑dimensional to high‑dimensional, data‑driven representation learning”**  
   - Map classical pipelines (feature extraction → model training) onto the transformer stack (embedding layer → attention blocks).  
   - Use the same abstraction of *model capacity vs. data*.

**3. Step‑by‑step reasoning**  
   1. **Feature engineering → tokenization & embeddings**: Both aim to convert raw input into a usable vector space.  
   2. **Model choice & hyperparameters**: Learning rate schedules, optimizers (SGD ↔ Adam), regularization still apply.  
   3. **Evaluation metrics**: Accuracy, F1 remain, but LLMs require perplexity, BLEU, etc.  
   4. **Training dynamics**: Classical overfitting ↔ catastrophic forgetting; need to understand attention’s context window.  
   5. **Deployment concerns**: Batch inference vs. streaming; latency constraints differ.

**4. Common traps**  
   - Assuming *feature engineering* is obsolete; tokenization still requires design choices.  
   - Confusing *parameter count* with *model size*: many more parameters but similar overfitting risks.  
   - Overlooking *pre‑training vs. fine‑tuning*: classical ML rarely has a pre‑trained component.

**5. Sanity‑check & communicate**  
   - Verify each transferred concept against an LLM architecture diagram.  
   - Summarize: “Most algorithmic principles (loss, regularization) stay; the main relearning is in data representation (tokenization), scaling behavior, and the role of massive pre‑training.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
