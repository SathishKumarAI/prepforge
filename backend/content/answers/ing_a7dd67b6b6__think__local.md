---
qid: ing_a7dd67b6b6__think__local
question: 'Explain: Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 484
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:08:13-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
   - *Clarify the scope*: Are we discussing tree‑based models (Decision Trees, Random Forests) or graph structures in ML (GCNs, knowledge graphs)?  
   - *Assume interview context*: Candidates likely need to explain algorithmic details and recent FAANG questions about feature importance, pruning, over‑fitting, or graph convolution operations.  

**2️⃣ Adopt a Mental Framework**  
   - **Tree Component**: Structure → Splits → Criteria (Gini, entropy) → Depth control → Ensemble tricks.  
   - **Graph Component**: Nodes/edges → Adjacency matrices → Message passing → Graph embeddings.  
   - Map each part to common interview themes: time complexity, bias‑variance trade‑off, scalability.

**3️⃣ Step‑by‑Step Reasoning**  
   1. Start with a quick recap of decision trees (root→leaf).  
   2. Highlight key FAANG questions: “How do you prevent over‑fitting?” → pruning, min_samples_split.  
   3. Transition to ensembles: Random Forests, Gradient Boosted Trees – mention feature importance and SHAP values.  
   4. Shift to graphs: define a graph, explain why GCNs are useful for relational data.  
   5. Cite recent FAANG problems (e.g., link prediction on social networks) and discuss loss functions and negative sampling.

**4️⃣ Common Traps to Avoid**  
   - Mixing up tree depth vs. number of leaves.  
   - Forgetting that graph convolutions are not the same as image CNNs; they aggregate neighbor info.  
   - Over‑emphasizing code over intuition—interviewers want conceptual clarity first.

**5️⃣ Sanity‑Check & Communicate**  
   - Rephrase each concept in one sentence to ensure you can explain it succinctly.  
   - Use a simple example (e.g., classifying emails) for trees, and a toy graph (users → friendships) for GCNs.  
   - Verify that your explanation covers both algorithmic details and why FAANG would care (scalability, interpretability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
