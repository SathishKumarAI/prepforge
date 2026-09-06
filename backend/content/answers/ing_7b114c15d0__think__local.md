---
qid: ing_7b114c15d0__think__local
question: 'Explain: Pitfall 3: Evaluation Set Leakage — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 443
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:09:51-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify that “Pitfall 3” refers to a specific risk in AI safety literature (e.g., the *OpenAI Safety Checklist*).  
   - Assume the audience knows basic AI evaluation but not the nuance of leakage between training and test data.

**2. Adopt a mental‑model framework**  
   - Think of **data partitioning** as a pipeline: *source → pre‑processing → split → model → evaluation*.  
   - View “leakage” as any information that crosses from the *evaluation* branch back into the *training* branch.

**3. Step‑by‑step reasoning**  
   1. Define what an *evaluation set* is (the held‑out data used to measure generalization).  
   2. Explain why we need it: to estimate real‑world performance and safety properties.  
   3. Describe common leakage sources (e.g., pre‑training on the same corpus, using auxiliary labels derived from test data, hyperparameter tuning on evaluation metrics).  
   4. Show how each source contaminates the *capability assessment*—the model appears more capable than it truly is.  
   5. Provide concrete mitigation tactics: strict temporal splits, separate curation teams, auditing logs.

**4. Common traps to avoid**  
   - Forgetting that “leakage” can be subtle (metadata, token overlap).  
   - Over‑simplifying by saying “just keep data separate”; the devil is in the pre‑processing and labeling steps.  
   - Assuming all leakage leads to catastrophic failure; many cases just inflate performance scores.

**5. Sanity‑check & communicate clearly**  
   - Re‑state the key point: *If the evaluation set influences training, we cannot trust the capability assessment.*  
   - Use a concise example (e.g., a language model fine‑tuned on a dataset that includes future test documents).  
   - End with a brief reminder of best practices to avoid this pitfall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
