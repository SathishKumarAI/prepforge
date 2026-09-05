---
qid: ing_f46f49145c__star__local
question: 'Explain: Layer 6: Observability and Evaluation — The AI Agent Tech Stack
  Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 425
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:07-05:00'
sources: []
---

**Situation** – At my last company we launched a conversational AI that handled 12k daily support tickets. Shortly after launch, the ticket resolution time started creeping up from an SLA of 3 min to 7 min, and our engineers had no clear idea why.

**Task** – I was tasked with building a full observability layer for the agent stack so we could see every decision the model made, track latency, and quickly pinpoint any degradation in performance or drift in intent classification.

**Action** – First, I wrapped each micro‑service (LLM inference, NLU, routing) with OpenTelemetry exporters to stream traces into Jaeger. For metrics, I instrumented the agent’s response time, confidence scores, and error rates, pushing them to Prometheus. On top of that, I added a custom log sink that captured the raw prompt–response pairs and intent labels, storing them in an Elasticsearch index for later analysis. I built Grafana dashboards that visualised per‑intent latency histograms and a “confidence heatmap” that highlighted when the model was uncertain. Finally, I set up automated alerts that triggered when confidence fell below 0.6 or response times exceeded the SLA.

**Result** – Within two weeks we cut average resolution time from 7 min back to 3.2 min, and our mean time to detect an issue dropped from 48 h to under 30 min. The observability stack also enabled us to detect a subtle model drift that would have otherwise caused a spike in unsatisfactory responses, giving the data science team early warning to retrain. I learned that without a dedicated observability layer, AI systems quickly become black boxes, and that real‑time metrics + traceability are essential for maintaining SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
