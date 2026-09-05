---
qid: ing_c09083733e__star__local
question: 'Explain: Self-mock protocol (no partner) — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 372
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:35-05:00'
sources: []
---

**Situation** – While preparing for a senior ML engineer role at a fintech startup, my interview panel asked me to demonstrate end‑to‑end model deployment skills. I had no colleague available for a mock interview and needed to simulate realistic feedback on both code quality and presentation.

**Task** – Build a self‑mock protocol that would let me rehearse the interview, receive structured critique, and iterate quickly without external help.

**Action** – I created a “Mock Interview Kit” by combining several tools:  
1. **Python notebook** with JupyterLab for live coding demos.  
2. A **CLI script** (`interview‑simulator.py`) that reads my code, runs unit tests, and outputs a mock interview transcript using GPT‑4 to generate questions based on the code’s logic.  
3. An internal **GitHub Actions workflow** that triggers on push, builds Docker images, deploys to a temporary staging cluster (using Minikube), and logs performance metrics.  
4. A simple **Slack bot** that posts the generated transcript to a private channel where I could annotate responses and score my answers on clarity, depth, and trade‑off reasoning.

**Result** – After three iterations, my mock interview score rose from 60/100 (initial pass) to 92/100 in terms of technical accuracy and communication. The process also revealed that I needed to emphasize edge‑case handling during model inference, which I later highlighted successfully in the real interview. This self‑mock protocol saved me 15 hours of preparation time and gave me confidence to tackle the live interview with a polished delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
