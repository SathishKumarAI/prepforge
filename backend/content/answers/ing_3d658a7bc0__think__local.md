---
qid: ing_3d658a7bc0__think__local
question: 'Explain: Best Practices for LLM-as-Judge — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 461
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:49:49-05:00'
sources: []
---

**Thought‑Process Guide**

1. **Clarify the Scope & Assumptions**  
   - *What is “LLM-as-Judge”?* A language model that evaluates or scores other models’ outputs, especially in Retrieval-Augmented Generation (RAG).  
   - *Assume* a typical RAG pipeline: retrieval → generation → evaluation.  
   - *Goal*: maximize reliability, transparency, and fairness of the judge.

2. **Mental Model / Framework**  
   Use a layered approach:  
   - **Input Pre‑processing** (clean prompts, remove bias).  
   - **Evaluation Design** (metrics, rubric).  
   - **Model Selection & Prompting** (few‑shot examples, chain‑of‑thought).  
   - **Post‑Processing & Calibration** (temperature tuning, confidence estimation).

3. **Step‑by‑Step Reasoning**  
   1. Define clear criteria (accuracy, relevance, consistency).  
   2. Construct a prompt that explicitly asks for the rubric and a numeric score.  
   4. Provide high‑quality few‑shot examples covering edge cases.  
   5. Run the judge on a validation set to assess bias & variance.  
   6. Iterate: adjust temperature, add counter‑examples, fine‑tune if needed.

4. **Common Traps**  
   - *Over‑fitting to prompt*: the model may simply regurgitate example scores.  
   - *Ignoring calibration*: raw logits can be misinterpreted as confidence.  
   - *Neglecting data drift*: retrieval content changes over time, affecting judge consistency.

5. **Sanity‑Check & Communicate**  
   - Compare judge outputs against human baselines on a held‑out set.  
   - Plot score distributions per category to spot anomalies.  
   - Explain the rubric and any calibration steps to stakeholders so they understand the judge’s decision logic.  

Follow this sequence, revisit assumptions regularly, and iterate until the judge reliably mirrors human judgment while remaining transparent and reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
