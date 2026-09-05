---
qid: ing_198fdf850f__star__local
question: 'Explain: 🧑‍⚖️ LLM as a Judge metrics — GitHub - comet-ml/opik: Debug, evaluate,
  and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive
  tracing, automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 288
output_tokens: 398
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:32-05:00'
sources: []
---

**Situation** – While leading the migration of our customer‑support chatbot to an agentic workflow, we noticed that the new LLM‑driven decision engine was generating inconsistent escalation decisions, inflating ticket volume by 18 % over two weeks.

**Task** – I needed to diagnose why the model was erratic, build a repeatable evaluation pipeline, and surface actionable insights so the devs could retrain or re‑rank prompts without endless manual checks.

**Action** – I set up the **Opik** framework on our staging environment. First, I instrumented every user request with Opik’s tracing agent to capture raw prompt, model log‑probs, and downstream decision metadata. Next, I defined a suite of automated evaluation metrics: a “correct escalation” accuracy against a gold standard, latency thresholds, and a custom “conflict score” comparing the LLM’s choice to our rule‑based fallback. Using Opik’s RAG connectors, I pulled in relevant knowledge base snippets that the model should have considered, feeding them into a re‑ranking step to surface better context. Finally, I built an interactive dashboard that plotted these metrics per prompt type and flagged outliers in real time.

**Result** – Within three days of deployment, we reduced incorrect escalations by 72 % (down from 18 % to 5 %) and cut average latency from 1.4 s to 0.9 s. The dashboard also helped the data‑science team prioritize prompt tweaks, proving that continuous, metric‑driven monitoring turns an LLM into a reliable judge of its own behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
