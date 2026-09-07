---
qid: ing_c27ab44f11__faang__local
question: 'Explain: System Prompt and User Prompt — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:08-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *system prompts*, *user prompts*, and the concept of *context engineering* in the context of large‑language‑model (LLM) systems.  
Assumptions:  
- The audience knows basic LLM terminology.  
- They expect a concise, practical description rather than a research paper.

**Approach**  
1. Define each term succinctly.  
2. Show how they interact in a prompt‑engineering workflow.  
3. Highlight why context matters for model behavior.  

**Depth**  
- **System Prompt** – a fixed instruction given once to set the LLM’s role, style, and constraints (e.g., “You are an empathetic customer‑support agent”). It establishes a *policy* that guides all subsequent turns.  
- **User Prompt** – the variable user input that drives the current request (“How do I reset my password?”). It is coupled with the system prompt to produce context‑aware responses.  
- **Context Engineering** – the practice of designing, selecting, and ordering prompts (system + user) so the model’s internal state aligns with business goals. Techniques include:  
  * Prompt chaining (previous answers become part of new prompts).  
  * Token budget management (ensuring key constraints fit within token limits).  
  * Retrieval‑augmented prompting (injecting relevant documents as additional context).  

**Edge Cases**  
- Overly long system prompts can exceed the model’s context window, causing truncation.  
- Conflicting instructions between system and user prompts lead to ambiguous behavior.  
- Repeated context can cause “prompt drift” if not refreshed.

**Optimize & Communicate**  
Iterate by measuring response quality (BLEU/F1 or human‑rated relevance). Use automated A/B tests to fine‑tune prompt length and content. Explain your rationale: “We keep the system prompt concise to avoid token waste, but include explicit constraints on tone and disallowed content.” This shows you can balance engineering trade‑offs while maintaining clear communication with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
