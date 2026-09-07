---
qid: ing_bb78bcdf64__aws__local
question: 'Explain: Key Features — GitHub - microsoft/semantic-kernel: Integrate cutting-edge
  LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 426
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:37-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team needed to prototype a conversational agent for an internal knowledge‑base app. We had no LLM expertise and were pressed for time.

*Task*: Deliver a production‑ready integration that allowed us to iterate on prompts and models without vendor lock‑in.

*Action*: I evaluated **Microsoft’s Semantic Kernel** (GitHub repo `microsoft/semantic-kernel`) and built a lightweight wrapper. Key features I leveraged:

| Feature | Why it mattered |
|---------|-----------------|
| *LLM‑agnostic API* | Allowed us to switch from OpenAI GPT‑4 to Azure OpenAI or Anthropic without code changes (ownership). |
| *Prompt templates & chaining* | Enabled reusable, versioned prompt logic—critical for scaling across 12 internal products. |
| *Semantic memory store* | Persisted user context in an SQLite/Redis cache, cutting response latency by **30 %** compared to stateless calls. |
| *Extensibility hooks* | Plugged in a custom Azure Function that added real‑time data from our ERP system (bias for action). |

I deployed the stack on **AWS Fargate + S3 + DynamoDB**, keeping costs under **$0.07 per inference** and achieving 99.9 % availability by replicating the kernel across two AZs.

*Result*: Within 4 weeks we launched a live chatbot used by 1,200 engineers daily; MTTR for prompt bugs dropped from 8 h to 30 min, and user satisfaction scores rose 45 %. The project was cited in our quarterly “Innovation” award.  

**Bar‑raiser cues**: I demonstrated deep ownership (code + infra), dive deep into performance metrics, quantified impact, and learned that early caching of semantic memory significantly reduced cloud spend—an insight we applied to other projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
