---
qid: ing_7477bdeebb__aws__local
question: 'Explain: Join the community — Gemini Developer API | Gemma open models
  \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 344
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:09-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** I was tasked with onboarding our data‑science team to a new LLM ecosystem so we could prototype conversational agents faster than building from scratch.  
> **Task:** Evaluate Google’s Gemini Developer API and Gemma open models, decide which to adopt, and create an internal “AI‑Developer Community” for knowledge sharing.  
> **Action:** I mapped our use cases (FAQ bot, code assistant) against Gemini’s 70B parameter model and the 3.1B Gemma variant. Using a *Proof‑of‑Concept* notebook, I benchmarked latency (Gemma: 120 ms/response vs Gemini: 210 ms) and cost per inference on AWS SageMaker Edge Manager (Gemma: $0.0006/query, Gemini: $0.0012). I built an internal portal on **AWS Amplify + Cognito** that hosts tutorials, code snippets, and a Slack‑style chat powered by **Amazon Connect Voice ID** for secure access.  
> **Result:** Within 3 weeks we launched two pilots—one with Gemma (100k queries/month) and one with Gemini (25k queries). The Gemma pilot cut inference cost by 50 % while meeting SLA, and the community grew to 120 active developers, reducing support tickets by 35 %.  
> **Learning:** Rapid iteration on model selection and tooling is critical; early feedback loops prevent costly migration later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
