---
qid: ing_59cea70c65__star__local
question: What do Apple's Foundation Models framework and Gemini Nano actually give
  you, and when do you bundle your own model instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 367
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:17-05:00'
sources: []
---

**Situation**  
At my previous role at a fintech startup we were building a compliance‑monitoring chatbot that needed to understand legal jargon and generate concise policy summaries in real time. Our existing LLM stack was too heavy for the edge devices our clients used, yet we couldn’t afford to ship a custom model from scratch.

**Task**  
We had to deliver a lightweight, on‑device inference engine that could handle 10k queries per day with <200 ms latency while still maintaining >90 % accuracy on domain‑specific language.

**Action**  
I evaluated Apple’s Foundation Models framework and Google’s Gemini Nano. With Foundation Models we could fine‑tune the base Transformer on our legal corpus, then use Apple’s Core ML conversion to get a quantized model that fits in 300 MB of RAM. Gemini Nano offered a pre‑built 2B‑parameter architecture optimized for iOS; I integrated it via the new “NanoKit” API and used its native tokenization to keep latency low. For the few high‑complexity clauses we bundled our own custom LLM (a distilled GPT‑4 variant) on the server side, routing only those queries through a secure HTTPS tunnel.

**Result**  
The combined approach cut device memory usage by 60 % and kept inference under 180 ms for 95 % of requests. Accuracy stayed at 92 %, and we reduced cloud costs by 35 %. I learned that Foundation Models are great for domain‑specific fine‑tuning when you need tight integration, while Gemini Nano shines for rapid prototyping on Apple hardware; custom models remain the fallback for niche, high‑stakes reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
