---
qid: ing_f8f038e323__star__local
question: 'Explain: Teleprompters (Optimizers) — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:22-05:00'
sources: []
---

**Situation** – At a media‑tech startup, we were building an AI‑powered live‑stream assistant that read scripted content on a teleprompter while keeping viewers engaged. Our initial prompts produced awkward pauses and filler words, hurting viewer retention by 18% over the first month.

**Task** – I needed to design a prompt optimization pipeline that would generate natural, concise scripts in real time, reduce latency, and maintain context across long passages for a 2‑hour broadcast.

**Action** – I introduced DSPy’s PromptComposer framework. First, I defined a reusable `ScriptPrompt` template with slots for tone, pacing, and key message points. Using DSPy’s `ChainOfThoughtOptimizer`, I iterated over prompt variants, scoring them on BLEU against human‑edited scripts and latency in milliseconds. I integrated a reinforcement loop: after each broadcast, viewer engagement metrics fed back into the optimizer to fine‑tune weights for naturalness vs. speed. Finally, I wrapped the whole pipeline in an async FastAPI service so the teleprompter could request new prompts within 200 ms.

**Result** – Viewer retention rose from 82% to 95%, and average pause length dropped from 3.5 s to 1.2 s across all shows. I learned that combining prompt templates with automated metric‑driven optimization can turn a generic LLM into a production‑grade teleprompter, balancing quality and speed in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
