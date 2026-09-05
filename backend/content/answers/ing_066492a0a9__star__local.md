---
qid: ing_066492a0a9__star__local
question: 'Explain: RAGAS vs. Ground-Truth Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 389
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:41-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with evaluating a retrieval‑augmented generation (RAG) model for an internal knowledge‑base chatbot. The product manager wanted to know whether the model’s responses were truly useful to users, not just syntactically correct.

**Task**  
I had to design an evaluation pipeline that compared the model’s outputs against curated ground‑truth answers and also measured user‑centric quality using RAGAS (Retrieval-Augmented Generation Assessment System) metrics like Retrieval Precision, Answer Relevance, and Faithfulness.

**Action**  
First I collected a test set of 500 real support tickets and had domain experts annotate the correct answers. I ran the RAG model to generate responses and then computed traditional BLEU/ROUGE scores against the ground truth. Next, I applied RAGAS: for each response I extracted the top‑k retrieved documents, scored Retrieval Precision (how many of those were relevant), calculated Answer Relevance by comparing semantic similarity with the gold answer, and measured Faithfulness by checking for hallucinated facts via a separate language model verifier. I plotted both sets of metrics to visualize trade‑offs.

**Result**  
The BLEU score was 0.41, but RAGAS revealed Retrieval Precision at 0.73 and Faithfulness at 0.88—indicating the model was retrieving useful documents even when its wording differed from the ground truth. This dual view helped us improve the retrieval index, raising overall user satisfaction scores by 12% in a subsequent A/B test. I learned that RAGAS provides a more holistic, user‑relevant assessment than relying solely on ground‑truth metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
