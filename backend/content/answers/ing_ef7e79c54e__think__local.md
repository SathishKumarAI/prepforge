---
qid: ing_ef7e79c54e__think__local
question: 'Explain: Dimension 2: Groundedness (Faithfulness)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 437
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:49:12-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation of *Dimension 2: Groundedness (Faithfulness)* in the context of AI evaluation.  
- Assume they’re referring to a known framework (e.g., “AI Evaluation Dimensions” or a specific paper).  
- If ambiguous, note that we’ll describe it generically as the property that model outputs remain faithful to the source data or user intent.

**2️⃣ Pick a mental‑model framework**  
- Use the *evaluation‑criteria* lens: define what “groundedness” means (alignment with evidence, no hallucinations).  
- Map it onto a 3‑step process: **source → transformation → output**, and check fidelity at each link.  

**3️⃣ Step‑by‑step reasoning**  
1. Start with the *definition*: Groundedness = the model’s ability to produce statements that can be traced back to real evidence or user context.  
2. Explain why it matters: prevents hallucinations, builds trust.  
3. Break into sub‑components: (a) data grounding – referencing training facts; (b) contextual grounding – respecting user prompt constraints; (c) factual grounding – checking against external sources.  
4. Provide examples: a grounded answer cites a source or uses correct terminology; an ungrounded one fabricates details.  

**4️⃣ Common traps to avoid**  
- Confusing “faithfulness” with mere correctness—faithfulness also includes *source attribution*.  
- Over‑generalizing: not all faithfulness is equal (e.g., legal vs. casual domains).  
- Assuming a single metric captures it; in practice multiple signals are needed.

**5️⃣ Sanity‑check & communicate clearly**  
- Re‑read the explanation to ensure each component links back to “groundedness”.  
- Use concise bullet points or a short diagram if possible.  
- End with a quick recap: “Groundedness ensures every claim can be traced back to real evidence, making AI outputs trustworthy.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
