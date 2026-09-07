---
qid: ing_7462e23eb5__faang__local
question: 'Explain: Roles: the prompt is an API surface — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 429
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:15:01-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *prompt engineering* and *context* shape an AI’s API surface—essentially, how the input prompt determines behavior, and what “context” means in this space.

Assumptions to confirm:  
- The model is stateless unless explicitly provided with context.  
- Context can be prior messages, system instructions, or external data.  
- The API surface includes prompt tokens, temperature, max‑tokens, etc.

**Approach**  
1. Define the prompt as the user-facing input string.  
2. Enumerate the types of context that augment it (system prompt, conversation history, metadata).  
3. Explain how each influences token usage and generation strategy.  

**Depth**  
- *Prompt engineering* is the art of crafting prompts—keywords, phrasing, constraints—to steer a language model toward desired outputs while minimizing hallucination.  
- *Context* refers to any additional tokens supplied before the user prompt: system messages that set overall behavior (“You are a helpful assistant”), conversation history that preserves state across turns, and optional structured data (JSON) injected into the prompt.  
- The API surface exposes these as separate parameters; the model concatenates them internally, treating context as preceding tokens in the input sequence.  
- Token budget is shared: more context reduces room for output, so careful pruning (e.g., sliding window of recent turns) is crucial.

**Edge Cases**  
- Over‑context leads to truncation and loss of recent user intent.  
- Poorly engineered prompts can produce irrelevant or unsafe content.  
- Long histories may exceed token limits; test with varying conversation lengths.

**Optimize & Communicate**  
Improvements: use prompt templates, cache system prompts, apply dynamic context windows. In an interview, I’d narrate by mapping each API field to its functional impact, demonstrating how a small tweak in the prompt can drastically change results—showing both technical depth and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
