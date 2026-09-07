---
qid: ing_9326d73281__faang__local
question: 'Explain: Create an eval for a task — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 465
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:39-05:00'
sources: []
---

**Clarify**  
You want to build an evaluation pipeline that automatically scores user‑generated content against a target objective (e.g., summarization quality). Confirm:  
* Is the task supervised or self‑critical?  
* Do you have ground‑truth labels or only reference outputs?  
* What metrics matter—fluency, factuality, coverage?

**Approach**  
1. **Define the scoring rubric** – map each dimension to a measurable score (0–5).  
2. **Choose an evaluator model** – fine‑tune GPT‑4 on annotated pairs or use OpenAI’s `text-davinci-003` with a prompt that includes examples and a clear instruction.  
3. **Batch the evaluation** – send inputs in chunks to stay within token limits, using the `/v1/edits` endpoint if you need iterative refinement.  
4. **Aggregate results** – average rubric scores or compute weighted sums per your business objective.

**Depth**  
*Prompt template:*  
```
You are an expert reviewer. Score the following response for [task] on 0‑5 for fluency, accuracy, and relevance. Provide a brief justification.

Reference: {reference}
Response: {candidate}
Scores:
Fluency: ___
Accuracy: ___
Relevance: ___
Justification: ___
```
*Complexity:* O(N) per batch; latency ~200 ms per request.  
*Trade‑offs:* Larger models yield higher fidelity but cost more; smaller models risk bias.

**Edge Cases**  
*Out‑of‑scope inputs (e.g., nonsensical text)* – return a low score with a warning.  
*Token overflow* – truncate or summarize the prompt.  
*Model hallucination* – validate against reference before scoring accuracy.

**Optimize & Communicate**  
Add caching for repeated prompts, monitor drift by periodically re‑evaluating a held‑out set, and expose a REST API (`/evaluate`) with JSON payloads. Explain that this modular design lets us swap models or rubrics without touching downstream pipelines, aligning with FAANG’s emphasis on scalability and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
