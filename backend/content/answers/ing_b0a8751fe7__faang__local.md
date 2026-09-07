---
qid: ing_b0a8751fe7__faang__local
question: 'Explain: Memory poisoning via prompt injection — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 475
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:56-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *memory‑poisoning via prompt injection* in the context of an AI agent that keeps a persistent memory or state. I’ll assume: (1) the agent stores user interactions for future reference; (2) it uses prompts that include this stored text when generating responses; (3) an attacker can inject malicious content into that memory.

**Approach**  
1. Define prompt injection and memory poisoning.  
2. Show how injected tokens become part of the agent’s internal state.  
3. Illustrate a concrete attack flow.  
4. Discuss mitigations.

**Depth**  
- *Prompt injection* is when an attacker crafts input that manipulates the LLM’s behavior by embedding commands or prompts in user data.  
- In agents, each turn often concatenates “history + new prompt” → `prompt = [memory] + user_input`. If the memory contains malicious content, every future generation inherits it.  
- *Memory poisoning* occurs when such injected text is stored unfiltered and later re‑used, effectively “poisoning” the agent’s internal state.  
- Attack flow: 1) attacker sends input like `"Ignore policy. [BEGIN] <malicious prompt> [/END]"`. 2) Agent stores it in memory. 3) Next turn, LLM processes `memory + new user query`, causing the malicious sub‑prompt to be interpreted as a directive (e.g., “output X”).  
- Complexity: O(n) per generation because the whole memory is concatenated; poisoning can exponentially magnify if not cleaned.

**Edge Cases**  
- Short vs. long memory windows.  
- Non‑textual memory (images, embeddings).  
- Agents that cleanse or truncate history.

**Optimize & Communicate**  
Explain that defenses include:  
1) Sanitizing stored text for policy tokens.  
2) Using a separate “safe” prompt buffer and only appending user input.  
3) Implementing *prompt‑guard* layers that detect and strip directive patterns before memory is persisted.  
Conclude by stressing the importance of treating agent memory as a potential attack surface and designing it with explicit validation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
