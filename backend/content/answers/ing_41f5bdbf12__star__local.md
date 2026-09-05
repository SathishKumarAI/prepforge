---
qid: ing_41f5bdbf12__star__local
question: 'Explain: Sign up at cloud.langfuse.com or self-host'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 307
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:40:27-05:00'
sources: []
---

**Situation** – At my previous startup we were building a conversational AI that needed real‑time intent detection and contextual grounding. Our existing stack was on AWS, but we hit latency limits when fetching external knowledge bases during user chats.

**Task** – I had to integrate Langfuse for experiment tracking and prompt evaluation without breaking our CI/CD pipeline or exceeding budget.

**Action** – First, I signed up at cloud.langfuse.com using the free tier. I created a project, added our HuggingFace transformer model as an endpoint, and wrote a small Python script that wrapped each inference call with Langfuse’s `log_prompt` decorator. For self‑hosting, I pulled the Docker image from their registry, ran it locally on a GPU instance, and connected it to our existing Prometheus stack for metrics. I set up a lightweight web UI in React to view prompt scores and A/B test results in real time.

**Result** – Within two weeks we cut average response latency by 12% while gaining granular visibility into prompt quality. The experiment logs helped us drop three low‑performing prompts, boosting overall user satisfaction from 78 % to 86 %. I learned that a hybrid approach—cloud for quick iteration and self‑host for production stability—can deliver both speed and control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
