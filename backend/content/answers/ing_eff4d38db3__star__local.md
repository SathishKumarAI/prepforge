---
qid: ing_eff4d38db3__star__local
question: 'Explain: Reasoning Loops: ReAct and Beyond — Reasoning Loops React And
  Beyond'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 368
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:14-05:00'
sources: []
---

**Situation** – While leading the prototype for our customer‑support chatbot, we noticed its responses were often off‑target: it would provide an answer, then immediately ask follow‑up questions that contradicted itself. Our SLA required 90 % first‑contact resolution.

**Task** – I had to redesign the agent’s reasoning flow so it could reason, act, and reflect in a single loop without getting stuck or repeating contradictory steps, while keeping inference latency under 500 ms per turn.

**Action** – First, I mapped the existing pipeline: prompt → LLM → text answer. Then I implemented a ReAct‑style architecture: after generating an “action” token (e.g., *search*, *verify*), the system invokes a lightweight sub‑model or API call; the result is fed back as new context. I added a reflection checkpoint that forces the model to compare the new context against its previous intent, using a simple semantic similarity metric (cosine of sentence embeddings from SentenceTransformers). If similarity falls below 0.85, the loop restarts with a revised plan. For latency control, I cached frequent knowledge‑base queries and pre‑computed embeddings. Finally, I set up an automated test harness that simulates user dialogs and logs each loop iteration.

**Result** – The updated agent achieved a 92 % first‑contact resolution rate and reduced average response time from 650 ms to 480 ms. It also cut the number of contradictory turns by 68 %. I learned that embedding a lightweight reflection step after every action dramatically improves coherence, and that caching embeddings is key for real‑time deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
