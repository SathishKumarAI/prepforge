---
qid: ing_80a8df5a51__star__local
question: 'Explain: Use at runtime — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:44-05:00'
sources: []
---

**Situation:**  
During a rapid‑prototype phase for an internal chatbot that needed to stay compliant with new data‑privacy regulations, our QA score dropped from 92 % to 78 % after we added a third-party content‑generation model.

**Task:**  
I had to identify which parts of the conversation flow were breaking compliance rules and quantify how each model variant performed in real time, all while keeping latency under 300 ms per turn.

**Action:**  
I set up LangWatch to stream live evaluation metrics—accuracy, hallucination rate, and privacy‑violation flagging—directly into our monitoring dashboard. For deeper analysis I used Langfuse to run structured AI evals at runtime: defined prompt templates, ground truth labels from a curated dataset, and custom scoring functions (e.g., weighted F1 for policy adherence). I then built an automated pipeline that swapped the third‑party model with a lightweight in‑house LLM when any metric fell below 85 %, without interrupting user sessions. The evals ran on GPU instances with Docker, so we maintained sub‑300 ms latency.

**Result:**  
Within two weeks, compliance scores rose to 94 % and hallucination incidents dropped by 60 %. Latency remained at 280 ms average. I learned that integrating LangWatch/Langfuse for real‑time evals not only gives instant feedback but also enables dynamic model switching, turning a potential regulatory risk into a performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
