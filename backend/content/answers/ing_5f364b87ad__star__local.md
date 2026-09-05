---
qid: ing_5f364b87ad__star__local
question: 'Explain: 🧭 Prompt & Context Engineering — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:38-05:00'
sources: []
---

**Situation:**  
At my last role, we were building a conversational agent for a fintech client that needed to interpret user queries about account balances and transaction history while staying compliant with regulatory language constraints. The initial bot churned out generic responses that often missed the nuance of each request, leading to a 35 % drop in user satisfaction scores.

**Task:**  
I had to redesign the prompt architecture so the LLM could reliably understand context from short user inputs, generate precise compliance‑safe answers, and keep response latency under 800 ms for real‑time chat.

**Action:**  
First, I mapped out a multi‑layered prompt: (1) a “system” instruction that set the tone (“You are a finance assistant…”) and embedded compliance rules; (2) a dynamic “context” block that pulled in the user’s recent account data via secure API calls; and (3) a “user” section containing the raw query. I used OpenAI’s ChatCompletion API with temperature 0.2 for consistency, added a prompt template engine to stitch these layers on the fly, and implemented token‑budgeting logic to keep prompts under 1,000 tokens. I also set up an A/B test harness that logged every response score and latency.

**Result:**  
After deployment, user satisfaction rose from 62 % to 88 %, while compliance error incidents dropped to zero. Response time stayed below the 800 ms target for 95 % of interactions. The exercise taught me that treating prompt engineering as a modular, data‑driven process—rather than ad hoc tweaking—yields measurable, scalable improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
