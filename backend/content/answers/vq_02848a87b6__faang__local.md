---
qid: vq_02848a87b6__faang__local
question: 5 What is Precognition prompting, and when would you use it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 346
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:04-05:00'
sources: []
---

**Clarify**  
Precognition prompting is a technique where the model is asked to *anticipate* future user intent or missing context before completing an answer. It’s used in conversational AI when the system wants to surface relevant follow‑up questions, clarify ambiguities, or gather additional data proactively. I’d confirm assumptions: do we have enough token budget for extra turns? Is the domain safety‑sensitive (e.g., medical)?

**Approach**  
1. Detect uncertainty in the user’s query (keyword gaps, vague terms).  
2. Prompt the model with a “precognition” instruction such as *“What additional info would help you answer this?”*  
3. Use the model’s response to generate follow‑up prompts or enrich the final answer.

**Depth**  
- **Implementation:** Add a two‑step pipeline: (a) initial completion; (b) precognition query generation.  
- **Complexity:** Extra token usage per turn, but linear in conversation length.  
- **Trade‑offs:** Improves relevance and reduces hallucinations but may delay response time.

**Edge Cases**  
- Over‑prompting can annoy users.  
- If the model misidentifies uncertainty, it may ask irrelevant questions.  
- Test with ambiguous vs. explicit queries to gauge precision.

**Optimize & Communicate**  
Iteratively tune the precognition prompt wording for brevity and clarity. Log user satisfaction scores and response latency to validate ROI. Explain that this technique bridges gaps in knowledge while keeping the conversation natural, a key win for high‑stakes domains like customer support or tutoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
