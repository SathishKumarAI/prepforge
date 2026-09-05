---
qid: ing_5a758a55b8__star__local
question: 'Explain: 🎬 Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 348
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:31-05:00'
sources: []
---

**Situation:** At my previous company we were launching an internal “AI‑Powered Interview Assistant” to help recruiters simulate candidate conversations. The beta version had 70% accuracy in predicting candidate fit, but the UI was clunky and users complained about lack of realistic scenarios.

**Task:** I was tasked with designing a Mock Interview Kit that could generate diverse, role‑specific dialogue prompts, score responses in real time, and provide actionable feedback—all while keeping latency under 200 ms for live sessions.

**Action:** First, I mapped the interview flow and built a knowledge graph of key competencies using Neo4j. Then I trained a GPT‑4 fine‑tuned on 10k past interview transcripts to generate realistic prompts. For scoring, I implemented a lightweight transformer model (DistilBERT) that evaluated candidate responses against rubric embeddings, running inference on an NVIDIA T4 GPU with TorchScript for speed. To keep latency low, I batch requests and cache common prompts. Finally, I integrated the kit into our existing web portal using React and FastAPI, adding real‑time analytics dashboards powered by Grafana.

**Result:** The Mock Interview Kit cut average response time from 350 ms to 120 ms and increased recruiter satisfaction scores from 4.2/5 to 4.8/5. In pilot tests, the system improved candidate match accuracy by 12% compared to manual screening. I learned that combining domain knowledge graphs with fine‑tuned language models can deliver high‑quality AI experiences without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
