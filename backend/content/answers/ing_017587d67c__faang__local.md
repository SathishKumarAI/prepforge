---
qid: ing_017587d67c__faang__local
question: How do you measure faithfulness - whether the model's answer is actually
  grounded in retrieved context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 506
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:25-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Problem*: We want a metric that tells us if an LLM’s response truly derives from the supplied evidence rather than hallucinating.  
> *Assumptions to confirm*:  
> • The retrieved context is in plain text (no hidden metadata).  
> • Answers are short‑form, fact‑based statements.  
> • We have ground‑truth “correct” answers for a validation set.

**2️⃣ Approach**  
1. Encode the retrieved passage and the generated answer with the same transformer (e.g., BERT, RoBERTa).  
2. Compute cosine similarity between their embeddings → *context‑answer alignment*.  
3. Augment with a binary classifier that predicts “faithful” vs. “unfaithful” using fine‑tuned supervision on labeled data.  

**3️⃣ Depth**  
*Embedding similarity*:  
- **Time**: O(L) per pair (L = token length).  
- **Space**: O(1) extra, just two vectors.  
*Classifier*:  
- Fine‑tune a small MLP on top of the [CLS] token; loss = BCE.  
- Train with pairs labeled by human judges or by a rule‑based oracle (e.g., exact n‑gram overlap).  

The overall metric is a weighted sum: `Faithfulness = α * similarity + β * classifier_score`. 𝛼,𝛽 tuned on validation.

**4️⃣ Edge Cases**  
- Very short answers → embeddings noisy; fallback to exact match.  
- Context contains multiple facts → model may pick any; similarity alone may be high but still wrong.  
- Hallucinations that mimic context wording → classifier learns spurious patterns.

Test with:  
• Synthetic “copy‑paste” vs. “invented” answers.  
• Real user queries spanning diverse domains.

**5️⃣ Optimize & Communicate**  
- Use a lightweight sentence‑embedding model (SBERT) to keep latency < 10 ms.  
- Pre‑compute context embeddings for caching.  
- Report both components so stakeholders see why a low score is flagged.  

*Result*: A transparent, quantifiable “faithfulness” score that balances surface similarity with learned judgment—exactly the kind of rigor FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
