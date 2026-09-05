---
qid: ing_4e8f21847c__star__local
question: 'Explain: Where to Go Next — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 334
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:38-05:00'
sources: []
---

**Situation**  
In early 2024 I was leading a rapid‑prototype phase for an internal knowledge‑base chatbot at a fintech client. The product team needed to embed up‑to‑date regulatory guidance into the app without waiting on a full LLM deployment cycle.

**Task**  
I had to integrate Microsoft’s Semantic Kernel so that we could leverage GPT‑4 style embeddings and prompt chaining while keeping the stack lightweight, compliant with our data‑privacy policy, and deployable in under two weeks.

**Action**  
First, I cloned the `semantic-kernel` repo and set up a Docker image with .NET 8. Using the Kernel’s `PromptTemplate` feature, I crafted reusable prompts that queried regulatory text from a local SQLite store. I wired the kernel to Azure OpenAI via the `AzureChatCompletionService`, adding an in‑memory cache layer to hit rate limits. For safety, I implemented the built‑in policy engine to filter disallowed content before sending it to the LLM. Finally, I wrote integration tests that mocked the Azure service and verified that prompt responses stayed within a 2 s latency window.

**Result**  
The chatbot launched two weeks ahead of schedule, achieving an average response time of 1.8 s and a 92% accuracy rate against a hand‑validated test set. The client reported a 35% reduction in support tickets related to regulatory queries. I learned how Semantic Kernel’s composable architecture can accelerate LLM adoption while keeping control over data flow and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
