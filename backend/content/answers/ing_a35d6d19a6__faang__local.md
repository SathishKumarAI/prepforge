---
qid: ing_a35d6d19a6__faang__local
question: What is the difference between reference-based and reference-free evaluation,
  and why do BLEU, ROUGE and exact match fail on LLM output?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 469
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:37-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of *reference‑based* (metrics that compare a generated text to one or more human references) vs *reference‑free* evaluation (which assesses quality without external gold outputs). I’ll confirm we’re talking about LLM‑generated responses, and that the focus is on why classic metrics like BLEU, ROUGE, and exact match are inadequate for them.

**Approach**  
1. Define both evaluation styles.  
2. List key properties of LLM output (semantic diversity, creative phrasing, hallucination).  
3. Explain how each metric works and its limitations in this context.  

**Depth**  
- **Reference‑based**: compares n‑gram overlap or similarity to a gold text; assumes the reference is the *only* correct answer.  
- **Reference‑free**: uses model‑inferred scores (perplexity, semantic embeddings, human ratings) that can evaluate correctness and fluency without a fixed target.

LLM outputs often have multiple valid phrasings or elaborate explanations that differ lexically from the reference yet are semantically correct.  
- **BLEU/ROUGE** rely on exact n‑gram matches; they penalize paraphrases and miss semantic equivalence, leading to low scores for perfectly fine answers.  
- **Exact match** demands token‑by‑token identity—impossible when a model can generate any of many correct variants.

Thus these metrics over‑penalize creativity and under‑capture true quality.

**Edge cases**  
- Non‑textual tasks (images, code) where n‑gram overlap is irrelevant.  
- Hallucinated content that matches the reference verbatim but is factually wrong—metrics still reward it.

Testing: compare BLEU/ROUGE scores against human judgment on a paraphrasing dataset; observe divergence.

**Optimize & communicate**  
Recommend hybrid evaluation: use reference‑free embedding similarity (e.g., BERTScore) combined with factuality checks. Communicate that while traditional metrics are fast, they misalign with LLM goals; a balanced approach yields more reliable assessment and aligns interviewers’ expectation of structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
