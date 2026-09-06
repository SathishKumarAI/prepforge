---
qid: ing_2df64f01fe__think__local
question: Your chatbot starts losing the thread after about ten turns. What are your
  options for managing conversation history?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 497
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:41:43-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
- *What “thread” means*: context loss of relevant facts, user intent, or narrative flow.  
- *Constraints*: device memory limits, privacy policy, latency tolerance.  
- *Goal*: keep the conversation coherent while staying within those bounds.

**2️⃣ Mental model: Sliding‑window + hierarchical summarization**  
Treat the dialogue as a time‑ordered stream where recent turns are kept verbatim and older turns are compressed into higher‑level representations (summary, key facts, or embeddings). This mirrors how humans remember details selectively.

**3️⃣ Step‑by‑step reasoning**  

| Option | How it works | Pros | Cons |
|--------|--------------|------|------|
| **Fixed token window** | Keep the last *N* tokens (e.g., 2048) in the prompt. | Simple, deterministic. | Loses older context; may exceed limits. |
| **Rolling summary buffer** | After each turn, generate a concise summary of the whole conversation and store it. Use that summary for future prompts. | Retains gist, reduces token usage. | Requires reliable summarization; risk of losing nuance. |
| **Fact‑based knowledge graph** | Extract entities/relations into a lightweight graph. Query this graph to answer follow‑ups. | Precise retrieval, privacy‑friendly. | Extra NLP pipeline; may miss informal cues. |
| **Hybrid cache + prompt engineering** | Keep recent turns verbatim, attach a “high‑level recap” at the start of the prompt. | Balances detail and brevity. | Needs careful prompt design to avoid confusion. |

**4️⃣ Common pitfalls**  
- *Over‑compressing*: summaries that omit critical qualifiers lead to hallucinations.  
- *Prompt bloat*: adding too many summaries inflates token count, negating gains.  
- *Privacy leaks*: storing raw user data beyond the minimal window can violate regulations.

**5️⃣ Sanity‑check & communicate**  
- Run a quick test: feed 15 turns, see if the model still references earlier facts.  
- Explain to stakeholders that we’ll use a hybrid approach (fixed window + periodic summarization) to balance fidelity and efficiency, and that safeguards (token limits, privacy filters) are in place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
