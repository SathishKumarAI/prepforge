---
qid: ing_d7b9b3478a__faang__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 467
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:01-05:00'
sources: []
---

**Clarify**  
The question asks *when* to split a single request into several prompts rather than sending everything in one shot, and it wants an explanation of the “least‑to‑most” prompting strategy. I’ll assume we’re working with a large language model (LLM) that has token limits, context drift, and varying confidence across sub‑tasks.

**Approach**  
1. Identify independent sub‑goals or high‑variance components.  
2. Decide the order of prompts: start with a minimal, low‑risk prompt (“least”) and progressively add detail (“most”).  
3. After each step, capture the model’s output and use it to refine the next prompt.

**Depth**  
- **Decomposition** is useful when:  
  * The overall task exceeds token limits or risks context loss.  
  * Different sub‑tasks have different expertise levels (e.g., math vs. creative writing).  
  * You need intermediate validation or error correction before proceeding.  
  * Parallel execution can speed up the pipeline (multiple prompts at once).  

- **Least‑to‑Most Prompting**:  
  1. **Least** – ask for a brief outline or key points, ensuring the model stays on track.  
  2. **Intermediate** – request elaboration on specific sections using the outline as a scaffold.  
  3. **Most** – generate the final detailed output, referencing earlier steps to maintain coherence.

This reduces hallucination because each prompt is constrained by prior context and can be corrected early.

**Edge Cases**  
- If sub‑tasks are highly interdependent, decomposition may introduce drift; test with a single vs. split run.  
- Token budget exhaustion between prompts can truncate useful information; monitor cumulative token usage.  

**Optimize & Communicate**  
- Cache intermediate results to avoid re‑generation.  
- Use prompt engineering techniques (e.g., “please remember the outline”) to keep continuity.  
- When explaining, I’d narrate: “We first get a skeleton to guide the model, then flesh it out step by step—this keeps each request focused and lets us catch errors early.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
