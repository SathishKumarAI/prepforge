---
qid: ing_62126c9976__star__local
question: 'Explain: LLM as a judge — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:19-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a conversational AI that needed to comply with strict safety and bias guidelines. Our internal QA team could only review a handful of test dialogs each week, so by the time we released a new model version we often discovered compliance gaps weeks later.

**Task:**  
I was tasked with building an automated “LLM judge” that would run thousands of synthetic conversations, evaluate them against our policy rules, and flag violations in real time, all while keeping false‑positive rates below 2 %.

**Action:**  
I wrapped a fine‑tuned GPT‑4 model into a microservice. The prompt was engineered to ask the LLM: “Act as an impartial compliance auditor; rate each utterance on safety, bias, and factuality.” I fed it batches of 200 dialogs from our synthetic generator, parsed its structured JSON output, and used a scoring matrix (0‑5) to compute overall compliance. The system logged every decision with the original dialog snippet so human reviewers could audit edge cases. To keep costs down we cached prompt templates and reused token embeddings across requests.

**Result:**  
The judge processed 50 k dialogs per day, cutting our manual review time from 3 days to under 6 hours. False‑positive rates dropped to 1.8 %, and compliance violations were caught before release, preventing a potential regulatory audit. I learned that careful prompt design and structured output can turn an LLM into a reliable, scalable quality gate for AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
