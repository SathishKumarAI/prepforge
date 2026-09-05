---
qid: ing_32097798d3__star__local
question: 'Explain: Async API — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails is
  an open-source toolkit for easily adding programmable guardrails to LLM-based conversational
  systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 337
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:29-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a voice‑to‑text chatbot for customer support that needed to run in real time on edge devices. The latency from the speech recognizer to the LLM response was around 1 s, but our SLA required sub‑300 ms turn‑around.

**Task:**  
I had to redesign the inference pipeline so the LLM could process multiple user utterances concurrently without blocking the main event loop, and also enforce domain safety rules using a guardrail system before generating any reply.

**Action:**  
I wrapped NeMo Guardrails in an asynchronous FastAPI endpoint. Using Python’s `asyncio` I launched the speech‑to‑text decoder as a coroutine, then streamed the text to a separate async task that invoked the NeMo Guardrail validator and the LLM (via NVIDIA NeMo’s `TextGenerationPipeline`). The guardrail returned a JSON policy verdict; if it passed, the LLM generated the answer, otherwise a canned safe response was returned. I also leveraged `uvicorn` with GIL‑free workers to keep CPU usage low.

**Result:**  
The end‑to‑end latency dropped from 1 s to 250 ms on average, meeting our SLA. Guardrail violations decreased by 85%, and the system handled up to 8 concurrent conversations without thread‑pool exhaustion. I learned how async orchestration can dramatically improve real‑time AI pipelines while keeping safety checks front‑loaded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
