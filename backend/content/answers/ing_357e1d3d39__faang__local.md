---
qid: ing_357e1d3d39__faang__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 454
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:48:25-05:00'
sources: []
---

**Clarify**  
The question asks how a *plan‑then‑execute* workflow differs from a *reactive (ReAct)* approach and under what circumstances each strategy outperforms the other.

**Approach**  
1. Define both paradigms.  
2. List their strengths & weaknesses.  
3. Map those to concrete use‑cases (deterministic vs. exploratory tasks).  

**Depth**  
| Strategy | Core idea | When it shines | Trade‑offs |
|----------|-----------|----------------|------------|
| **Plan‑then‑Execute** | Generate a complete action plan (e.g., via a planner or LLM prompt) before performing any step. | • Static, well‑defined problems with known constraints.<br>• Tasks requiring global optimization (routing, scheduling).<br>• Safety‑critical pipelines where pre‑validation is needed. | • High upfront cost; may miss dynamic information.<br>• Less flexible to mid‑execution changes. |
| **Reactive (ReAct)** | Interleave reasoning and action: the agent queries an environment or a model after each step, updating its plan on the fly. | • Open‑world or partially observable tasks (chat, web search).<br>• Situations where new data can alter optimal actions.<br>• Debugging/learning loops where feedback is crucial. | • Potentially longer total latency due to back‑and‑forth calls.<br>• Requires robust state tracking and error handling. |

**Edge cases**  
- Plan‑then‑execute fails if the environment changes after planning (e.g., stock prices).  
- Reactive struggles when a single global plan is needed for efficiency (e.g., multi‑robot coordination with tight deadlines).

**Optimize & communicate**  
Start with a hybrid: outline a high‑level skeleton plan, then let ReAct refine it as new evidence arrives. This balances upfront structure and runtime adaptability. In an interview, I’d highlight this strategy, quantify expected time savings vs. flexibility gains, and explain how to monitor for drift between planned and executed states.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
