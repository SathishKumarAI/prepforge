---
qid: ing_f8b05803fc__think__local
question: 'Explain: Error Taxonomy — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 501
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:23:30-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - *What is meant by “Error Taxonomy – Architecture Patterns”?*  I’ll assume the user wants an explanation of how architectural patterns (e.g., MVC, micro‑services, event‑driven) relate to common error types in AI systems (bias, overfitting, adversarial attacks).  
   - *Scope*: focus on high‑level concepts, not deep code.  

**2. Choose a mental framework**  
   - Think of the taxonomy as two axes: **Error dimension** (data, model, inference, deployment) × **Architectural pattern** (layered, micro‑service, serverless).  
   - Map each error to the layer where it typically originates and show how an architecture can mitigate or exacerbate it.  

**3. Reason step‑by‑step**  
   1. List typical AI errors: data bias, label noise, model overfitting, concept drift, inference latency, security attacks.  
   2. Identify key architectural patterns: monolith, micro‑services, event‑driven pipelines, serverless functions, modular pipelines (ETL + training + serving).  
   3. For each error, ask: *Which pattern isolates or spreads this problem?* e.g., micro‑services can contain a biased data service; event‑driven pipelines allow drift detection.  
   4. Summarize the mapping in a concise table or diagram.  

**4. Avoid common traps**  
   - Don’t conflate “error taxonomy” with “bug taxonomy”; keep focus on AI‑specific errors.  
   - Avoid overloading patterns: each pattern can handle multiple errors; emphasize trade‑offs, not absolutes.  
   - Steer clear of jargon without explanation (e.g., “CQRS”, “Saga”) unless necessary.  

**5. Sanity‑check and verbalise**  
   - Quick mental test: pick a real case (e.g., an image classifier that drifts) and see if the mapping predicts the right pattern to mitigate it.  
   - Communicate clearly: start with a brief intro, present the two‑axis map, then give a concrete example for each axis pair. Use bullet points or a small table so the answer is digestible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
