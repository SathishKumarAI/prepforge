---
qid: ing_60629ae57f__fp__local
question: Describe the ReAct pattern. How does it relate to modern native tool calling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 411
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:28-05:00'
sources: []
---

**ReAct (Reason‑and‑Act)**  
The fundamental problem a language model faces is *decision making under uncertainty*: given an ambiguous prompt, it must decide whether to produce an answer directly or to acquire auxiliary information (lookup, calculation, external API). ReAct frames this as a **two‑step Markov decision process**:  

1. **Reason** – the model writes a self‑contained plan (e.g., “I need to fetch the current price of X”) that is *explicitly* stored in its own output.  
2. **Act** – it then performs an operation (tool call, API request) whose result feeds back into the next reasoning step.

Why this works: the model’s hidden state is opaque; by emitting a reasoning trace, we expose a *policy surface* that can be inspected, modified, or constrained externally. The policy becomes a composable function of past actions and observations, aligning with reinforcement‑learning insights where value estimation is replaced by symbolic planning.

**Relation to native tool calling**  
Modern frameworks (e.g., OpenAI’s Tool Calling API) treat each “Act” as a typed request that the model can *invoke directly*. ReAct predates these APIs but conceptually matches them: the *Act* step is now an automated, type‑checked call rather than a free‑form string. The pattern remains valuable because it preserves a transparent reasoning log, allowing developers to audit or override tool usage—something raw native calls lack unless coupled with a logging layer.

**Non‑obvious insight**  
ReAct’s true power lies in *self‑debugging*: by recording its own plan, the model can detect when an action failed (e.g., API returned an error) and generate a corrective sub‑plan. This turns tool failures from catastrophic bugs into recoverable reasoning branches—essential for robust, safety‑critical AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
