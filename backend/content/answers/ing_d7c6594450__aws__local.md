---
qid: ing_d7c6594450__aws__local
question: As a frontend engineer, what do you actually need to know about tokens and
  context windows?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:19-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:* While building a real‑time chat UI for our AI assistant, users complained that the bot “forgot” earlier parts of their conversation after a few turns.

*Task:* I needed to explain to stakeholders why token limits and context windows mattered and how we could mitigate the issue on the frontend without hurting performance.

*Action:*  
1. **Educated the team**: I created a quick demo that logged the number of tokens per user message (≈ 4 bytes/char) and visualized the 4096‑token limit of our LLM.  
2. **Designed a sliding‑window cache** in IndexedDB, backed by **AWS Amplify DataStore** for offline sync. Each new turn trimmed older messages until the token count stayed below 3500 to leave headroom for the response.  
3. **Implemented lazy rendering** with React Suspense so only the last few turns were rendered, keeping bundle size < 120 KB.  
4. **Monitored impact** in CloudWatch: latency dropped from 2.8 s to 1.6 s and user‑reported “memory” complaints fell by 42 % (N=3k sessions).

*Result:* We delivered a smoother UX, reduced server cost by ~18 % (fewer tokens sent per request), and gained a reusable pattern for any token‑bounded AI service.

**Bar‑raiser notes:**  
- Ownership: I led the end‑to‑end solution.  
- Depth: Went beyond surface advice to quantify token usage, design storage, and measure latency/usage.  
- Impact: Clear metrics on performance & cost savings.  
- Learning: First attempt had a 1.2 s lag; after profiling we switched to IndexedDB + Suspense, which paid off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
