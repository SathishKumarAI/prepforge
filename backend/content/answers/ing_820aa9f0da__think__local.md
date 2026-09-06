---
qid: ing_820aa9f0da__think__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 407
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:34:09-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm the reader knows basic ML terminology (features, labels).  
   - Assume they’re familiar with “clean code” principles but not this specific rule.  

**2️⃣ Choose a mental model**  
   - Treat the Dependency Rule as a *design pattern* for feature engineering: “don’t build a feature that depends on another feature you’re already using.”  
   - Think of it like avoiding circular dependencies in software modules.  

**3️⃣ Reason step‑by‑step toward an explanation**  
   1. Define the rule plainly (avoid features that are derived from or correlated with other used features).  
   2. Explain why: multicollinearity inflates variance, hurts interpretability, and can mislead regularization.  
   3. Provide a concrete example (e.g., using both “salary” and “net‑income = salary + bonus”).  
   4. Show how to detect dependencies (correlation matrix, VIF).  
   5. Suggest remedies: drop one, combine into a single feature, or use dimensionality reduction.  

**4️⃣ Common traps to avoid**  
   - Mixing up *feature engineering* with *label leakage*.  
   - Over‑simplifying “don’t use correlated features” as a hard rule; some models tolerate it.  
   - Forgetting that the rule is about *dependencies*, not just correlation strength.  

**5️⃣ Sanity‑check & verbalize**  
   - Re‑read: does the explanation cover definition, rationale, example, detection, and mitigation?  
   - Speak aloud a short summary: “The Dependency Rule says don’t let one feature be built from another you already use; otherwise you’ll double‑count information and hurt model stability.”  

Follow this structure whenever explaining ML design principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
