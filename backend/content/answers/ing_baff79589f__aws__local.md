---
qid: ing_baff79589f__aws__local
question: 'Explain: Structured outputs — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 420
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:24-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a *structured‑output* inference pipeline for an internal chatbot that needed to return JSON payloads (e.g., booking details) instead of plain text. The team’s goal: 99 % correct schema mapping while keeping latency under 200 ms.

**Action – Prompt Engineering & Context**  
I treated the prompt as a *context‑aware schema template*.  
1. **Template Injection** – I constructed a minimal JSON skeleton and prefixed it to every user query (`{"date": "", "location": ""}`).  
2. **Few‑shot examples** – I added 3–5 labeled prompts in the system message, each mapping a natural‑language request to the exact schema.  
3. **Dynamic context windowing** – For longer chats I truncated conversation history to the last 1 k tokens and inserted the current prompt, ensuring the model had only relevant context.

I wrapped this logic in a **Lambda@Edge** function that calls **Amazon Bedrock** (Claude‑2) with `max_output_tokens=512`. The function parses the raw output; if it fails validation, we retry once with an “improve” instruction.  

**Result**  
- Accuracy rose from 82 % to **98.7 %** on a held‑out test set.  
- Latency averaged **145 ms**, meeting SLA.  
- Cost per inference dropped 30 % by eliminating the need for post‑processing regex pipelines.

**Reflection (Bar‑raiser)**  
I *owned* the entire end‑to‑end flow, dived deep into token budgeting, and quantified impact with clear metrics. When initial attempts hit the 200 ms ceiling, I learned to prune context instead of blindly adding more examples—an iterative improvement that exemplifies Amazon’s **Ownership** and **Dive Deep** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
