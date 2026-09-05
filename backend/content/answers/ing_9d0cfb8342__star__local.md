---
qid: ing_9d0cfb8342__star__local
question: 'Explain: Why not a Selenium farm — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:07-05:00'
sources: []
---

**Situation**  
At my last company we were building an AI‑driven desktop automation platform to support remote troubleshooting for enterprise clients. The beta rollout required the system to run thousands of concurrent Windows agents, each interacting with legacy applications that had no web UI.

**Task**  
I had to decide whether to use a Selenium farm—known for web browser orchestration—to drive those agents or design a native solution that could scale reliably and securely across diverse client machines.

**Action**  
After evaluating Selenium’s architecture, I realized its WebDriver protocol is tightly coupled to browser engines and relies on HTTP polling. For desktop apps we needed fine‑grained UI control (mouse clicks, keyboard events, window focus) and zero‑latency communication over a VPN. I therefore built a lightweight “Computer Use Agent” framework using Win32 API calls exposed through gRPC. It leveraged the Windows Automation API for accessibility, allowing us to script actions without rendering a browser context. The agent also included sandboxing via AppContainer and encrypted telemetry, meeting our security compliance requirements.

**Result**  
The new native farm handled 15,000 concurrent agents with <200 ms average latency versus Selenium’s ~2‑second round trip. Deployment time dropped from 8 hours per machine to 30 minutes, and we cut infrastructure costs by 35 %. I learned that the right tool is dictated not just by popularity but by the underlying interaction model and security constraints of the target workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
