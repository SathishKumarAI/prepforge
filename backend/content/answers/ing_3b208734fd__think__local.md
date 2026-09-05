---
qid: ing_3b208734fd__think__local
question: 'Explain: Span Processors — GitHub - Arize-ai/phoenix: AI Observability
  & Evaluation \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 427
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:45:14-05:00'
sources: []
---

**1️⃣ Clarify the ask and set assumptions**  
- The user wants a conceptual explanation of *Span Processors* as used in the Arize‑AI Phoenix repo, not a line‑by‑line code walkthrough.  
- Assume they know basic OpenTelemetry (OTel) concepts but not Phoenix’s specific implementation.

**2️⃣ Mental model / framework**  
- Treat Span Processor as an OTel “plug‑in” that receives finished spans from the SDK and forwards them to downstream systems (metrics, logs, external services).  
- Map the lifecycle: *span starts → attributes added → span ends → processor receives it*.  
- Identify Phoenix’s goals: batching, filtering, enrichment, and routing for observability.

**3️⃣ Step‑by‑step reasoning toward an answer**  
1. Outline what a “processor” does in OTel.  
2. Show how Phoenix extends the base interface (`SpanProcessor`).  
3. Explain key methods (`OnStart`, `OnEnd`, `Shutdown`).  
4. Highlight Phoenix‑specific logic: e.g., *span filtering by type, custom tags, or sampling*, *batching spans into chunks before sending to Arize’s backend*.  
5. Mention how processors integrate with the SDK via configuration.

**4️⃣ Common traps to avoid**  
- Don’t dive into every helper function; keep it high‑level.  
- Avoid assuming the reader knows Phoenix internals—explain only what’s necessary.  
- Don’t mix up “processor” (runtime hook) with “exporter” (final sink).  

**5️⃣ Sanity‑check & communicate clearly**  
- Re‑phrase: “Think of a processor as an instant messenger that captures each finished span, optionally modifies it, and then hands it off to the next step.”  
- Verify you covered the lifecycle, Phoenix’s custom logic, and why it matters (performance, observability).  
- Keep the explanation under ~200 words and use bullet points or numbered lists for readability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
