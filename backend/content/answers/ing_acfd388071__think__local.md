---
qid: ing_acfd388071__think__local
question: 'Q48: When would you choose fine-tuning over prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 462
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:24:35-05:00'
sources: []
---

**Thinking Process (Metacognition)**  

1. **Clarify the question & set assumptions**  
   - *What is being asked?* The user wants a guideline: when to fine‑tune an LLM versus when to use prompt engineering.  
   - *Assumptions*: The model in question can be fine‑tuned (e.g., GPT‑3.5, Llama), and the user has access to training data & compute resources.  

2. **Mental model / framework**  
   - Think of *control vs cost* trade‑off:  
     - **Fine‑tuning** gives permanent, low‑latency behavior changes but costs time, data, and compute.  
     - **Prompt engineering** is cheap, flexible, but requires run‑time tuning for each use case.  

3. **Step‑by‑step reasoning toward answer**  
   a. Identify *performance needs*: If you need consistent, high‑accuracy outputs across many requests (e.g., legal document summarization), fine‑tuning may be justified.  
   b. Evaluate *data availability*: Fine‑tune only if you have sufficient labeled examples; otherwise prompting is safer.  
   c. Consider *update frequency*: For rapidly changing knowledge or policies, prompting allows quick changes without retraining.  
   d. Assess *resource constraints*: Limited GPU time → prompt engineering; ample compute and a stable product → fine‑tune.  

4. **Common traps to avoid**  
   - Assuming fine‑tuning always outperforms prompts; in practice, well‑crafted prompts can match or exceed fine‑tuned performance for many tasks.  
   - Ignoring the “catastrophic forgetting” risk when fine‑tuning on a narrow domain.  

5. **Sanity‑check & communicate**  
   - Summarize: *Fine‑tune when you need long‑term, high‑precision consistency and have data/resources; prompt engineer when flexibility, cost, or rapid iteration matters.*  
   - Use clear bullets so the user can quickly reference each point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
