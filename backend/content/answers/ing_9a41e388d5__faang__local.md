---
qid: ing_9a41e388d5__faang__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 443
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:25-05:00'
sources: []
---

**Clarify**  
You’re asking about *Pattern 3 – Custom Planner*, a design where an AI system builds its own prompts (“DIY prompting”) and then parses the model’s output to drive subsequent steps. I’ll assume we’re working with a large language model (LLM) that can generate natural‑language text, and that our goal is a task‑oriented pipeline (e.g., summarizing documents, answering queries).

**Approach**  
1. **Planner module**: Generates a prompt tailored to the current sub‑task.  
2. **Executor**: Sends prompt to LLM, receives raw text.  
3. **Parser**: Extracts structured data or next instructions from output.  
4. **Loop**: Feed parser’s result back into planner until goal met.

**Depth**  
- *Prompt generation* uses templates plus context‑aware variables (e.g., “Given the following article, write a concise summary”).  
- *Parsing* employs regex, semantic role labeling, or lightweight fine‑tuned models to pull key fields.  
- Complexity: each round is O(1) for prompt creation, but LLM inference dominates; overall cost scales with number of iterations.  
- Trade‑offs: More sophisticated planners reduce hallucinations but increase compute; simpler parsers are faster but risk misinterpretation.

**Edge cases**  
- Model outputs gibberish → parser fails → planner must detect and retry or fallback to a safe prompt.  
- Infinite loops if planner keeps generating identical prompts; implement iteration caps.  
- Ambiguous instructions cause parsing ambiguity; use confidence thresholds.

**Optimize & communicate**  
- Cache frequently used prompts; batch LLM calls when possible.  
- Log planner–parser interactions for auditability and continuous improvement.  
- Explain the loop to stakeholders: “We ask the model, interpret its answer, then decide the next ask—iterating until we hit the target.” This narrative keeps interviewers aligned with both technical depth and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
