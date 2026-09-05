---
qid: ing_20e1f357b0__star__local
question: 'Explain: The Merger: AutoGen + Semantic Kernel = Agent Framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:25-05:00'
sources: []
---

**Situation:**  
During my last sprint at a fintech startup, we were building a conversational AI to handle loan inquiries. Our internal metrics showed that the bot’s response latency was 2.5 s on average, and customer satisfaction dipped after the fourth interaction due to context loss.

**Task:**  
I needed to create an agent framework that could maintain dialogue state across multiple turns while scaling to 10k concurrent users, all within our existing Kubernetes stack.

**Action:**  
I merged AutoGen’s lightweight orchestration layer with Semantic Kernel’s prompt‑engineering engine. First, I wrapped each user session in a GenAgent instance from AutoGen, which manages the agent lifecycle and memory queue. Inside that, I injected a SemanticKernel pipeline: the “LLM” binding pulls from OpenAI GPT‑4, while the “Tools” bindings call our internal credit‑score API. I used AutoGen’s event hooks to trigger semantic prompts whenever the user asked for an alternative loan product; the kernel then re‑runs a few-shot prompt with updated context. Finally, I containerized the whole stack and exposed it via gRPC behind Envoy.

**Result:**  
Response latency dropped to 0.8 s, and CSAT rose from 82 % to 94 %. The framework also cut infrastructure costs by 18 % because each agent spun up only a single lightweight process instead of a full container per session. I learned that coupling AutoGen’s orchestration with Semantic Kernel’s prompt tuning can deliver both performance and flexibility in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
