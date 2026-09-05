---
qid: ing_c3f80314ed__star__local
question: 'Explain: Plugins and Planners — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 369
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:49-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech, we were building an AI‑powered customer support bot that needed to pull data from multiple legacy systems (CRM, billing, compliance). The existing workflow was hardcoded, leading to slow iteration and frequent bugs when new services joined.

**Task:**  
I had to design a flexible architecture so the bot could dynamically integrate new external APIs and plan multi‑step conversations without rewriting core logic. The goal was to cut integration time from weeks to days and improve response accuracy by 20 %.

**Action:**  
I introduced Semantic Kernel’s **Plugins**—modular, declarative wrappers around each API (e.g., a CRM plugin exposing “GetCustomerInfo”). These plugins were registered in the kernel so the language model could invoke them via natural prompts. For orchestration, I built **Planner** modules that used the kernel’s planner component to generate step‑by‑step action sequences based on user intent. The planner evaluated available plugins, estimated cost and latency, then produced an optimal plan (e.g., “fetch billing data → validate compliance → draft reply”). We implemented this in .NET with C# 12, leveraging the OpenAI GPT‑4 model for reasoning.

**Result:**  
Integration of a new payment gateway plugin took under 48 hours instead of two weeks. The bot’s average response time dropped from 3.2 s to 1.5 s, and customer satisfaction scores rose by 18 %. I learned that treating APIs as first‑class semantic objects and letting the model orchestrate actions dramatically speeds development while keeping business logic declarative and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
