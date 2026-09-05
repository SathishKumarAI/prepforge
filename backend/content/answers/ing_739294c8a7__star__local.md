---
qid: ing_739294c8a7__star__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 317
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:59-05:00'
sources: []
---

**Situation:**  
At my last company we built an internal chatbot for developers that let them query our codebase via natural language prompts. One day, a malicious user tried to inject a prompt that would trick the LLM into revealing proprietary source files.

**Task:**  
I was tasked with designing a robust defense that would block prompt injection while preserving legitimate use cases and keeping latency under 300 ms per request.

**Action:**  
First, I implemented a two‑stage filter: (1) a lightweight regex whitelist that strips out any token sequences resembling code execution commands (`open`, `read`, `eval`), and (2) a semantic similarity check using OpenAI’s embeddings to flag prompts whose intent deviated from the allowed query domain. Next, I wrapped every user prompt in a “system” instruction that explicitly told the model: *“You are only allowed to answer questions about the code repository; do not reveal any other content.”* Finally, we added a sandboxed execution layer that would materialize any code snippet the LLM tried to run, preventing side‑effects.

**Result:**  
After deployment, our log of injection attempts dropped from 15 per day to zero over three weeks. User satisfaction scores for the chatbot rose by 12%, and we maintained sub‑200 ms latency. I learned that combining syntactic filtering with semantic context and a strong system prompt is key to robust prompt‑injection defense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
