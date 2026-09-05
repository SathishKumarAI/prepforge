---
qid: ing_f7e7cbb4fc__star__local
question: How would you build an abstraction over multiple LLM providers, and what
  breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 313
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:39-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with launching a customer‑support chatbot that needed to switch between OpenAI, Anthropic, and Azure’s GPT models depending on cost, latency, and compliance requirements.

**Task:**  
I had to create a single API layer so the rest of the stack could request “generate text” without knowing which LLM provider powered it, while also handling rate limits, quota enforcement, and model‑specific quirks.

**Action:**  
I built a lightweight Rust library that wrapped each provider’s SDK behind a trait `LLMClient`. I used an enum to map internal intents (e.g., “short answer”, “summarize”) to the most suitable external model. A config file stored per‑provider credentials, token limits, and fallback chains. The library exposed a `chat(context: &str) -> Result<String>` method that internally performed retries with exponential backoff and automatically fell back if a provider returned an error or exceeded its quota. I also added instrumentation to log latency and cost per request for later analysis.

**Result:**  
The abstraction cut integration time for new models from days to hours, reduced operational costs by 18 % through smarter model selection, and lowered average response latency from 1.4 s to 0.9 s. I learned that the biggest breaking points are differing tokenization schemes and inconsistent error codes—standardizing those early is key to a robust multi‑provider layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
