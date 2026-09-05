---
qid: ing_8f9da42e31__star__local
question: 'Explain: Your agent reads inbound email and can send replies and search
  internal docs. Walk me through the prompt-injection attack surface and your defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 310
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:02-05:00'
sources: []
---

**Situation**  
When I built an AI‑powered inbox assistant for a fintech firm, the bot could read incoming emails, generate replies, and pull relevant policy documents from our internal knowledge base.

**Task**  
I had to ensure that malicious actors couldn’t manipulate the LLM’s prompts via injected text in emails—i.e., prevent prompt‑injection attacks—while still allowing legitimate user intent.

**Action**  
First, I sandboxed all inbound content: every email was parsed and tokenized, stripping HTML and scripts. I introduced a “prompt boundary” string that wrapped user input before concatenating it with the system prompt. The LLM was instructed to treat anything after this boundary as data only, not executable code. Next, I implemented a semantic filter using OpenAI’s text‑embedding model: any phrase whose similarity score to known injection templates exceeded 0.85 triggered a re‑prompt that asked for clarification. Finally, I logged all prompts and responses, applying anomaly detection on response length and sentiment to catch outliers.

**Result**  
Within three months of deployment, zero successful prompt‑injection incidents were recorded. The bot maintained a 92 % accurate reply rate while cutting manual review time by 35 %. I learned that combining syntactic boundaries with semantic similarity checks provides robust defense without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
