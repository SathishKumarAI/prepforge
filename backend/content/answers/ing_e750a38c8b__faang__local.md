---
qid: ing_e750a38c8b__faang__local
question: 'Explain: Q28: Explain the RAGAS evaluation framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 435
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:55-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise description of *RAGAS*, an evaluation metric for Retrieval‑Augmented Generation (RAG) models. I’ll confirm they want the components, how it’s computed, and its practical use in assessing RAG quality.

**Approach**  
1. Restate each sub‑metric.  
2. Explain why retrieval matters.  
3. Show the overall formula.  
4. Mention typical data needs (ground truth passages).  

**Depth**  
RAGAS = *R*elevance + *A*ccuracy + *G*round‑truth *A*ssessment + *S*imilarity  
- **Relevance (R)**: ROUGE/EM between the model’s answer and the target answer, penalizing hallucinations.  
- **Accuracy (A)**: F1 over extracted facts from the answer versus a fact checker.  
- **Ground‑truth Assessment (G)**: Precision/Recall of retrieved passages against known relevant docs.  
- **Similarity (S)**: Embedding similarity between generated answer and source passages, ensuring faithful use of evidence.  
The final score is a weighted sum (often 0.4 R + 0.3 A + 0.2 G + 0.1 S). It captures both the quality of generation *and* the fidelity to retrieved evidence.

**Edge Cases**  
- No relevant passage → G drops to zero, penalizing hallucinations.  
- Highly paraphrased answers may score low on S but high on R; tune weights accordingly.  
- Multi‑document retrieval can inflate G unless duplicates are deduped.

**Optimize & Communicate**  
I’d suggest caching embeddings for efficiency and using GPU inference for real‑time scoring. In an interview, I would emphasize that RAGAS provides a balanced view of *what* the model says versus *where* it comes from, making it ideal for production pipelines that require trustworthy explanations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
