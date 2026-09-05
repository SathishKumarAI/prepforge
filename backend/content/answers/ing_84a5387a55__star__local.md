---
qid: ing_84a5387a55__star__local
question: 'Explain: Tools and Frameworks — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:39-05:00'
sources: []
---

**Situation:**  
When my team was tasked with launching a conversational AI assistant for our e‑commerce platform, we had to integrate real‑time inventory checks, personalized recommendations, and multilingual support—all within a two‑month sprint.

**Task:**  
I needed to design an agent architecture that could ingest user intent, manage state across multiple services, and scale horizontally while keeping latency under 200 ms for the front‑end experience.

**Action:**  
I chose Rasa Core as the dialogue engine because of its open‑source flexibility and Python ecosystem. For intent classification I used spaCy with a custom NER pipeline to pull SKU codes from user utterances. To orchestrate services, I wrapped each external API (inventory, recommendation, translation) in lightweight FastAPI endpoints and exposed them via a gRPC gateway for low overhead. State persistence was handled by Redis Streams so that the agent could recover after failures. Finally, I containerized everything with Docker Compose and deployed to Kubernetes using Helm charts, leveraging Horizontal Pod Autoscaler to meet traffic spikes.

**Result:**  
The launch met its SLA: average turn latency 145 ms, error rate <0.5%. Post‑launch analytics showed a 23% increase in add‑to‑cart conversions from the chat window. I learned that combining an open dialogue framework with microservice orchestration and a robust state store yields both agility and reliability for agent building.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
