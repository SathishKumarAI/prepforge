---
qid: ing_eb9d72c5e6__star__local
question: 'Explain: Frontend Interface Design — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 353
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:19:46-05:00'
sources: []
---

**Situation**  
At my previous startup we were launching a conversational AI product similar to ChatGPT, but our target audience was customer‑support teams in the financial sector. The beta release had to be intuitive enough for non‑technical agents while still exposing advanced features like tone control and FAQ tagging.

**Task**  
I was tasked with designing the entire frontend interface: from the chat window layout to the settings panel, ensuring low cognitive load, high accessibility, and seamless integration with our backend API.

**Action**  
I started by mapping user journeys and creating wireframes in Figma. I chose React for component reusability, styled‑components for theme consistency, and Redux Toolkit to manage conversation state across tabs. To handle large language model responses efficiently, I implemented a streaming UI using Server‑Sent Events so users saw text appear in real time without blocking the main thread. For accessibility, I added ARIA roles, high‑contrast mode toggles, and keyboard shortcuts for quick actions (e.g., “Ctrl+R” to restart a conversation). I also built an A/B test framework with Optimizely to iterate on button placement and tooltip placement.

**Result**  
The launch saw a 45 % reduction in support tickets about UI confusion, and the average time agents spent on each ticket dropped from 12 minutes to 7.5 minutes. User satisfaction scores rose from 3.8/5 to 4.6/5 within two weeks. I learned that marrying solid component architecture with real‑time streaming can dramatically improve both developer efficiency and end‑user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
