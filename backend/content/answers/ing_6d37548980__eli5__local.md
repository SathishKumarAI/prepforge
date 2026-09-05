---
qid: ing_6d37548980__eli5__local
question: 'Explain: Virtual keys and per-team identity — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 228
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:25-05:00'
sources: []
---

Imagine an office building that hosts many different companies (the teams).  
Each company has its own keycard – a **virtual key** – that opens only the doors it needs and shows who is allowed inside. The keycard doesn’t carry the actual lock; it just proves identity to the security system.

In AI, the “building” is the **LLM Gateway and Serving Platform**, the place where all language‑model (LLM) requests are handled.  
Each team receives a **virtual key**: a unique token that tells the gateway which model version they can use, how many queries they may make, and what data privacy rules apply. The platform reads the key, verifies it against its policy list, and then routes the request to the correct LLM instance.

Thus “per‑team identity” is simply giving every team a distinct pass that guarantees they only see—and influence—the models and resources assigned to them, just like employees use their card to access only their own office spaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
