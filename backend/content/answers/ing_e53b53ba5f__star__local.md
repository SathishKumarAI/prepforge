---
qid: ing_e53b53ba5f__star__local
question: 'Explain: Workflow: Prompt chaining — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:15-05:00'
sources: []
---

**Situation**  
At my previous company we were launching an internal chatbot that needed to handle complex customer queries across billing, product usage, and technical support. The single‑prompt model kept returning generic answers or got stuck mid‑conversation, hurting our CSAT score (down from 88% to 72%).

**Task**  
I was tasked with redesigning the conversation flow so the agent could ask clarifying follow‑ups, retrieve context, and then produce a precise response—all while staying within Anthropic’s Claude API limits.

**Action**  
I implemented a prompt‑chaining workflow:  
1. **Context retrieval step** – a short prompt queries our knowledge base for the last three interactions; we embed the results into a structured JSON blob.  
2. **Clarification loop** – if the agent detects ambiguity (using a keyword list), it chains to a second prompt that asks a focused question and captures the reply back into the same JSON.  
3. **Response generation step** – a final prompt receives the enriched context and outputs the answer, wrapped in a concise, user‑friendly format. I used Anthropic’s `anthropic.completions.create` with temperature 0.4 to keep consistency, and logged each chain step for debugging.

**Result**  
The new pipeline cut average resolution time by 35% (from 12 min to 7.8 min) and raised CSAT back to 86%. I learned that prompt chaining turns a stateless model into a stateful agent, and that careful JSON structuring keeps the flow robust across API calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
