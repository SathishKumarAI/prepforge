---
qid: ing_fef0ee871d__think__local
question: 'Explain: Dynamic Example Selection — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 435
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:51:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify that “Dynamic Example Selection” refers to choosing which few‑shot or in‑context examples a language model should see at inference time.  
   - Assume we’re dealing with standard LLMs (e.g., GPT‑4) and typical use cases: classification, generation, or reasoning.  

**2️⃣ Adopt a mental framework**  
   - *Problem space*: Example pool + target prompt.  
   - *Objective*: Maximize task performance while keeping token budget low.  
   - *Constraints*: Model’s context window, compute cost, and potential bias.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Collect candidate examples** (annotated or automatically mined).  
   2. **Score them**: similarity to query (semantic), relevance to label, diversity, and prior model performance on each.  
   3. **Rank & select** using a budget‑aware algorithm (greedy, beam search, or reinforcement learning).  
   4. **Insert selected examples** into the prompt in a consistent format.  
   5. **Iterate/feedback**: evaluate output, update scores, and refine selection policy.  

**4️⃣ Avoid common pitfalls**  
   - Don’t rely solely on lexical overlap; use embeddings for true semantic similarity.  
   - Beware of over‑fitting to the few examples—ensure diversity.  
   - Don’t ignore token limits; a “perfect” set may exceed context length.  

**5️⃣ Sanity check & communicate**  
   - Verify that each step improves an evaluation metric (accuracy, F1).  
   - Explain the trade‑off between selection quality and cost: “We pick X examples because they cover Y% of the semantic space while staying within Z tokens.”  

This outline lets you systematically tackle any question about dynamic example selection in few‑shot or in‑context learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
