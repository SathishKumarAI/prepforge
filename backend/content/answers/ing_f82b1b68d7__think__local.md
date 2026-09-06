---
qid: ing_f82b1b68d7__think__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 424
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:22:23-05:00'
sources: []
---

**1️⃣ Clarify the situation & state assumptions**  
- *What* is “everything else”?  Is it a benchmark suite, unrelated tasks, or generic downstream metrics?  
- *How* was fine‑tuning performed (learning rate, dataset size, epochs)?  
- Assume we used a standard pre‑trained backbone and only added a small head for the customer’s task.

**2️⃣ Mental model: Over‑fitting & representation drift**  
Fine‑tuning can cause the network to “forget” useful features learned on the larger corpus (catastrophic forgetting) or collapse its feature space toward the narrow target distribution, hurting generalization.

**3️⃣ Step‑by‑step reasoning**  
1. Inspect training curves: high loss plateau?  Over‑fitting signals.  
2. Evaluate *intermediate* representations (e.g., layer activations) on a held‑out generic dataset to see if they drifted.  
3. Check hyperparameters: too large LR or too many epochs can overwrite earlier weights.  
4. Consider the size of the fine‑tuning set—small sets often cause over‑adaptation.

**4️⃣ Common traps to avoid**  
- Assuming higher target accuracy guarantees overall improvement; it doesn’t if other tasks are harmed.  
- Ignoring that “everything else” may include tasks that rely on diverse features (e.g., vision + language).  
- Forgetting to use a validation set from the *original* domain when tuning.

**5️⃣ Sanity‑check & communicate**  
Run a quick sanity test: freeze lower layers, fine‑tune only the head; if general performance stays stable, the issue is deeper layer drift. Explain that we’ll mitigate by using techniques like **elastic weight consolidation**, **progressive freezing**, or adding a small *regularization* term toward the pre‑trained weights (e.g., L2 penalty on parameter changes). This keeps the model useful for the target while preserving its general capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
