---
qid: ing_bdfae487d0__star__local
question: A conversation runs past the context window. What do you keep, and how do
  you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 326
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:54-05:00'
sources: []
---

**Situation:**  
During a live chatbot pilot for our customer support platform, we noticed that the model’s 4‑k token limit was being hit mid‑conversation. The assistant started to forget earlier user requests and produce contradictory responses.

**Task:**  
I had to design a strategy to keep the most relevant context without exceeding the window, ensuring continuity while preserving important details like user intent, prior solutions, and compliance notes.

**Action:**  
First, I instrumented a sliding‑window buffer that tracked token usage per turn. Next, I implemented an importance scoring algorithm: key elements (user’s goal, issue type, any SLA constraints) were tagged with higher weights. When the buffer approached capacity, the system would prune low‑weight tokens—mostly filler or repeated confirmations—while retaining structured “conversation facts” stored in a small JSON summary. The assistant then referenced this summary via a prompt template (“Recall: …”) before generating new replies. I also added a fallback to summarize older turns into one 200‑token digest if the buffer was still full.

**Result:**  
After deployment, we reduced context‑loss incidents by 92 %. User satisfaction scores rose from 78 % to 88 %, and response time dropped 15 % because the model no longer had to regenerate lost information. I learned that a lightweight, weighted pruning strategy coupled with a concise summary can keep a conversational AI coherent even when the context window is exceeded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
