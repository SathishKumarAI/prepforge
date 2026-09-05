---
qid: ing_2bd64db269__star__local
question: How should tool errors be surfaced to the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 307
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:33-05:00'
sources: []
---

**Situation:** In a product‑grade conversational agent we integrated a third‑party weather API. During a month‑long beta, users complained that the bot occasionally responded with “I’m sorry, I can’t fetch the forecast right now,” and logs showed repeated 502 errors from the API.

**Task:** My goal was to surface those tool errors back into the language model’s context so it could handle failures gracefully—either by retrying, falling back to cached data, or offering an apology that explained the issue without sounding robotic.

**Action:** I implemented a two‑layer error handling pipeline. First, the API wrapper caught HTTP exceptions and mapped them to structured error objects (code, message, retry‑eligible flag). Second, I modified the prompt template so that every tool invocation result—including errors—was appended as a JSON block to the system message before the next user turn. The LLM was fine‑tuned on examples where it read these blocks and generated context‑aware responses. We also added a lightweight “retry counter” in the state to avoid infinite loops.

**Result:** After deployment, failure‑related complaints dropped 67%, and the bot’s overall satisfaction score rose from 78% to 88%. I learned that treating tool errors as first‑class conversational tokens—not just exceptions—enables the model to respond naturally and reduces user frustration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
