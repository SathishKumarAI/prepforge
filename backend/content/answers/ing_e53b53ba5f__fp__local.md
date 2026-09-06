---
qid: ing_e53b53ba5f__fp__local
question: 'Explain: Workflow: Prompt chaining — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 454
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:08-05:00'
sources: []
---

**Prompt‑Chaining: The Mini‑Planner that Turns a Black‑Box LLM into an Agent**

At its core, an LLM is a function  
\(f_\theta(\text{prompt})\rightarrow \text{text}\)  
trained to maximize the likelihood of next tokens. It has no internal state or planning ability; it simply maps input to output. To turn it into an *agent* that can perform multi‑step tasks, we impose a *chain* of prompts, each feeding its own answer back as context for the next.  

1. **Decompose the goal**: Write a concise “goal prompt” that tells the model what you ultimately want (e.g., “Summarize the article”).  
2. **Generate sub‑tasks**: The model’s first response is an outline of intermediate steps.  
3. **Iterate**: Each subsequent prompt concatenates the previous answer and asks for the next step (“Now write the introduction”), effectively carrying a *state* forward.  

Why does this work?  
- **Dynamic programming in a black‑box**: The chain forces the model to solve subproblems whose outputs become inputs, mimicking recursion without explicit code.  
- **Information bottleneck**: By passing only the last answer (not the full history), we reduce entropy and keep the prompt length manageable while preserving necessary context—an application of the *information bottleneck principle*.  
- **Optimization over latent plans**: Each step can be seen as optimizing a small objective; the chain aggregates them, approximating gradient‑free optimization in discrete space.  

**Non‑obvious insight:** The *order* of sub‑tasks matters more than their content. Reordering steps changes the distribution of intermediate states, which can dramatically improve sample efficiency because the model’s hidden representations shift along a smoother trajectory. Thus, prompt chaining is not just repetition—it is a learned *planner* that leverages LLMs’ statistical inductive biases to approximate sequential decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
