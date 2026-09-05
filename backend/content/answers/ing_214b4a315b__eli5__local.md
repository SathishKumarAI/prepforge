---
qid: ing_214b4a315b__eli5__local
question: 'Explain: 🛠️ Opik Server Installation — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 315
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:28-05:00'
sources: []
---

Imagine you’re setting up a smart kitchen that watches every recipe (your AI model) as it cooks, notes how each ingredient (data point) behaves, and keeps a tidy log so you can taste-test the final dish later. Opik is that kitchen for your language‑model apps: it records (“traces”) everything the model does, runs quick checks (“evaluations”) to see if it’s still tasty, and shows you a dashboard where you can spot problems at a glance.

To get this kitchen running on your computer:

1. **Get the recipe book** – Clone the Opik repo from GitHub (`git clone https://github.com/comet-ml/opik.git`).
2. **Prepare the pantry** – Install dependencies with `pip install -r requirements.txt`.
3. **Set up the oven** – Run the server command: `python -m opik.server`.  
   It starts a local web service that listens for traces.
4. **Invite your chefs** – In your own code, import Opik’s client and point it to the server URL (`opik.init("http://localhost:8000")`).

Once running, every time your model answers a question or processes data, Opik logs the event, lets you run automated checks, and displays everything in an easy‑to‑read dashboard. That’s all you need to keep your AI cooking smooth and safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
